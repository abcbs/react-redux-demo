// This module has a lot of dependencies
// because it `require()`s all the client side code,
// and therefore it takes about 5 sec to start
// this webpage rendering webserver.
//
// Maybe it's because Babel on-the-fly code transformation
// is slow, or maybe Node.js require() is slow
// (which I don't think could be the case).

// import look from 'look'
// look.start()

import React from 'react'

import webpage_server from 'react-isomorphic-render/server'
import is_intl_locale_supported from 'intl-locales-supported'
import file_size_parser from 'filesize-parser'

import Intl_polyfill from 'intl'

import common         from '../code/react-isomorphic-render'
import html_assets    from '../code/html assets'

import load_locale_data from './locale'

import Spinner from '../code/components/spinner'

import start_monitoring from '../../code/monitoring'

// A faster way to load all the localization data for Node.js
// (`intl-messageformat` will load everything automatically when run in Node.js)
require('javascript-time-ago/load-all-locales')

const initializing_javascript =
`
	document.body.classList.add('javascript-is-enabled')

	window.configuration =
	{
		support:
		{
			email: ${JSON.stringify(configuration.support.email)}
		},
		image_service:
		{
			file_size_limit: ${file_size_parser(configuration.image_service.file_size_limit)}
		}
	}
`

// Since Node.js's Intl by default supports
// only US English, use the Intl polyfill instead.
global.Intl = Intl_polyfill

// Messages JSON cache
const messagesJSON = {}

const monitoring = start_monitoring(configuration)

// starts webpage rendering server
const server = webpage_server
({
	// Http host and port for executing all client-side ajax requests on server-side
	application:
	{
		host: configuration.web_server.http.host,
		port: configuration.web_server.http.port
	},

	// Http Urls to javascripts and (optionally) CSS styles
	// which will be insterted into the <head/> element of the resulting Html webpage
	// (as <script src="..."/> and <link rel="style" href="..."/> respectively)
	//
	// Also a website "favicon".
	//
	assets: (url) =>
	{
		if (_development_)
		{
			webpack_isomorphic_tools.refresh()
		}

		const assets = webpack_isomorphic_tools.assets()

		const result =
		{
			entry      : 'main',

			javascript : assets.javascript,
			style      : assets.styles,

			icon : html_assets.icon()
		}

		return result
	},

	// user info preloading
	// (will be added to Redux store)
	initialize: async (http, { request }) =>
	{
		const user = await http.get(`/users/current`)

		const state =
		{
			authentication: { user },
			// Is used by "material-ui" for CSS autoprefixing
			navigator: { userAgent: request.headers['user-agent'] }
		}

		return state
	},

	// Rendering a typical React page with ~1000 components
	// takes about 200ms, which is a lot, but that's how
	// React Server Side Rendering is at the moment.
	//
	// For more info see:
	// https://github.com/halt-hammerzeit/react-isomorphic-render/blob/master/CACHING.md
	//
	// (in development mode `assets` aren't cached,
	//  so `time.render` can be up to 600ms,
	//  but it's just because of `webpack-isomorphic-tools`
	//  being run in development mode
	//  (refreshing assets + using `port` setting).
	//  when `webpack-isomorphic-tools` are run in production mode,
	//  then rendering times are back to normal 200ms)
	//
	stats({ url, route, time: { initialize, preload, render, total } })
	{
		monitoring.increment(`count`)

		monitoring.time('initialize', Math.round(initialize))
		monitoring.time('preload', Math.round(preload))
		monitoring.time('render', Math.round(render))
		monitoring.time('total', Math.round(total))

		if (total > 0)
		{
			log.info(`Page rendering time`, { url, route, time: { initialize: Math.round(initialize), preload: Math.round(preload), render: Math.round(render), total: Math.round(total) } })
		}
	},

	// internationalization
	localize: (store, preferred_locales) =>
	{
		// Determine preferred locales

		// If the user is logged in,
		// then the most preferred locale is
		// the one he configured in the settings.
		if (store.getState().authentication
			&& store.getState().authentication.user
			&& store.getState().authentication.user.locale)
		{
			// Add it to the preferred locales from HTTP parameter, cookie and header.
			preferred_locales.unshift(store.getState().authentication.user.locale)
		}

		// Use 'en-US' locale by default (if no other locale is preferred)
		preferred_locales.push('en-US')

		// Choose the most preferred locale from all available locales
		// (the ones having messages translated)
		let { locale, messages } = load_locale_data(preferred_locales, { force_reload: _development_ })

		// Cache messages JSON
		// (a tiny optimization)
		if (!messagesJSON[locale])
		{
			messagesJSON[locale] = JSON.stringify(messages)
		}

		// Store the chosen locale in Redux store
		store.dispatch({ type: 'locale', locale })

		// // Check if the Node.js built-in `Intl` has the locale data needed.
		// if (!is_intl_locale_supported(locale))
		// {
		// 	// `Intl` exists, but it doesn't have the data needed, so load the
		// 	// polyfill and patch the formatters with the polyfill's ones.
		// 	Intl.NumberFormat   = Intl_polyfill.NumberFormat
		// 	Intl.DateTimeFormat = Intl_polyfill.DateTimeFormat
		// }

		// These variables will be passed down
		// as `props` for the `wrapper` React component
		return { locale, messages, messagesJSON: messagesJSON[locale] }
	},

	// (optional)
	html:
	{
		// (optional)
		// This CSS will be inserted into server rendered webpage <head/> <style/> tag
		// (when in development mode only - removes rendering flicker)
		head: () =>
		{
			if (_development_ && html_assets.style())
			{
				const remove_style_javascript =
				`
					document.addEventListener('DOMContentLoaded', function(event)
					{
						// The style-loader has already added <link/>s
						// to its dynamic hot-reloadable styles,
						// so remove the <style/> with the static CSS bundle
						// inserted during server side page rendering.

						var stylesheet = document.getElementById('flash-of-unstyled-content-fix')

						// Waits a "magical" time amount of one second
						// for the dynamically added stylesheets
						// to be parsed and applied to the page.
						setTimeout(function()
						{
							stylesheet.parentNode.removeChild(stylesheet)
						},
						1000)
					})
				`

				return [
					<style key={1} id="flash-of-unstyled-content-fix" dangerouslySetInnerHTML={{ __html: html_assets.style().toString() }} charSet="UTF-8"/>,
					<script key={2} dangerouslySetInnerHTML={{__html: remove_style_javascript}}/>
				]
			}
		},

		// returns an array of React elements.
		// allows adding arbitrary React components to the start of the <body/>
		// (use `key`s to prevent React warning when returning an array of React elements)
		body_start: () =>
		{
			if (_development_)
			{
				return [
					<script key="1" dangerouslySetInnerHTML={{__html: initializing_javascript}}/>,
					<script key="2" src="/assets/vendor.dll.js"/>
				]
			}

			return <script dangerouslySetInnerHTML={{__html: initializing_javascript}}/>
		}
	},

	authentication:
	{
		cookie: 'authentication'
	},

	// (optional)
	// `print-error` options
	print_error: { font_size: '20pt' },

	// (testing)
	// Disables server-side rendering (e.g. as a performance optimization)
	render: _disable_server_side_rendering_ ? false : true,

	// (optional)
	// A React element for "loading" page (when server-side rendering is disabled)
	loading: <div className="loading"><Spinner style={{ opacity: 0.1 }}/></div>,

	log
},
common)

// Start webpage rendering server
server.listen(configuration.webpage_server.http.port, function(error)
{
	if (error)
	{
		console.log('Webpage rendering server shutdown due to an error')
		return log.error(error)
	}

	const host = 'localhost'

	log.info(`Webpage server is listening at http://${host ? host : 'localhost'}:${configuration.webpage_server.http.port}`)
})
