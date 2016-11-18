'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _StyleConfig = require('../utils/StyleConfig');

var _values3 = require('lodash/values');

var _values4 = _interopRequireDefault(_values3);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _logger = require('../../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

Object.values = _values2['default'] || _values4['default'];

var Label = function (_React$Component) {
  (0, _inherits3['default'])(Label, _React$Component);

  function Label() {
    (0, _classCallCheck3['default'])(this, Label);
    return (0, _possibleConstructorReturn3['default'])(this, (Label.__proto__ || (0, _getPrototypeOf2['default'])(Label)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Label, [{
    key: 'hasContent',
    value: function hasContent(children) {
      var result = false;

      _react2['default'].Children.forEach(children, function (child) {
        if (result) {
          return;
        }

        if (child || child === 0) {
          result = true;
        }
      });

      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'children']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3['default'])(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];


      var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {

        // Hack for collapsing on IE8.
        hidden: !this.hasContent(children)
      });

      return _react2['default'].createElement(
        'span',
        (0, _extends3['default'])({}, elementProps, {
          className: (0, _classnames2['default'])(className, classes)
        }),
        children
      );
    }
  }]);
  return Label;
}(_react2['default'].Component);
//bsStyles(styles, defaultStyle, Component)
//bsClass = (defaultClass, Component)
/**
 export const State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
};
 export const Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse',
};
 */


var bsStylesComponent = (0, _bootstrapUtils.bsStyles)([].concat((0, _toConsumableArray3['default'])((0, _values2['default'])(_StyleConfig.State)), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY]), _StyleConfig.Style.DEFAULT, Label);
exports['default'] = (0, _bootstrapUtils.bsClass)('label', bsStylesComponent);