import React from 'react';
import { Link } from 'react-router';
import entries from 'lodash/entries'
import {Navbar, Nav} from 'react-bootstrap'

Object.entries=Object.entries||entries;
const NAV_LINKS = {
    introduction: {
        link: '/home/pages',
        title: '主页'
    },
    'getting-started': {
        link: '/app',
        title: '信息'
    },
    components: {
        link: '/introduction/pages',
        title: '介绍'
    },
};

function Wrapper({ children }) {
    return children;
}

const propTypes = {
    activePage: React.PropTypes.string,
};

function NavMain({ activePage }) {
    return (
        <Navbar className="container"
            staticTop
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/app">ABC-Endpoint</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {
                        Object.entries(NAV_LINKS).map(([linkName, { link, title }]) => (
                        <Wrapper key={linkName}>
                            <li className={linkName === activePage ? 'active' : null}>
                                <Link to={link}>
                                    {title}
                                </Link>
                            </li>
                        </Wrapper>
                    ))
                    }
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

NavMain.propTypes = propTypes;

export default NavMain;
