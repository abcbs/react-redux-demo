import React, { findDOMNode, Component, PropTypes } from 'react';
import {Navbar, Button,FormGroup,FormControl,Nav} from 'react-bootstrap'

import Link from '../components/Link'
export default class Footer extends Component {

    render() {
        return (
            <Navbar fixedBottom>
                {this.renderLiners()}
            </Navbar>
        )
    }
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }
        return (
        <Link active={filter === this.props.filter}
              linkName={name}
              onClick={
                     this.props.onFilterChange.bind(this,filter)
                  }
        >
            {name}
        </Link>
        )
    }
    renderLiners() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                
            </p>
        );
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};