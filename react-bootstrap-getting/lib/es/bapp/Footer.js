'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Footer = function (_React$Component) {
  (0, _inherits3['default'])(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3['default'])(this, Footer);
    return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || (0, _getPrototypeOf2['default'])(Footer)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Footer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Grid2['default'],
        null,
        _react2['default'].createElement('hr', null),
        _react2['default'].createElement(
          'footer',
          null,
          _react2['default'].createElement(
            'p',
            null,
            '\xA9 Company 2014'
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2['default'].Component);

exports['default'] = Footer;