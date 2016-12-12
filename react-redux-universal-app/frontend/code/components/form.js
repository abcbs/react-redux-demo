import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Form extends Component
{
	static propTypes =
	{
		action      : PropTypes.func,
		cancel      : PropTypes.func,
		// `error` can be passed for non-javascript
		// web 1.0 forms error rendering support
		error       : PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
		post        : PropTypes.string,
		className   : PropTypes.string,
		style       : PropTypes.object
	}

	constructor(props, context)
	{
		super(props, context)

		this.on_submit   = this.on_submit.bind(this)
		this.submit      = this.submit.bind(this)
		this.on_key_down = this.on_key_down.bind(this)
	}

	render()
	{
		const { post, error, className, style } = this.props

		const markup =
		(
			<form
				onSubmit={this.on_submit}
				onKeyDown={this.on_key_down}
				action={post}
				method="POST"
				className={className}
				style={style}
				noValidate>

				{this.children(error)}
			</form>
		)

		return markup
	}

	// Adds `errors` element to the form
	children(errors)
	{
		const { children } = this.props

		const form_elements = React.Children.toArray(children)

		// Insert `errors` element
		if (errors)
		{
			let errors_inserted = false

			// Show form errors above form actions,
			// so that the errors will be visible and won't be overlooked.
			let index = 0
			for (let child of form_elements)
			{
				if (child.type === Form_error)
				{
					form_elements[index] = React.cloneElement(child, { key: 'form-errors' }, errors)
					errors_inserted = true
					break
				}

				if (child.type === Form_actions)
				{
					form_elements.insert_at(index, <Form_error key="form-errors">{errors}</Form_error>)
					errors_inserted = true
					break
				}

				index++
			}

			if (!errors_inserted)
			{
				form_elements.push(<Form_error key="form-errors">{errors}</Form_error>)
			}
		}

		return form_elements
	}

	// "Enter" key handler
	on_submit(event)
	{
		event.preventDefault()

		// Prevent form double submit
		if (this.props.busy)
		{
			return
		}

		this.submit()
	}

	// Submit form
	submit()
	{
		if (this.props.action)
		{
			this.props.action()
		}
	}

	on_key_down(event)
	{
		// Cancel editing on "Escape" key
		if (event.keyCode === 27)
		{
			const { cancel } = this.props

			if (cancel)
			{
				cancel()
			}

			event.preventDefault()
		}
	}
}

export function Form_error({ children })
{
	return <div className="form__error">{children}</div>
}

export function Form_actions(props, context)
{
	const { children, className, style } = props

	return <div className={classNames('form__actions', className)} style={style}>{children}</div>
}