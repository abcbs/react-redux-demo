'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LearnMore = function (_React$Component) {
  _inherits(LearnMore, _React$Component);

  function LearnMore() {
    _classCallCheck(this, LearnMore);

    var _this = _possibleConstructorReturn(this, (LearnMore.__proto__ || Object.getPrototypeOf(LearnMore)).call(this));

    _this.closeModal = _this.closeModal.bind(_this);
    _this.openModal = _this.openModal.bind(_this);

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(LearnMore, [{
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ open: false });
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ open: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _Button2.default,
          { bsStyle: 'primary', bsSize: 'large', onClick: this.openModal },
          'Learn more \xBB'
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: this.state.open, onHide: this.closeModal },
          _react2.default.createElement(
            _Modal2.default.Header,
            { closeButton: true },
            _react2.default.createElement(
              _Modal2.default.Title,
              null,
              'Learn More'
            )
          ),
          _react2.default.createElement(
            _Modal2.default.Body,
            null,
            'This demonstrates how to use the Modal component from React-Bootstrap'
          ),
          _react2.default.createElement(
            _Modal2.default.Footer,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.closeModal },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return LearnMore;
}(_react2.default.Component);

exports.default = LearnMore;