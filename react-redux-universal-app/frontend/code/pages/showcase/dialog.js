import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import styler               from 'react-styling'
import { connect }          from 'react-redux'

import Modal from '../../components/modal'

export default class Dialog extends Component
{
	state =
	{
		show_dialog: false
	}

	constructor(props, context)
	{
		super(props, context)

		this.toggle_dialog = this.toggle_dialog.bind(this)
	}

	render()
	{
		const markup =
		(
			<div>
				{title("Dialog Showcase")}

				<div style={style.container}>
					<a href="https://github.com/rackt/react-modal">https://github.com/rackt/react-modal</a>

					<br/>
					<br/>

					<button style={style.button} onClick={this.toggle_dialog}>Show</button>

					<Modal
						shown={this.state.show_dialog}
						close={this.toggle_dialog}
						style={style.modal}
						title="Dialog"
						actions={[{ button_style: style.button, action: this.toggle_dialog, text: "Hide" }]}>
					</Modal>
				</div>
			</div>
		)

		return markup
	}

	toggle_dialog()
	{
		this.setState({ show_dialog: !this.state.show_dialog })
	}
}

const style = styler
`
	button
		// margin      : 1em auto
		// padding     : 0.7em 2em
		outline     : none
		font-weight : 600
		background-color : #C94E50
		color       : #FFFFFF
		border      : none
		padding-left   : 0.4rem
		padding-right  : 0.4rem
		padding-top    : 0.4rem
		padding-bottom : 0.4rem

	container
		margin    : 2em
		text-align : center

	modal
		width: 40em
		line-height: 1.35em
`