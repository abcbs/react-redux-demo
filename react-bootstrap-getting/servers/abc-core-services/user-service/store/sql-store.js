import uuid from 'uuid'

import Sql from '../../../abc-framework/stores/sql'

const Max_aliases_in_history = 10

export default class Sql_store
{
	ready()
	{
		return this.connecting || (this.connecting = this.connect())
	}

	async connect()
	{
		this.users = new Sql('users')
		this.user_alias_history = new Sql('user_alias_history')
		this.block_user_tokens = new Sql('block_user_tokens')
	}

	async create_user(user)
	{
		return (await this.users.create(user)).id
	}

	find_user(id)
	{
		if (String(parseInt(id)) === String(id))
		{
			return this.find_user_by_id(id)
		}

		return this.find_user_by_alias(id)
	}

	find_user_by_id(id)
	{
		return this.users.find(id)
	}

	find_user_by_email(email)
	{
		return this.users.find({ email })
	}

	async find_user_by_alias(alias)
	{
		const user = await this.users.find({ alias })

		if (user)
		{
			return user
		}
		const alias_history_entry = await this.user_alias_history.find({ alias })

		if (alias_history_entry)
		{
			return await this.find_user_by_id(alias_history_entry.user)
		}
	}

	update_user(id, data)
	{
		return this.users.update(id, data)
	}

	update_picture(id, picture)
	{
		return this.update_user(id,
		{
			picture : picture.id,

			picture_sizes : JSON.stringify(picture.sizes.map((size) =>
			({
				name   : size.name,
				width  : size.width,
				height : size.height
			})))
		})
	}

	update_locale(user_id, locale)
	{
		return this.users.update(user_id, { locale })
	}

	async can_take_alias(alias, self_id)
	{
		const user = await this.users.find({ alias })
		if (user)
		{
			if (!self_id || user.id !== self_id)
			{
				return false
			}
		}
		const alias_history_entry = await this.user_alias_history.find({ alias })

		if (alias_history_entry && alias_history_entry.user !== self_id)
		{
			return false
		}
		return true
	}

	async change_alias(user_id, alias)
	{
		const user = await this.find_user_by_id(user_id)
		const previous_aliases_count = await this.user_alias_history.count({ user: user_id })
		if (previous_aliases_count > Max_aliases_in_history)
		{
			throw new Error(`Max aliases reached`)
		}
		if (user.alias)
		{
			await this.user_alias_history.create({ user: user_id, alias: user.alias })
		}
		await this.update_user(user_id, { alias })

		const alias_history_entry = await this.user_alias_history.find({ user: user_id, alias })

		if (alias_history_entry)
		{
			await this.user_alias_history.remove(alias_history_entry.id)
		}
	}

	validate_alias(alias)
	{
		return String(parseInt(alias)) !== String(alias)
	}

	async generate_block_user_token(user_id, options = {}, tries_made = 0)
	{
		try
		{
			const token_id = uuid.v4()
			const token = { id: token_id, user: user_id }

			if (options.self)
			{
				token.self = true
			}

			await this.block_user_tokens.create(token)
			return token_id
		}
		catch (error)
		{
			if (error.message.has('block_user_tokens_uuid'))
			{
				if (tries_made === 10)
				{
					throw error
				}

				return await this.generate_block_user_token(user_id, options, tries_made++)
			}
			else
			{
				throw error
			}
		}
	}

	get_block_user_token(id)
	{
		return this.block_user_tokens.find(id)
	}

	remove_block_user_token(id)
	{
		return this.block_user_tokens.remove(id)
	}
}