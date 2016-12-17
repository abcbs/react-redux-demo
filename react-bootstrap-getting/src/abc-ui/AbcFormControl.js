import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {FormControl} from '../abc-bootstrap'

export default class AbcFormControl extends React.Component
{
    static propTypes =
    {
        style :PropTypes.string,
    }

    static defaultProps =
    {
        style :{ width: '100%'},
        
    }
    render()
    {
        const { style,children, ...other} = this.props
        const formControl=(<FormControl  style={style}  {...other}>
            {children}</FormControl>)
        return formControl;
    }
}

AbcFormControl.Feedback = FormControl.Feedback;
AbcFormControl.Static = FormControl.Static ;