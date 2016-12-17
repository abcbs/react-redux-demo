import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {Form} from '../abc-bootstrap'

export default class AbcFormInline extends React.Component
{
    //<Form inline onSubmit={this.handleClick.bind(this)}>
    render()
    {
        const { children, ...other} = this.props
        const form=(<Form inline  {...other}>
            {children}</Form>)
        return form;
    }
}