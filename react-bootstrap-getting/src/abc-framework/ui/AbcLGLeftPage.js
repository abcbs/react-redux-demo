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
            <div className="container-frame" style={{borderRightStyle:"double",overflow:"hidden"}}>
                <AbcNavItems/>
                <hr />
                <p>
                    ddddddddd dddbbbbbbbbbbbb bbbbbbbbddddddd ddddddddddcccc cccccccc
                    ddddddd ddddd ddddddd dddd dddddddd ddddddddddd ddddddd ddddddd
                    dddddd dddd ddbbb bbbbbb bbbbbbbbbbbdd ddddddddd ddddddc cccccc ccccc
                    dddddd dddddddddd dddddd dddddd ddddddddd dddddd ddddddd dddddd
                    dd ddd dddddddb bbbbbbbbb bbbbbbbbb bddddddd dddd dddd ddcccc cccc cccc
                    ddd dd ddddd dddddddd dddddd dd ddddddd dddd dd dddddd dddd dddddd
                    d dddd dddddddbb bbbbbbbb bbbbbbbbbbd dddddd dddddddddcc cccccc cccc
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
                <div>
                    <p style={{width:"200px"}}>
                        北京，好</p>
                </div>
            </div>
        );
    }
}