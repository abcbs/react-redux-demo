import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {Row} from '../abc-bootstrap'

export default class AbcButton extends React.Component
{
    //style={{ position: 'relative'}}
    static propTypes =
    {
        style :PropTypes.string,
    }

    static defaultProps =
    {
        style :{marginLeft:"1px",marginRight:"1px"},
    }
    render()
    {
        const { style,children, ...other} = this.props
        const buttonToolbar=(<Row  style={style}  {...other}>
            {children}</Row>)
        return buttonToolbar;
    }
}