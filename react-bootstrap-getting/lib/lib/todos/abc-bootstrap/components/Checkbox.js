'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _logger = require('../../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  inline: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: _react2.default.PropTypes.oneOf(['success', 'warning', 'error']),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _react2.default.PropTypes.func
};

var defaultProps = {
  inline: false,
  disabled: false
};

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
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

      var props = _objectWithoutProperties(_props, ['inline', 'disabled', 'validationState', 'inputRef', 'className', 'style', 'children']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = _slicedToArray(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];

      (0, _logger2.default)(props);
      var input = _react2.default.createElement('input', _extends({}, elementProps, {
        ref: inputRef,
        type: 'checkbox',
        disabled: disabled
      }));

      if (inline) {
        var _classes2;

        var _classes = (_classes2 = {}, _defineProperty(_classes2, (0, _bootstrapUtils.prefix)(bsProps, 'inline'), true), _defineProperty(_classes2, 'disabled', disabled), _classes2);

        // Use a warning here instead of in propTypes to get better-looking
        // generated documentation.
        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!validationState, '`validationState` is ignored on `<Checkbox inline>`. To display ' + 'validation state on an inline checkbox, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;

        return _react2.default.createElement(
          'label',
          { className: (0, _classnames2.default)(className, _classes), style: style },
          input,
          children
        );
      }

      var classes = _extends({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        disabled: disabled
      });
      if (validationState) {
        classes['has-' + validationState] = true;
      }

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, classes), style: style },
        _react2.default.createElement(
          'label',
          null,
          input,
          children
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports.default = (0, _bootstrapUtils.bsClass)('checkbox', Checkbox);