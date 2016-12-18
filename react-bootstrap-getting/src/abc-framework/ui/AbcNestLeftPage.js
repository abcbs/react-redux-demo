import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import {Panel} from '../../abc-bootstrap'
export default class AbcNestLeftPage extends React.Component
{
    static propTypes =
    {
        bsStyle : PropTypes.string,
        bsSize :PropTypes.string,
    }

    static defaultProps =
    {
        bsStyle : "abc",
        bsSize :"bg",
    }
    render()
    {
        const { bsStyle, bsSize,children, ...other} = this.props
        return (
            <div className="container container-desktop container-lg">
                <ul style={{marginTop:"10px", marginLeft:"-38px"}}>
                    <li>test1R</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </ul>
            </div>
        );
    }
}