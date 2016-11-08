import React, { findDOMNode, Component, PropTypes } from 'react';
import {Navbar, Button,FormGroup,FormControl,Panel} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">ABC</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        <Navbar.Link href="#">购物车</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullLeft>
                        商品列表
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}