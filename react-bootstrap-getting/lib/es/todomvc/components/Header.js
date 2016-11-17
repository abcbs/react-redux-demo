'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _TodoTextInput = require('./TodoTextInput');

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_Component) {
  (0, _inherits3['default'])(Header, _Component);

  function Header() {
    (0, _classCallCheck3['default'])(this, Header);
    return (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || (0, _getPrototypeOf2['default'])(Header)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Header, [{
    key: 'handleSave',
    value: function handleSave(text) {
      if (text.length !== 0) {
        this.props.addTodo(text);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'header',
        { className: 'header' },
        _react2['default'].createElement(
          'h1',
          null,
          'todos'
        ),
        _react2['default'].createElement(_TodoTextInput2['default'], { newTodo: true //onSeve属性绑定
          , onSave: this.handleSave.bind(this),
          placeholder: 'What needs to be done?' })
      );
    }
  }]);
  return Header;
}(_react.Component);
//


Header.propTypes = {
  addTodo: _react.PropTypes.func.isRequired
};

exports['default'] = Header;