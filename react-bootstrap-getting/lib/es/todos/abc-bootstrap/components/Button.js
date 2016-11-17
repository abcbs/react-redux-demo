'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

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

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _StyleConfig = require('../utils/StyleConfig');

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _values3 = require('lodash/values');

var _values4 = _interopRequireDefault(_values3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

Object.values = _values2['default'] || _values4['default'];

var propTypes = {
  active: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  block: _react2['default'].PropTypes.bool,
  onClick: _react2['default'].PropTypes.func,
  componentClass: _elementType2['default'],
  href: _react2['default'].PropTypes.string,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: _react2['default'].PropTypes.oneOf(['button', 'reset', 'submit'])
};

var defaultProps = {
  active: false,
  block: false,
  disabled: false
};

var Button = function (_React$Component) {
  (0, _inherits3['default'])(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3['default'])(this, Button);
    return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || (0, _getPrototypeOf2['default'])(Button)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Button, [{
    key: 'renderAnchor',
    value: function renderAnchor(elementProps, className) {
      return _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends4['default'])({}, elementProps, {
        className: (0, _classnames2['default'])(className, elementProps.disabled && 'disabled')
      }));
    }
  }, {
    key: 'renderButton',
    value: function renderButton(_ref, className) {
      var componentClass = _ref.componentClass;
      var elementProps = (0, _objectWithoutProperties3['default'])(_ref, ['componentClass']);

      var Component = componentClass || 'button';

      return _react2['default'].createElement(Component, (0, _extends4['default'])({}, elementProps, {
        type: elementProps.type || 'button',
        className: className
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var block = _props.block;
      var className = _props.className;
      var props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'block', 'className']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3['default'])(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];


      var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (0, _defineProperty3['default'])({
        active: active
      }, (0, _bootstrapUtils.prefix)(bsProps, 'block'), block));
      var fullClassName = (0, _classnames2['default'])(className, classes);

      if (elementProps.href) {
        return this.renderAnchor(elementProps, fullClassName);
      }

      return this.renderButton(elementProps, fullClassName);
    }
  }]);
  return Button;
}(_react2['default'].Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('btn', (0, _bootstrapUtils.bsSizes)([_StyleConfig.Size.LARGE, _StyleConfig.Size.SMALL, _StyleConfig.Size.XSMALL], (0, _bootstrapUtils.bsStyles)([].concat((0, _toConsumableArray3['default'])((0, _values2['default'])(_StyleConfig.State)), [_StyleConfig.Style.DEFAULT, _StyleConfig.Style.PRIMARY, _StyleConfig.Style.LINK]), _StyleConfig.Style.DEFAULT, Button)));