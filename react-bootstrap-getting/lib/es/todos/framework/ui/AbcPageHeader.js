'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PageHeader = _react2['default'].createClass({
    displayName: 'PageHeader',
    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'container' },
            _react2['default'].createElement(
                _reactBootstrap.ControlLabel,
                { style: { lineHeight: '40px' } },
                this.props.title
            ),
            _react2['default'].createElement(
                'span',
                null,
                this.props.subTitle
            )
        );
    }
});

exports['default'] = PageHeader;