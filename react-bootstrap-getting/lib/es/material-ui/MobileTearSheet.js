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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MobileTearSheet = (_temp = _class = function (_Component) {
  (0, _inherits3['default'])(MobileTearSheet, _Component);

  function MobileTearSheet() {
    (0, _classCallCheck3['default'])(this, MobileTearSheet);
    return (0, _possibleConstructorReturn3['default'])(this, (MobileTearSheet.__proto__ || (0, _getPrototypeOf2['default'])(MobileTearSheet)).apply(this, arguments));
  }

  (0, _createClass3['default'])(MobileTearSheet, [{
    key: 'render',
    value: function render() {
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var styles = {
        root: {
          marginBottom: 24,
          marginRight: 24,
          maxWidth: 360,
          width: '100%'
        },
        container: {
          border: 'solid 1px #d9d9d9',
          borderBottom: 'none',
          height: this.props.height,
          overflow: 'hidden'
        },
        bottomTear: {
          display: 'block',
          position: 'relative',
          marginTop: -10,
          maxWidth: 360
        }
      };

      return _react2['default'].createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2['default'].createElement(
          'div',
          { style: prepareStyles(styles.container) },
          this.props.children
        ),
        _react2['default'].createElement('img', { style: prepareStyles(styles.bottomTear), src: 'images/bottom-tear.svg' })
      );
    }
  }]);
  return MobileTearSheet;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node,
  height: _react.PropTypes.number.isRequired
}, _class.defaultProps = {
  height: 500
}, _class.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
}, _temp);
exports['default'] = MobileTearSheet;