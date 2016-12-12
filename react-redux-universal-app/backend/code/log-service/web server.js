import { errors }    from 'web-service'
import { api }       from '../common/webservice'
import message_store from './message store'
import IP_limiter    from '../../../code/ip limiter'

const ip_limiter = new IP_limiter(5)

const service = api
(
	'Log service',
	configuration.log_service.http.port,
	[
		function(api)
		{
			api.get('/', function()
			{
				this.role('administrator')

				return message_store.messages.clone().reverse()
			})

			// Anyone can post, so this is kinda security hole,
			// but I guess better this than to loose
			// errors happening in users' web browsers.
			api.post('/', function(message, { ip })
			{
				if (!ip_limiter.passes(ip))
				{
					// set_header('Retry-After', ...)
					throw new errors.Too_many_requests()
				}

				message.ip   = ip
				message.name = 'client side'
				message.time = new Date().toString()

				return message_store.add(message)
			})
		}
	]
)