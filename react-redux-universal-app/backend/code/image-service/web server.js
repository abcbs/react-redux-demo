import { errors } from 'web-service'
import web_service from '../common/webservice'

import path from 'path'
import fs   from 'fs-extra'
import promise_pipe from 'promisepipe'

import get_image_info         from './image info'
// import { resize, autorotate } from './image manipulation gm'
import { resize, autorotate, image_stream } from './image manipulation sharp'
import database               from './database/database'
import { clean_up }           from './cleaner'

const upload_folder = path.resolve(Root_folder, configuration.image_service.temporary_files_directory)
const output_folder = path.resolve(Root_folder, configuration.image_service.files_directory)

// checks if filesystem path exists
function fs_exists(path)
{
	return new Promise((resolve, reject) =>
	{
		fs.exists(path, exists => resolve(exists))
	})
}

function temporary_path(file_name)
{
	return path.resolve(upload_folder, file_name)
}

function permanent_path(file_name, type)
{
	return path.resolve(output_folder, type.path, file_name)
}

const web = web_service
({
	authentication : true,
	parse_body     : false,
	routing        : '/api'
})

// temporary uploaded images
web.files('/uploaded', upload_folder)

// saved uploaded images (user pictures, etc)
web.files('/', output_folder)

web.get('/', async function({ skip, amount })
{
	this.role('administrator')

	skip = skip || 0
	amount = amount || 100

	return await database.get_batch(skip, amount)
})

web.get('/clear_temporary', async function()
{
	this.role('administrator')

	return await clean_up({ force: true })
})

web.delete('/:id', async ({ id }, { user }) =>
{
	if (!user)
	{
		throw new errors.Unauthenticated()
	}

	const image = await database.get_with_user(id)

	if (!image)
	{
		throw new errors.Not_found()
	}

	if (image.user !== user.id)
	{
		throw new errors.Unauthorized()
	}

	const image_type = configuration.image_service.type[image.type]

	if (!image_type)
	{
		throw new Error(`Unknown image-service type: "${type}"`)
	}

	for (let size of image.sizes)
	{
		const image_path = permanent_path(size.name, image_type)

		if (await fs_exists(image_path))
		{
			await fs.unlinkAsync(image_path)
		}
	}

	// await database.decrease_user_images_size(user, image.info.files_size)

	await database.delete(id)
})

web.post('/save', async ({ type, image }, { user }) =>
{
	if (!user)
	{
		throw new errors.Unauthenticated()
	}

	const image_type = configuration.image_service.type[type]

	if (!image_type)
	{
		throw new Error(`Unknown image-service type: "${type}"`)
	}

	if (!image)
	{
		throw new errors.Not_found()
	}

	for (let size of image.sizes)
	{
		const to = permanent_path(size.name, image_type)
		await fs.moveAsync(temporary_path(size.name), to)

		size.file_size = (await fs.statAsync(to)).size
	}

	const { date, date_utc0, location, sizes, ...rest } = image

	image.id = await database.create
	({
		user,
		type,
		sizes : image.sizes,
		files_size : image.sizes.reduce((total, size) => total + size.file_size, 0),
		coordinates : location,
		taken_at : date,
		taken_at_utc0 : date_utc0,
		info: rest
	})

	// await database.increase_user_images_size(user, image.files_size)

	return image
})

// returns:
//
// {
//	id: '507f191e810c19729de860ea',
// 	date: new Date(),
// 	location:
// 	{
// 		latitude: 34.25733333333334,
// 		longitue: 118.5373333333333
// 	},
// 	sizes:
// 	[{
// 		name: 'image@100x100.png',
// 		width: 100,
// 		height: 100
// 	},
// 	...]
// }

web.upload('/upload', upload_folder,
{
	file_size_limit: configuration.image_service.file_size_limit,
	on_file_uploaded: async function({ original_file_name, uploaded_file_name, path, ip })
	{
		// const size = (await fs.statAsync(path)).size
		//
		// May restrict file uploads for this ip.
		// `ip` trusts X-Forwarded-For HTTP Header.
	},
	process: async function({ original_file_name, uploaded_file_name }, parameters)
	{
		const image_type = configuration.image_service.type[parameters.type]

		if (!image_type)
		{
			throw new Error(`Unknown image-service type: "${parameters.type}"`)
		}

		const from = path.resolve(upload_folder, uploaded_file_name)

		if (path.extname(original_file_name) === '.svg')
		{
			const file_name = uploaded_file_name + '.svg'

			const to = temporary_path(file_name)

			await fs.copyAsync(from, to, { replace: false })

			const result =
			{
				sizes:
				[{
					name: file_name
				}],
				// server: 1
			}

			// result.sizes[0].file_size = (await fs.statAsync(to)).size

			return result
		}

		const image_info = await get_image_info(from)

		if (image_info.format !== 'jpeg' && image_info.format !== 'png')
		{
			throw new Error('Only JPEG, PNG and SVG images are supported')
		}

		const resizing = []

		const image_min_extent = Math.min(image_info.width, image_info.height)

		const target_sizes = image_type.sizes || configuration.image_service.sizes

		const stream = image_stream()

		for (let max_extent of target_sizes)
		{
			resizing.push(resize_for_size(stream, from, max_extent, image_info, image_type, uploaded_file_name))

			// file_sizes.push((await fs.statAsync(to)).size)

			// If the image is smaller than (or equal to) the current resize step extent
			// then it means that the next (bigger) resize step won't be applied,
			// so just exit the loop and generate no more (bigger) resizes of this image.
			if (image_min_extent <= max_extent)
			{
				break
			}
		}

		if (stream)
		{
			await promise_pipe(fs.createReadStream(from), stream)
		}

		const sizes = await Promise.all(resizing)

		await fs.unlinkAsync(from)

		// possibly eliminate the size previous to the biggest one,
		// if it's less than 10% different from the biggest size
		if (sizes.length > 1)
		{
			const biggest  = sizes[sizes.length - 1]
			const previous = sizes[sizes.length - 2]

			if ((biggest.width - previous.width) / previous.width < 0.1)
			{
				sizes.remove(previous)

				await fs.unlinkAsync(temporary_path(previous.name))
			}
		}

		const result =
		{
			sizes,
			// server: 1
		}

		if (image_info.date)
		{
			result.date = image_info.date
		}

		if (image_info.date_utc0)
		{
			result.date_utc0 = image_info.date_utc0
		}

		if (image_info.location)
		{
			result.location = image_info.location
		}

		// let i = 0
		// while (i < result.sizes.length)
		// {
		// 	result.sizes[i].file_size = file_sizes[i]
		// 	i++
		// }

		return result
	}
})

web.listen(configuration.image_service.http.port).then(() =>
{
	log.info(`Image service is listening at http://${configuration.image_service.http.host}:${configuration.image_service.http.port}`)
},
error =>
{
	log.error(error, 'Image service shutdown')
})

async function resize_for_size(stream, from, max_extent, image_info, image_type, uploaded_file_name)
{
	const dot_extension = image_info.format === 'png' ? '.png' : '.jpg'

	const image_min_extent = Math.min(image_info.width, image_info.height)

	const to_temporary = `${from}@${max_extent}${dot_extension}`

	let resized

	// If the image is smaller than (or equal to) the current resize step extent
	// then don't stretch the image to the lengh of the current resize step extent
	// and leave its scale as it is.
	if (image_min_extent <= max_extent)
	{
		if (image_type.square)
		{
			resized = await resize(stream || from, to_temporary, { max_extent: image_min_extent, square: true })
		}
		else
		{
			resized = await autorotate(stream || from, to_temporary)
		}
	}
	// Otherwise scale down the image to the length of the current resize step extent
	else
	{
		resized = await resize(stream || from, to_temporary, { max_extent, square: image_type.square })
	}

	if (!resized)
	{
		resized = await get_image_info(to_temporary, { simple: true })
	}

	const file_name = `${uploaded_file_name}@${resized.width}x${resized.height}${dot_extension}`

	const to = temporary_path(file_name)
	await fs.moveAsync(to_temporary, to)

	const result =
	{
		width  : resized.width,
		height : resized.height,
		name   : file_name
	}

	return result
}

function image_info_to_database_image_data(image)
{
	const { date, date_utc0, location, sizes, ...rest } = image

	const data =
	{
	}

	if (Object.keys(rest) > 0)
	{
		data.info = rest
	}

	if (date_utc0)
	{
		data.date_utc0 = date_utc0
	}

	if (date)
	{
		data.date = date
	}

	if (location)
	{
		data.location = location
	}

	return data
}