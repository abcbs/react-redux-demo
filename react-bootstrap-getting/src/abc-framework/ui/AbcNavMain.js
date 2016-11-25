import React,{ Component, PropTypes, Children } from 'react'
import { Link } from 'react-router';
import entries from 'lodash/entries'
import {Navbar, Nav} from 'react-bootstrap'
import NAV_LINKS from '../routeres/NavLinks'
Object.entries=Object.entries||entries;

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
                    <Link to="/">ABC-Endpoint</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    {
                        Object.entries(NAV_LINKS).map(([linkName, { path, title }]) => (
                        <Wrapper key={linkName}>
                            <li className={linkName === activePage ? 'active' : null}>
                                <Link to={path}>
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
