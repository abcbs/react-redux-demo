import React, { findDOMNode, Component, PropTypes } from 'react';
import {Navbar,OverlayTrigger,ButtonToolbar,Button,Popover} from 'react-bootstrap'

import Link from '../components/Link'
export default class Footer extends Component {

    render() {
        return (
            <Navbar className="container"
                    style={{background:'white' ,border:"none" ,boxShadow:"none"}}>
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
            <span>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
             </span>
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

const popoverRight = (
    <Popover id="popover-positioned-scrolling-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);
class Positioner extends React.Component {
    render() {
        return (
            <ButtonToolbar style={{ padding: '100px 0' }}>
                <OverlayTrigger container={this} trigger="click" placement="left" overlay={popoverRight}>
                    <Button>Holy guacamole!</Button>
                </OverlayTrigger>
                <OverlayTrigger container={this} trigger="click" placement="top" overlay={popoverRight}>
                    <Button>Holy guacamole!</Button>
                </OverlayTrigger>
                <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverRight}>
                    <Button>Holy guacamole!</Button>
                </OverlayTrigger>
                <OverlayTrigger container={this} trigger="click" placement="right" overlay={popoverRight}>
                    <Button>Holy guacamole!</Button>
                </OverlayTrigger>
            </ButtonToolbar>
        );
    }
}