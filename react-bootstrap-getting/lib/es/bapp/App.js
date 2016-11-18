'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _HeaderNavigation = require('./HeaderNavigation');

var _HeaderNavigation2 = _interopRequireDefault(_HeaderNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

global.React = _react2['default'];

_reactDom2['default'].render(_react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(_HeaderNavigation2['default'], null),
  _react2['default'].createElement(_Body2['default'], null),
  _react2['default'].createElement(_Footer2['default'], null)
), document.getElementById('root'));

require(['./activeButton'], function (activeButton) {

  console.log("test");
});