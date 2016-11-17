'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _StyleConfig = require('../utils/StyleConfig');

var _logger = require('../../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ButtonToolbar = function (_React$Component) {
  (0, _inherits3['default'])(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    (0, _classCallCheck3['default'])(this, ButtonToolbar);
    return (0, _possibleConstructorReturn3['default'])(this, (ButtonToolbar.__proto__ || (0, _getPrototypeOf2['default'])(ButtonToolbar)).apply(this, arguments));
  }

  (0, _createClass3['default'])(ButtonToolbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3['default'])(_props, ['className']);

      (0, _logger2['default'])(this.props);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3['default'])(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];

      (0, _logger2['default'])("bsProps,", bsProps);
      var classes = (0, _bootstrapUtils.getClassSet)(bsProps);
      (0, _logger2['default'])("classes,", classes);
      return _react2['default'].createElement('div', (0, _extends3['default'])({}, elementProps, {
        role: 'toolbar',
        className: (0, _classnames2['default'])(className, classes)
      }));
    }
  }]);
  return ButtonToolbar;
}(_react2['default'].Component);

exports['default'] = (0, _bootstrapUtils.bsClass)('btn-toolbar', (0, _bootstrapUtils.bsSizes)(_Button2['default'].SIZES, ButtonToolbar));