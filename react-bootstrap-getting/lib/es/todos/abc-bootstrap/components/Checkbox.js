'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _logger = require('../../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  inline: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _react2['default'].PropTypes.func
};

var defaultProps = {
  inline: false,
  disabled: false
};

var Checkbox = function (_React$Component) {
  (0, _inherits3['default'])(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3['default'])(this, Checkbox);
    return (0, _possibleConstructorReturn3['default'])(this, (Checkbox.__proto__ || (0, _getPrototypeOf2['default'])(Checkbox)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var inline = _props.inline;
      var disabled = _props.disabled;
      var validationState = _props.validationState;
      var inputRef = _props.inputRef;
      var className = _props.className;
      var style = _props.style;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3['default'])(_props, ['inline', 'disabled', 'validationState', 'inputRef', 'className', 'style', 'children']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3['default'])(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];

      (0, _logger2['default'])(props);
      var input = _react2['default'].createElement('input', (0, _extends3['default'])({}, elementProps, {
        ref: inputRef,
        type: 'checkbox',
        disabled: disabled
      }));

      if (inline) {
        var _classes2;

        var _classes = (_classes2 = {}, (0, _defineProperty3['default'])(_classes2, (0, _bootstrapUtils.prefix)(bsProps, 'inline'), true), (0, _defineProperty3['default'])(_classes2, 'disabled', disabled), _classes2);

        // Use a warning here instead of in propTypes to get better-looking
        // generated documentation.
        process.env.NODE_ENV !== "production" ? process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!validationState, '`validationState` is ignored on `<Checkbox inline>`. To display ' + 'validation state on an inline checkbox, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0 : void 0;

        return _react2['default'].createElement(
          'label',
          { className: (0, _classnames2['default'])(className, _classes), style: style },
          input,
          children
        );
      }

      var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        disabled: disabled
      });
      if (validationState) {
        classes['has-' + validationState] = true;
      }

      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(className, classes), style: style },
        _react2['default'].createElement(
          'label',
          null,
          input,
          children
        )
      );
    }
  }]);
  return Checkbox;
}(_react2['default'].Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('checkbox', Checkbox);