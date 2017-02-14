import { http, errors } from 'web-service'
import moment from 'moment'

import store from '../store/store'

export default function(api) {
	const users = new Map()
	let id_counter = 0

	api.get('/example/users', function () {
		return Array.from(users.keys())
	})

	api.get('/example/users/:id', function ({id}) {
		if (!users.has(id)) {
			throw new errors.Not_found(`User ${id} not found`)
		}

		return {...users.get(id), id: id}
	})

	api.post('/example/users', function ({name}) {
		if (!exists(name)) {
			throw new errors.Input_rejected(`"name" not specified`)
		}

		id_counter++
		const id = String(id_counter)

		users.set(id, {name})

		return id
	})

	api.patch('/example/users/:id', function ({id, name}) {
		// throw new Error(123)

		if (!users.has(id)) {
			throw new errors.Not_found(`User ${id} not found`)
		}

		users.get(id).name = name
	})

	api.delete('/example/users/:id', function ({id}) {
		// throw new Error(123)

		if (!users.has(id)) {
			throw new errors.Not_found(`User ${id} not found`)
		}

		users.delete(id)
	})

	api.post('/example/users/:user_id/picture', function ({user_id, id, sizes}) {
		// testing uploading image spinner
		// return new Promise((resolve) => setTimeout(resolve, 3000))

		// throw new Error(123)

		if (!users.has(user_id)) {
			throw new errors.Not_found(`User ${user_id} not found`)
		}

		users.get(user_id).picture = {id, sizes}
	})
}