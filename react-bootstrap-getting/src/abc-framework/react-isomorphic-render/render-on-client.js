import React          from 'react'
import ReactDOM       from 'react-dom'

// Renders `element` React element inside the `to` DOM element.
//
// Returns React component for the rendered `element`.
//
export default function render_on_client({ development, element, to, subsequent_render })
{
	// Render the React element to `to` DOM node
	const component = ReactDOM.render(element, to)

	// // In dev mode, check that server-side rendering works correctly
	// if (development && !subsequent_render)
	// {
	// 	window.React = React // enable debugger
	// }
	return { element }
}
