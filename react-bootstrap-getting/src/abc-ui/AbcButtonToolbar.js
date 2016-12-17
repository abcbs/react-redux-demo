import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {ButtonToolbar} from '../abc-bootstrap'

export default class AbcButton extends React.Component
{
    //style={{ position: 'relative'}}
    static propTypes =
    {
        style :PropTypes.string,
    }

    static defaultProps =
    {
         style :{ position: 'relative'},
    }
    render()
    {
        const { style,children, ...other} = this.props
        const buttonToolbar=(<ButtonToolbar  style={style}  {...other}>
            {children}</ButtonToolbar>)
        return buttonToolbar;
    }
}