'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PageFooter = _react2['default'].createClass({
    displayName: 'PageFooter',
    render: function render() {
        return _react2['default'].createElement(
            _reactBootstrap.Navbar,
            { fixedBottom: true, className: 'container' },
            _react2['default'].createElement(
                'p',
                null,
                'Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            )
        );
    }
});

exports['default'] = PageFooter;