'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileTearSheet = (_temp = _class = function (_Component) {
  _inherits(MobileTearSheet, _Component);

  function MobileTearSheet() {
    _classCallCheck(this, MobileTearSheet);

    return _possibleConstructorReturn(this, (MobileTearSheet.__proto__ || Object.getPrototypeOf(MobileTearSheet)).apply(this, arguments));
  }

  _createClass(MobileTearSheet, [{
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

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.container) },
          this.props.children
        ),
        _react2.default.createElement('img', { style: prepareStyles(styles.bottomTear), src: 'images/bottom-tear.svg' })
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
exports.default = MobileTearSheet;