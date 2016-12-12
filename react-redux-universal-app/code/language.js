import deep_equal from 'deep-equal'

const exists = what => typeof what !== 'undefined'
global.exists = exists

// used for JSON object type checking
const object_constructor = {}.constructor

// detects a JSON object
export function is_object(object)
{
	return exists(object) && (object !== null) && object.constructor === object_constructor
}
global.is_object = is_object

// antonym to "exists()"
const no = function()
{
	const parameters = Array.prototype.slice.call(arguments, 0)
	return !exists.apply(this, parameters)
}
global.no = no

// extends the first object with all the others
Object.extend = function(...objects)
{
	objects = objects.filter(x => exists(x))

	if (objects.length === 0)
	{
		return
	}
	
	if (objects.length === 1)
	{
		return objects[0]
	}

	const to   = objects[0]
	const from = objects[1]

	if (objects.length > 2)
	{
		const last = objects.pop()
		const intermediary_result = extend.apply(this, objects)
		return extend(intermediary_result, last)
	}

	for (let key of Object.keys(from))
	{
		if (is_object(from[key]))
		{
			if (!is_object(to[key]))
			{
				to[key] = {}
			}

			extend(to[key], from[key])
		}
		else if (Array.isArray(from[key]))
		{
			if (!Array.isArray(to[key]))
			{
				to[key] = []
			}

			to[key] = to[key].concat(Object.clone(from[key]))
		}
		else
		{
			to[key] = from[key]
		}
	}

	return to
}

global.extend = Object.extend

Object.merge = function()
{
	const parameters = Array.prototype.slice.call(arguments, 0)
	parameters.unshift({})
	return Object.extend.apply(this, parameters)
}

global.merge = Object.merge

global.shallow_merge = function()
{
	const parameters = Array.prototype.slice.call(arguments, 0)
	parameters.unshift({})
	return Object.assign.apply(this, parameters)
}

Object.clone = function(object)
{
	if (is_object(object))
	{
		return merge({}, object)
	}
	else if (Array.isArray(object))
	{
		return object.map(x => Object.clone(x))
	}
	else
	{
		return object
	}
}

global.clone = Object.clone

Object.equals = (a, b) => deep_equal(a, b)

Object.get_value_at_path = (where, paths) =>
{
	paths = paths instanceof Array ? paths.clone() : paths.split('.')

	const get_value_at_path = (where, paths) =>
	{
		if (paths.is_empty())
		{
			return where
		}

		const path = paths.shift()

		if (!exists(where[path]))
		{
			return
		}

		return get_value_at_path(where[path], paths)
	}

	return get_value_at_path(where, paths)
}

Object.set_value_at_path = (where, paths, value) =>
{
	paths = paths instanceof Array ? paths.clone() : paths.split('.')

	const set_value_at_path = (where, paths, value) =>
	{
		const path = paths.shift()

		if (paths.is_empty())
		{
			return where[path] = value
		}

		if (typeof where[path] != 'object')
		{
			where[path] = {}
		}

		return set_value_at_path(where[path], paths, value)
	}

	return set_value_at_path(where, paths, value)
}

Object.defineProperty(Array.prototype, 'insert_at',
{
	enumerable: false,
	value: function(index, value)
	{
		this.splice(index, 0, value)
		return this
	}
})


Object.defineProperty(Array.prototype, 'remove_at',
{
	enumerable: false,
	value: function(index)
	{
		this.splice(index, 1)
		return this
	}
})

Object.defineProperty(Array.prototype, 'first',
{
	enumerable: false,
	value: function() 
	{ 
		return this[0]
	}
})

Object.defineProperty(Array.prototype, 'has',
{
	enumerable: false,
	value: function(element) 
	{ 
		return this.indexOf(element) >= 0
	}
})

Object.defineProperty(Array.prototype, 'not_empty', 
{
	enumerable: false,
	value: function() 
	{ 
		return this.length > 0
	}
})

Object.defineProperty(Array.prototype, 'is_empty', 
{
	enumerable: false,
	value: function() 
	{ 
		return this.length == 0 
	}
})

Object.defineProperty(Array.prototype, 'clone', 
{
	enumerable: false,
	value: function() 
	{ 
		return this.slice(0)
	}
})

Object.defineProperty(Array.prototype, 'last', 
{
	enumerable: false,
	value: function()
	{
		if (this.is_empty()) {
			return
		}
		return this[this.length - 1]
	}
})

Object.defineProperty(Array.prototype, 'remove', 
{
	enumerable: false,
	value: function(element)
	{
		const index = this.indexOf(element)
		if (index >= 0)
		{
			this.splice(index, 1)
		}
		return this
	}
})

Object.defineProperty(Array.prototype, 'find_by', 
{
	enumerable: false,
	value: function(example)
	{
		for (let candidate of this)
		{
			for (let key of Object.keys(example))
			{
				if (candidate[key] !== example[key])
				{
					candidate = undefined
					break
				}
			}

			if (candidate)
			{
				return candidate
			}
		}
	}
})

Object.defineProperty(String.prototype, 'starts_with', 
{
	enumerable: false,
	value: function(substring)
	{
		let j = substring.length

		if (j > this.length)
		{
			return false
		}

		while (j > 0)
		{
			j--

			if (this[j] !== substring[j])
			{
				return false
			}
		}

		return true
	}
})

Object.defineProperty(String.prototype, 'ends_with', 
{
	enumerable: false,
	value: function(substring)
	{
		let i = this.length
		let j = substring.length

		if (j > i)
		{
			return false
		}

		while (j > 0)
		{
			i--
			j--

			if (this[i] !== substring[j])
			{
				return false
			}
		}

		return true
	}
})

RegExp.escape = function(string)
{
	const specials = new RegExp("[.*+?|()\\[\\]{}\\\\]", 'g')
	return string.replace(specials, "\\$&")
}

Object.defineProperty(String.prototype, 'replace_all', 
{
	enumerable: false,
	value: function(what, with_what)
	{
		const regexp = new RegExp(RegExp.escape(what), 'g')
		return this.replace(regexp, with_what)
	}
})

Object.defineProperty(String.prototype, 'has', 
{
	enumerable: false,
	value: function(what)
	{
		return this.indexOf(what) >= 0
	}
})

Object.defineProperty(String.prototype, 'before', 
{
	enumerable: false,
	value: function(what)
	{
		const index = this.indexOf(what)
		if (index < 0)
		{
			return this
		}
		return this.substring(0, index)
	}
})

Object.defineProperty(String.prototype, 'after', 
{
	enumerable: false,
	value: function(what)
	{
		const index = this.indexOf(what)
		if (index < 0)
		{
			return ''
		}
		return this.substring(index + what.length)
	}
})

Object.defineProperty(String.prototype, 'is_empty', 
{
	enumerable: false,
	value: function()
	{
		return this.length === 0
	}
})

Object.defineProperty(String.prototype, 'is_blank', 
{
	enumerable: false,
	value: function()
	{
		return !this || /^\s*$/.test(this)
	}
})

Object.defineProperty(String.prototype, 'repeat', 
{
	enumerable: false,
	value: function(times)
	{
		let result = ''
		while (times > 0)
		{
			result += this
			times--
		}
		return result
	}
})

// Object.set = ->
// 	parameters = Array.prototype.slice.call(arguments, 0)

// 	object = parameters.shift()
// 	value = parameters.pop()

// 	if not object
// 		throw new Error('Object is null')

// 	reducer = (reduced, value) ->
// 		reduced.concat(value.toString().split('.'))

// 	keys = parameters.reduce(reducer, [])

// 	last_key = keys.pop()

// 	for key in keys
// 		if not object[key]
// 			object[key] = {}
// 		object = object[key]

// 	object[last_key] = value

// 	return object

// Object.get = (object, path) ->
// 	parameters = Array.prototype.slice.call(arguments, 0)
// 	parameters.shift()

// 	reducer = (reduced, path_element) ->
// 		reduced.concat(path_element.toString().split('.'))

// 	path_elements = parameters.reduce(reducer, [])

// 	for key in path_elements
// 		return if not object
// 		object = object[key]

// 	return object

// Object.equals = (a, b) -> angular.equals(a, b)

// this.format = (template, parameters) =>
// {
// 	return template.replace(/\{([^\}]+)\}/g, (text, match) =>
// 	{
// 		Object.get(parameters, match)
// 	})
// }

// G:\work\webapp\node_modules\bluebird\js\main\timers.js:24
// var delay = Promise.delay = function (value, ms) {
//                           ^
// TypeError: Cannot assign to read only property 'delay' of function Promise(resolver) {
//     if (typeof resolver !== "function") {
//         throw new TypeError("the promise...<omitted>...
// }
Object.defineProperty(Function.prototype, 'delay_for', 
{
	enumerable: false,
	value: function(time)
	{
		setTimeout(this, time)
	}
})

Object.defineProperty(Function.prototype, 'periodical', 
{
	enumerable: false,
	value: function (interval)
	{
		const action = this

		function periodical()
		{
			const result = action()

			if (result instanceof Promise)
			{
				result.finally(() => periodical.delay_for(interval))
			}
			else
			{
				periodical.delay_for(interval)
			}
		}

		periodical()
	}
})

// global.is_promise = function(object)
// {
// 	return object && typeof object.then === 'function'
// }