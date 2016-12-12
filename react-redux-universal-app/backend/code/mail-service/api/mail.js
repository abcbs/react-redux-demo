// This is an example of a simple REST Api implementation.
//
// For debugging you can use "Advanced REST Client" for Google Chrome:
// https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo

import { errors } from 'web-service'

import { send } from '../mailer'

export default function(api)
{
	api.post('/', async function({ to, subject, template, parameters, locale }, { user })
	{
		// if (!user)
		// {
		// 	throw new errors.Unauthenticated()
		// }

		if (!locale)
		{
			throw new errors.Input_rejected(`"locale" is required`)
		}

		send({ to, subject }, template, parameters, locale)
	})

	// send
	// ({
	// 	from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
	// 	to: 'halt.hammerzeit.at@gmail.com', // list of receivers
	// 	subject: 'Hello ✔', // Subject line
	// 	text: 'Plain text Hello world 🐴', // plaintext body
	// 	html: '<b>Hello world 🐴</b>' // html body
	// })

	// send
	// ({
	// 	from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
	// 	to: 'halt.hammerzeit.at@gmail.com', // list of receivers
	// 	subject: 'Hello ✔', // Subject line
	// },
	// 'reset password',
	// { token: 'abc' })
}