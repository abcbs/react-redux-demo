import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styler from 'react-styling'
import classNames from 'classnames'

import input from './input'

const scrollbar_width = '17px'
const add_padding_for_scrollbar = true
const show_selected_item_in_list = true

// Possible enhancements:
//
//  * Show menu above the toggler (Material design)
//  * Position the selected element on top
//    (scroll the list upon opening until it's positioned on top)
//  * If the menu is close to a screen edge,
//    automatically reposition it so that it fits on the screen
//
// https://material.google.com/components/menus.html

@input()
export default class Dropdown extends Component
{
	static propTypes =
	{
		options    : PropTypes.arrayOf
		(
			PropTypes.shape
			({
				value: React.PropTypes.string.isRequired,
				label: React.PropTypes.string.isRequired
			})
		),
		name       : PropTypes.string,
		label      : PropTypes.string,
		disabled   : PropTypes.bool,
		value      : PropTypes.any,
		on_change  : PropTypes.func,
		validate   : PropTypes.func,

		alignment  : PropTypes.string,
		menu       : PropTypes.bool,
		toggler    : PropTypes.element,
		scroll     : PropTypes.bool,
		upward     : PropTypes.bool,
		max_items  : PropTypes.number,

		// transition_item_count_min : PropTypes.number,
		// transition_duration_min : PropTypes.number,
		// transition_duration_max : PropTypes.number
	}

	static defaultProps = 
	{
		alignment : 'left',

		scroll : true,

		max_items : 6,

		// transition_item_count_min : 1,
		// transition_duration_min : 60, // milliseconds
		// transition_duration_max : 100 // milliseconds
	}

	state = {}

	constructor(props, context)
	{
		super(props, context)

		this.toggle           = this.toggle.bind(this)
		this.document_clicked = this.document_clicked.bind(this)
		this.on_key_down      = this.on_key_down.bind(this)

		if (props.children && !props.menu)
		{
			React.Children.forEach(props.children, function(element)
			{
				if (!element.props.value)
				{
					throw new Error(`You must specify "value" prop on each child of <Dropdown/>`)
				}

				if (!element.props.label)
				{
					throw new Error(`You must specify "label" prop on each child of <Dropdown/>`)
				}
			})
		}

		if (props.menu && !props.toggler)
		{
			throw new Error(`Supply a "toggler" component when enabling "menu" in <Dropdown/>`)
		}

		if (!props.menu && !props.on_change)
		{
			throw new Error(`"on_change" property must be specified for <Dropdown/>`)
		}
	}

	// Client side rendering, javascript is enabled
	componentDidMount()
	{
		document.addEventListener('click', this.document_clicked)
	}

	componentDidUpdate(previous_props, previous_state)
	{
		if (this.state.expanded !== previous_state.expanded)
		{
			if (this.state.expanded && this.should_animate())
			{
				if (!exists(this.state.height))
				{
					this.calculate_height()
				}
			}
		}
	}

	componentWillUnmount()
	{
		document.removeEventListener('click', this.document_clicked)
	}

	render()
	{
		const { options, upward, scroll, children, menu, toggler, alignment } = this.props

		let list_style = upward ? style.list.upward : style.list.downward

		list_style = clone(list_style)

		switch (alignment)
		{
			case 'left':
				list_style.left = 0
				break

			case 'right':
				list_style.right = 0
				break

			default:
				throw new Error(`Unsupported alignment: "${alignment}"`)
		}

		if (!menu && scroll && exists(this.state.list_height))
		{
			list_style.maxHeight = this.state.list_height + 'px'
		}

		const overflow = scroll && options && this.overflown()

		let list_items

		// If a list of options is supplied as an array of `{ value, label }`,
		// then transform those elements to <buttons/>
		if (options)
		{
			list_items = options.map(({ value, label, icon }, index) => this.render_list_item({ value, label, overflow }))
		}
		// Else, if a list of options is supplied as a set of child React elements,
		// then render those elements.
		else
		{
			list_items = React.Children.map(children, element => this.render_list_item({ element }))
		}

		const wrapper_style = merge(style.wrapper, { textAlign: alignment })

		const markup = 
		(
			<div
				style={ this.props.style ? { ...wrapper_style, ...this.props.style } : wrapper_style }
				className={classNames
				(
					"rich dropdown",
					{
						"dropdown-upward"    : upward,
						"dropdown-expanded"  : this.state.expanded,
						"dropdown-collapsed" : !this.state.expanded
					}
				)}>

				{/* List container */}
				<div style={ this.state.expanded ? style.container.expanded : style.container }>

					{/* Currently selected item */}
					{!menu && this.render_selected_item()}

					{/* Menu toggler */}
					{menu &&
						<div ref="menu_toggler" style={style.menu_toggler}>
							{React.cloneElement(toggler, { onClick : this.toggle })}
						</div>
					}

					{/* A list to select from */}
					{/* Math.max(this.state.height, this.props.max_height) */}
					<ul
						ref="list"
						style={list_style}
						className={classNames
						(
							'dropdown-item-list',
							{
								'dropdown-item-list-expanded'             : this.state.expanded,
								'dropdown-item-list-simple-left-aligned'  : !children && alignment === 'left',
								'dropdown-item-list-simple-right-aligned' : !children && alignment === 'right'
							}
						)}>
						{list_items}
					</ul>
				</div>

				{/* Fallback in case javascript is disabled */}
				{this.render_static()}
			</div>
		)

		return markup
	}

	render_list_item({ element, value, label, overflow }) // , first, last
	{
		// If a list of options is supplied as a set of child React elements,
		// then extract values from their props.
		if (element)
		{
			value = element.props.value
		}

		const is_selected = this.props.value !== undefined && value === this.props.value

		let list_item_style = { textAlign: 'left' } 

		if (!show_selected_item_in_list && is_selected)
		{
			list_item_style.maxHeight = 0
			list_item_style.overflow  = 'hidden'
		}

		let item_style = style.list.item

		// on overflow the vertical scrollbar will take up space
		// reducing padding-right and the only way to fix that
		// is to add additional padding-right
		//
		// a hack to restore padding-right taken up by a vertical scrollbar
		if (overflow && add_padding_for_scrollbar)
		{
			item_style = Object.clone(style.list.item)

			item_style.marginRight = scrollbar_width
			// list_item_style.paddingRight = scrollbar_width
		}

		let button

		// If a list of options is supplied as a set of child React elements,
		// then enhance those elements with extra props.
		if (element)
		{
			const extra_props =
			{
				style     : merge(item_style, element.props.style),
				className : classNames
				(
					'dropdown-item',
					{
						'dropdown-item--selected-in-list' : is_selected
					},
					element.props.className
				)
			}

			if (!this.props.menu)
			{
				extra_props.onClick = event => this.item_clicked(value, event)
			}

			button = React.cloneElement(element, extra_props)
		}
		// Else, if a list of options is supplied as an array of `{ value, label }`,
		// then transform those options to <buttons/>
		else
		{
			button = <button
				onClick={event => this.item_clicked(value, event)}
				className={classNames
				(
					'dropdown-item',
					{
						'dropdown-item--selected-in-list' : is_selected
					}
				)}
				style={item_style}>
				{label}
			</button>
		}

		const markup =
		(
			<li
				key={value}
				className={classNames
				({
					'dropdown-list-item--separator' : element && element.type === Dropdown_separator
				})}
				style={list_item_style}>
				{button}
			</li>
		)

		return markup
	}

	render_selected_item()
	{
		const { options, children, value, label } = this.props

		let selected_label

		if (options)
		{
			const selected = options.filter(x => x.value === value).first()
			if (selected)
			{
				selected_label = selected.label
			}
		}
		else
		{
			React.Children.forEach(children, function(child)
			{
				if (child.props.value === value)
				{
					selected_label = child.props.label
				}
			})
		}

		const markup =
		(
			<button
				ref="selected"
				onClick={this.toggle}
				onKeyDown={this.on_key_down}
				style={style.selected_item_label}
				className={classNames
				(
					"dropdown-item-selected",
					{
						"dropdown-item-selected-nothing" : !selected_label
					}
				)}>

				{/* the label */}
				{selected_label || label}

				{/* an arrow */}
				<div
					className="dropdown-arrow"
					style={ this.state.expanded ? style.arrow.expanded : style.arrow }/>
			</button>
		)

		return markup
	}

	// supports disabled javascript
	render_static()
	{
		const { name, value, label, disabled, options, menu, toggler, children } = this.props

		if (menu)
		{
			return <div className="rich-fallback">{toggler}</div>
		}

		const markup =
		(
			<div className="rich-fallback">
				<select
					name={name}
					value={value === null ? undefined : value}
					disabled={disabled}
					onChange={event => {}}
					style={{ width: 'auto' }}>
					{
						options
						?
						options.map(item =>
						{
							return <option
								className="dropdown-item"
								key={item.value}
								value={item.value}>
								{item.label}
							</option>
						})
						:
						React.Children.map(children, child =>
						{
							return <option
								className="dropdown-item"
								key={child.props.value}
								value={child.props.value}>
								{child.props.label}
							</option>
						})
					}
				</select>
			</div>
		)

		return markup
	}

	overflown()
	{
		return this.props.options.length > this.props.max_items
	}

	scrollable_list_height(state = this.state)
	{
		return (state.height - 2 * state.vertical_padding) * (this.props.max_items / this.props.options.length) + state.vertical_padding
	}

	should_animate()
	{
		return true

		// return this.props.options.length >= this.props.transition_item_count_min
	}

	toggle(event)
	{
		if (event)
		{
			// Don't navigate away when clicking links
			event.preventDefault()

			// Discard the click event so that it won't reach `document` click listener
			// event.stopPropagation() // doesn't work
			// event.nativeEvent.stopImmediatePropagation()
		}

		const { disabled } = this.props

		if (disabled)
		{
			return
		}

		this.setState({ expanded: !this.state.expanded })
	}

	item_clicked(value, event)
	{
		event.preventDefault()

		const { disabled, on_change } = this.props

		if (disabled)
		{
			return
		}

		this.refs.selected.focus()

		on_change(value)
	}

	document_clicked(event)
	{
		// Don't close the dropdown if its expander button has been clicked
		if (event.target === ReactDOM.findDOMNode(this.refs.selected)
			|| is_descendant(event.target, ReactDOM.findDOMNode(this.refs.selected)))
		{
			return
		}

		// Don't close the dropdown if menu toggler has been clicked
		if (this.props.menu && is_descendant(event.target, ReactDOM.findDOMNode(this.refs.menu_toggler)))
		{
			return
		}

		// Don't close the dropdown if a blank spot in the list was clicked
		if (is_descendant(event.target, ReactDOM.findDOMNode(this.refs.list)))
		{
			if (!event.target.classList.contains('dropdown-item')
				&& !find_ancestor_by_class(event.target, 'dropdown-item'))
			{
				return
			}
		}

		this.setState({ expanded: false })
	}

	on_key_down(event)
	{
		if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey)
		{
			return
		}

		// Maybe add support for "Escape" key in future
		// (hiding the item list, cancelling current item selection process
		//  and restoring the selection present before the item list was toggled)

		const { options, value, on_change } = this.props

		// Maybe add support for `children` arrow navigation in future
		if (options)
		{
			switch (event.keyCode)
			{
				// Select the previous option (if present) on up arrow
				case 38:
					event.preventDefault()

					if (this.previous_value())
					{
						on_change(this.previous_value())
					}
					else if (value === undefined)
					{
						on_change(options.first().value)
					}
					return

				// Select the next option (if present) on down arrow
				case 40:
					event.preventDefault()

					if (this.next_value())
					{
						return this.next_value() && on_change(this.next_value())
					}
					else if (value === undefined)
					{
						on_change(options.first().value)
					}
					return
			}
		}
	}

	// Get the previous value (relative to the currently selected value)
	previous_value()
	{
		const { options, value } = this.props

		let i = 0
		while (i < options.length)
		{
			if (options[i].value === value)
			{
				if (i - 1 >= 0)
				{
					return options[i - 1].value
				}
			}
			i++
		}
	}

	// Get the next value (relative to the currently selected value)
	next_value()
	{
		const { options, value } = this.props

		let i = 0
		while (i < options.length)
		{
			if (options[i].value === value)
			{
				if (i + 1 < options.length)
				{
					return options[i + 1].value
				}
			}
			i++
		}
	}

	// Calculates height of the expanded item list
	calculate_height()
	{
		const list_dom_node = ReactDOM.findDOMNode(this.refs.list)
		const border = parseInt(window.getComputedStyle(list_dom_node).borderTopWidth)
		const height = list_dom_node.scrollHeight // + 2 * border // inner height + 2 * border

		const vertical_padding = parseInt(window.getComputedStyle(list_dom_node.firstChild).paddingTop)

		// const images = list_dom_node.querySelectorAll('img')

		// if (images.length > 0)
		// {
		// 	return this.preload_images(list_dom_node, images)
		// }

		const state = { height, vertical_padding, border }

		if (!this.props.menu && this.props.scroll && this.props.options && this.overflown())
		{
			state.list_height = this.scrollable_list_height(state)
		}

		this.setState(state)
	}

	// // https://github.com/daviferreira/react-sanfona/blob/master/src/AccordionItem/index.jsx#L54
	// // Wait for images to load before calculating maxHeight
	// preload_images(node, images)
	// {
	// 	let images_loaded = 0
	//
	// 	const image_loaded = () =>
	// 	{
	// 		images_loaded++
	//
	// 		if (images_loaded === images.length)
	// 		{
	// 			this.setState
	// 			({
	// 				height: this.props.expanded ? node.scrollHeight : 0
	// 			})
	// 		}
	// 	}
	//
	// 	for (let i = 0; i < images.length; i += 1)
	// 	{
	// 		const image = new Image()
	// 		image.src = images[i].src
	// 		image.onload = image.onerror = image_loaded
	// 	}
	// }
}

export function Dropdown_separator(props)
{
	return <div className="dropdown-separator" style={style.separator}/>
}

const arrow_height = 0.35
const arrow_width = 0.4

const style = styler
`
	wrapper
		display        : inline-block
		vertical-align : bottom

	container
		position : relative
		// margin   : 0 auto

		text-align : inherit

		-webkit-user-select : none  /* Chrome all / Safari all */
		-moz-user-select    : none  /* Firefox all */
		-ms-user-select     : none  /* IE 10+ */
		user-select         : none  /* Likely future */

		&expanded

	selected_item_label
		// width      : 100%
		// display: inline-block

	arrow
		display  : inline-block

		width        : 0
		height       : 0

		margin-left   : 0.35em
		margin-bottom : 0.1em

		opacity: 0.7

		transition: opacity 100ms ease-out

		border-width : ${arrow_height}em ${arrow_width / 2}em 0 ${arrow_width / 2}em 

		border-style       : solid
		border-left-color  : transparent
		border-right-color : transparent

		&expanded
			opacity: 0.3
  
	list
		position : absolute

		z-index  : 1

		margin          : 0
		padding         : 0
		list-style-type : none

		overflow-x : hidden

		background-color: white

		&downward
			// top  : 100%

			// when html page is overflown by a long list
			// this bottom margin takes effect
			margin-bottom : 1em

		&upward
			bottom: 100%

			// when html page is overflown by a long list
			// this top margin takes effect
			margin-top : 1em

		// &placeholder
		// 	position            : static
		// 	max-height          : 0
		// 	border-top-width    : 0
		// 	border-bottom-width : 0
		// 	opacity             : 1
		// 	visibility          : hidden

		item
			display     : inline-block
			white-space : nowrap

	menu_toggler
		display : inline-block

	separator
		padding     : 0
		line-height : 0
		font-size   : 0
`

function find_ancestor_by_class(element, class_name)
{
	while ((element = element.parentElement) && !element.classList.contains(class_name)) {}
	return element
}

function is_descendant(element, ancestor)
{
	while (element = element.parentElement)
	{
		if (element === ancestor)
		{
			return true
		}
	}
}