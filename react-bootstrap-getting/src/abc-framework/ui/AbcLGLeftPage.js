import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import AbcNavItems from './AbcNavItems'
import {Navbar,Panel} from '../../abc-bootstrap'
import { Link } from 'react-router';
export default class AbcLGLeftPage extends React.Component
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
        return (
            <div className="container-frame">
                <AbcNavItems/>
                <hr />
                <p style={{width:"160px",overflow:"hidden"}}>
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddddddddcccccccccccc
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
                <div style={{position:"fixed",bottom:"60px"}}>
                    <p style={{width:"200px"}}>
                        北京，好</p>
                </div>
            </div>
        );
    }
}