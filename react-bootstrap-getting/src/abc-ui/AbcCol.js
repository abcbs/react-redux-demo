import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {Col} from '../abc-bootstrap'

export default class AbcButton extends React.Component
{
    //style={{ position: 'relative'}}
    static propTypes =
    {
        style :PropTypes.string,
    }

    static defaultProps =
    {
        style :{ zIndex: '1040', paddingLeft:"1px",paddingRight:"1px"},
    }
    render()
    {
        const { style,children, ...other} = this.props
        const buttonToolbar=(<Col  style={style}  {...other}>
            {children}</Col>)
        return buttonToolbar;
    }
}