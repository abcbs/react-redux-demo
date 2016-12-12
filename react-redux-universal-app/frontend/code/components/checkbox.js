import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styler from 'react-styling'
import classNames from 'classnames'

import input from './input'

// http://tympanus.net/codrops/2013/10/15/animated-checkboxes-and-radio-buttons-with-svg/

@input()
export default class Checkbox extends Component
{
	state = {}

	static propTypes =
	{
		name      : PropTypes.string,
		value     : PropTypes.bool,
		disabled  : PropTypes.bool,
		// label     : PropTypes.string.isRequired,
		on_change : PropTypes.func.isRequired,
		validate  : PropTypes.func,
		focus     : PropTypes.bool,
		style     : PropTypes.object
	}

	constructor(props, context)
	{
		super(props, context)

		this.toggle = this.toggle.bind(this)
	}

	// Client side rendering, javascript is enabled
	componentDidMount()
	{
		if (this.props.value)
		{
			this.draw_checkmark()
		}

		this.setState({ javascript: true })
	}

	componentDidUpdate(previous_props, previous_state)
	{
		if (this.props.value !== previous_props.value)
		{
			// this.validate()

			if (this.props.value)
			{
				this.draw_checkmark()
			}
		}
	}

	render()
	{
		const { value, error, indicate_invalid, disabled } = this.props

		const markup =
		(
			<div
				className={classNames('rich', 'checkbox',
				{
					'checkbox-invalid': indicate_invalid && error
				})}
				style={ this.props.style ? { ...style.container, ...this.props.style } : style.container}>

				<input
					ref="input"
					type="checkbox"
					disabled={disabled}
					onChange={this.toggle}
					onFocus={this.on_focus}
					onBlur={this.on_blur}
					style={style.checkbox.input}
					checked={(value === undefined || value === null) ? false : value}/>

				<div className="checkbox-border" style={ !value ? style.checkbox.label_before : style.checkbox.label_before.when_checked }/>

				<svg viewBox="0 0 100 100" style={style.checkbox.svg}>
					{ value ? this.render_checkmark() : null }
				</svg>

				<label className="checkbox-label" style={style.label} onClick={this.toggle}>
					{this.props.children}
				</label>

				{ indicate_invalid && error && <div className="checkbox-error-message">{error}</div> }

				{!this.state.javascript && this.render_static()}
			</div>
		)

		return markup
	}

	render_checkmark()
	{
		const path = ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16']

		const path_style =
		{
			fill           : 'transparent',
			strokeLinecap  : 'round',
			strokeLinejoin : 'round'
		}

		if (!_server_)
		{
			return <path ref="path" d={path} style={this.state.path_style || path_style}></path>
		}
		else
		{
			return <path d={path} style={path_style}></path>
		}
	}

	// supports disabled javascript
	render_static()
	{
		const { name, value, focus, disabled, children } = this.props

		const markup =
		(
			<div className="rich-fallback">
				{/* This checkbox will be sent as either "on" or `undefined` */}
				<input
					type="checkbox"
					name={name}
					disabled={disabled}
					defaultChecked={value}
					autoFocus={focus}/>

				<label className="checkbox-label" style={style.label.static}>
					{children}
				</label>
			</div>
		)

		return markup
	}

	draw_checkmark()
	{
		// for (var i = 0, i < paths.length; i++) {

		const i = 0

		const path_element = ReactDOM.findDOMNode(this.refs.path)

		const animation = { speed : .1, easing : 'ease-in-out' }

		const path_style = {}

		const length = path_element.getTotalLength() // in pixels
		path_style.strokeDasharray = `${length} ${length}`

		// if (i === 0)
		// {
			path_element.style.strokeDashoffset = Math.floor(length) - 1
		// }
		// else
		// {
		// 	path_element.style.strokeDashoffset = length
		// }

		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path_element.getBoundingClientRect()

		// Define our transition
		// (skips the animation on the initial page render)
		if (this.was_toggled)
		{
			path_style.transition =
			path_element.style.WebkitTransition =
			path_element.style.MozTransition =
				`stroke-dashoffset ${animation.speed}s ${animation.easing} ${i * animation.speed}s`
		}

		// Go
		path_style.strokeDashoffset = 0

		this.setState({ path_style: extend(path_style, style.svg_path) })
	}

	toggle(event)
	{
		// If a link was clicked - don't treat it as a checkbox label click
		if (event.target.tagName.toLowerCase() === 'a')
		{
			return
		}

		const { disabled, on_change, value } = this.props

		if (disabled)
		{
			return
		}

		// Allows checkmark animation from now on
		this.was_toggled = true

		if (value)
		{
			this.setState({ path_style: undefined })
		}

		on_change(!value)
	}
}

const style = styler
`
	container
		position: relative

	label
		display        : inline-block
		position       : relative
		padding-left   : 1.5em
		vertical-align : bottom
		color          : inherit
		cursor         : default

		-webkit-user-select : none
		-moz-user-select    : none
		-ms-user-select     : none
		user-select         : none

		&static
			padding-left: 0

	checkbox
		position: absolute
		left: 0
		top: 0.05em

		width  : 0.9em
		height : 0.9em

		position: absolute;
		// cursor: pointer;

		&input
			opacity: 0
			display: inline-block
			vertical-align: bottom
			z-index: 100

			margin: 0;

		&label_before
			border: 0.1em solid #cfcfcf
			transition: opacity 0.3s

			&when_checked
				border: 0.1em solid #e7e7e7

		&svg
			width: 0.8em
			height: 0.8em

			margin-left: 0.1em
			margin-top: 0.1em

			pointer-events: none

	svg_path
		stroke: #000000;
		stroke-width: 0.4em;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
`