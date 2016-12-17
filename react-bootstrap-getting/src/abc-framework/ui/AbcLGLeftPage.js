import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import AbcNavItems from './AbcNavItems'
import {Navbar} from '../../abc-bootstrap'
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
            <div className="container" style={{minHeight:"50px",  marginTop:"60px"}}>
                <AbcNavItems/>
            </div>


        );


    }
}