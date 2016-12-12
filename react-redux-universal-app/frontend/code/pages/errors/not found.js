import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import { connect }          from 'react-redux'

import styler from 'react-styling'

import { defineMessages } from 'react-intl'
import international      from '../../international/internationalize'

const messages = defineMessages
({
	header:
	{
		id             : 'not_found.header',
		description    : 'Not found page header',
		defaultMessage : 'Page not found'
	}
})

@international()
export default class Page_not_found extends Component
{
	render()
	{
		const { translate } = this.props

		const markup =
		(
			<section className="content error-page">
				{title(translate(messages.header))}

				<h1>
					{translate(messages.header)}
				</h1>
			</section>
		)

		return markup
	}
}

const style = styler
`
`