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

var _bootstrapUtils = require('../utils/bootstrapUtils');

var _logger = require('../../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO: `pullRight` doesn't belong here. There's no special handling here.
var propTypes = {
  pullRight: _react2['default'].PropTypes.bool
};

var defaultProps = {
  pullRight: false,
  bsStyle: "abc"
};

var Badge = function (_React$Component) {
  (0, _inherits3['default'])(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck3['default'])(this, Badge);
    return (0, _possibleConstructorReturn3['default'])(this, (Badge.__proto__ || (0, _getPrototypeOf2['default'])(Badge)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Badge, [{
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
      var pullRight = _props.pullRight;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3['default'])(_props, ['pullRight', 'className', 'children']);

      var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props);

      var _splitBsProps2 = (0, _slicedToArray3['default'])(_splitBsProps, 2);

      var bsProps = _splitBsProps2[0];
      var elementProps = _splitBsProps2[1];

      (0, _logger2['default'])(this.props);
      var classes = (0, _extends3['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
        'pull-right': pullRight,

        // Hack for collapsing on IE8.
        hidden: !this.hasContent(children)
      });

      return _react2['default'].createElement(
        'div',
        (0, _extends3['default'])({}, elementProps, {
          className: (0, _classnames2['default'])(className, classes)
        }),
        children
      );
    }
  }]);
  return Badge;
}(_react2['default'].Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

exports['default'] = (0, _bootstrapUtils.bsClass)('badge', Badge);