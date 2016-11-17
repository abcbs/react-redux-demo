'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FilterLink = function FilterLink(_ref) {
    var filter = _ref.filter;
    var _onClick = _ref.onClick;
    var children = _ref.children;
    return _react2['default'].createElement(
        _reactRouter.Link,
        {
            to: filter,
            activeStyle: {
                textDecoration: 'none',
                color: 'black'
            },
            onClick: function onClick(e) {
                e.preventDefault();
                if (_onClick) {
                    _onClick();
                }
            }
        },
        children
    );
};

exports['default'] = FilterLink;