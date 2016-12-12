import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server'
import serialize from 'serialize-javascript';
import { server_generated_webpage_head } from '../webpage-head'
import { get_language_from_locale } from '../helpers'

export const header = {
	__html: `
      
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Material-UI Example</title>
        <meta name="description" content="ABC-End-UI Example">
        <!-- Use minimum-scale=1 to enable GPU rasterization -->
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        >
        <!--
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
        -->
        <link rel="stylesheet" href="/build/css/app.css" />
        <!--<link rel="stylesheet" href="/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css" />-->
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
    
        <![endif]-->
        <link rel="stylesheet" href="/external/home.css">
         <script>
          // console noop shim for IE8/9
        (function (w) {
          var noop = function () {};
          if (!w.console) {
            w.console = {};
            ['log', 'info', 'warn', 'error'].forEach(function (method) {
              w.console[method] = noop;
            });
         }
        }(window));   
        </script>   
        `
};

export const background = {
	__html: `
            <div class="pos images">
              <span class="top a1" >Hello Beijing</span>
              <span class="top a2">Hello China</span>
              <span class="top a3">Hello World</span>
          </div>
          <script src="/external/requirejs/require.js"></script>
          <script src="/external/requirejs.config.js"></script>
         
          
        `
};

export const HeaderInnerHTML =()  => (
	header.__html
);


export const BodyStart=()=>(
	<div dangerouslySetInnerHTML={background} />
)

export default class Html extends Component
{
	static propTypes =
	{
		development : PropTypes.bool,
		assets      : PropTypes.object.isRequired,
		store       : PropTypes.object.isRequired,
		children    : PropTypes.node,
		head        : PropTypes.node,
		body        : PropTypes.func,
		body_start  : PropTypes.node,
		body_end    : PropTypes.node,
		parse_dates : PropTypes.bool,
		style       : PropTypes.func,
		locale      : PropTypes.string,
		locale_messages_json : PropTypes.string,

		authentication_token : PropTypes.string
	}

	render()
	{
		const
		{
			development,
			assets,
			store,
			head,
			body,
			body_start,
			body_end,
			parse_dates,
			style,
			locale,
			locale_messages_json,
			authentication_token
		}
		= this.props

		const content_markup = this.props.children ? ReactDOMServer.renderToString(this.props.children) : ''

		let content_element = <div id="react" dangerouslySetInnerHTML={{ __html: content_markup }}/>

		if (body)
		{
			content_element = body(content_element)
		}

		const webpage_head = server_generated_webpage_head()

		let html_attributes = webpage_head.htmlAttributes.toComponent()

		// Fixing `react-helmet` bug here
		// until they release the fix
		// https://github.com/nfl/react-helmet/issues/158
		if (Array.isArray(html_attributes))
		{
			// A workaround
			html_attributes = {}

		}

		// Set `<html lang="...">` if specified
		if (locale)
		{
			html_attributes.lang = get_language_from_locale(locale)
		}

		const style_url      = assets.entry ? assets.style[assets.entry]      : assets.style
		const javascript_url = assets.entry ? assets.javascript[assets.entry] : assets.javascript

		const store_state = store.getState()
		// Remove `redux-router` data from store
		delete store_state.router

		const html = 
		(
			<html {...html_attributes}>
				<head>
					{/* webpage title and various meta tags */}
					{webpage_head.title.toComponent()}
					{webpage_head.meta.toComponent()}
					{webpage_head.link.toComponent()}

					{ assets.entry && assets.style && assets.style.common &&
						<link 
							href={assets.style.common} 
							rel="stylesheet" 
							type="text/css"
							charSet="UTF-8"/>
					}

					{ style_url &&
						<link 
							href={style_url} 
							rel="stylesheet" 
							type="text/css"
							charSet="UTF-8"/>
					}

					{ development && style && <style dangerouslySetInnerHTML={{__html: style()}} charSet="UTF-8"/> }

					{ head }

					{ assets.icon && <link rel="shortcut icon" href={assets.icon}/> }
				</head>

				<body>

					{/* support adding arbitrary markup to body start */}
					{ body_start }

					{/* React page content */}
					{/* (most of the possible XSS attack scripts are executed here,
					     before the global authentication token variable is set,
					     so they're unlikely to even be able to hijack it) */}
					{ content_element }

					{/* locale for international messages */}
					{ locale && <script dangerouslySetInnerHTML={{__html: `window._locale=${JSON.stringify(locale)}`}} charSet="UTF-8"/> }

					{/* localized messages */}
					{ locale && <script dangerouslySetInnerHTML={{__html: `window._locale_messages=${locale_messages_json}`}} charSet="UTF-8"/> }

					{/* JSON Date deserializer */}
					{ parse_dates !== false && <script dangerouslySetInnerHTML={{__html: define_json_parser}} charSet="UTF-8"/> }

					{/* Flux store data will be reloaded into the store on the client-side*/}
					{
						development &&console.log("server html render==============")
					}
					<script dangerouslySetInnerHTML={{__html:
					 				`window._flux_store_data=JSON.parse(
					 				${JSON.stringify(JSON.stringify(store_state))}${parse_dates !== false ? ', JSON.date_parser' : ''})
					 				`
					 				}
					 				} charSet="UTF-8"/>

					{/*
					<script dangerouslySetInnerHTML={{__html:
					 				`window._flux_store_data=${serialize(store_state)};`}}
							charSet="UTF-8"/>
				 javascripts */}

					{/* Make JWT authentication token visible to the client-side code
					    to set up the `http` utility used inside Redux actions.
					    (the client-side React initialization code will
					     automatically erase this authenticaiton token global variable
					     to protect the user from session hijacking via an XSS attack) */}
					{ authentication_token && <script data-authentication-token dangerouslySetInnerHTML={{__html: `window._authentication_token=${JSON.stringify(authentication_token)}`}} charSet="UTF-8"/> }
					{/* Remove the <script/> tag above as soon as it executes
					    to prevent potentially exposing authentication token during an XSS attack */}
					{ authentication_token && <script dangerouslySetInnerHTML={{__html: `document.body.removeChild(document.querySelector('script[data-authentication-token]'))`}} charSet="UTF-8"/> }

					{/* the "common.js" chunk (see webpack extract commons plugin) */}
					{/* (needs to be included first (by design)) */}
					{ (assets.entry && assets.javascript && assets.javascript.common) && <script src={assets.javascript.common} charSet="UTF-8"/> }

					{/* current application "entry" point javascript
					    (currently there is only one entry point: "main") */}
					<script src={ javascript_url } charSet="UTF-8"/>

					{/* support adding arbitrary markup to body end */}
					{ body_end }
				</body>
			</html>
		)

		return html
	}
}

// JSON date deserializer
// use as the second, 'reviver' argument to JSON.parse(json, JSON.date_parser);
//
// http://stackoverflow.com/questions/14488745/javascript-json-date-deserialization/23691273#23691273
//
const define_json_parser =
`
if (!JSON.date_parser)
{
	var ISO = /^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*))(?:Z|(\\+|-)([\\d|:]*))?$/;

	JSON.date_parser = function(key, value)
	{
		if (typeof value === 'string' && ISO.test(value))
		{
			return new Date(value)
		}

		return value
	}
}
`