import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {Button} from '../abc-bootstrap'

export default class AbcButton extends React.Component
{
    // <Button type="button" bsStyle="default" style=>
    static propTypes =
    {
        bsStyle : PropTypes.string,
        style :PropTypes.string,
    }

    static defaultProps =
    {
        bsStyle : "primary",
        //style :{display:'inline' ,width:'98%'},
        
    }
    render()
    {
        const { bsStyle, style,children, ...other} = this.props
        const button=(<Button bsStyle={bsStyle}  style={style}  {...other}>
            {children}</Button>)
        return button;
    }
}