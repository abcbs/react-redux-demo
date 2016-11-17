'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

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

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LearnMore = function (_React$Component) {
  (0, _inherits3['default'])(LearnMore, _React$Component);

  function LearnMore() {
    (0, _classCallCheck3['default'])(this, LearnMore);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (LearnMore.__proto__ || (0, _getPrototypeOf2['default'])(LearnMore)).call(this));

    _this.closeModal = _this.closeModal.bind(_this);
    _this.openModal = _this.openModal.bind(_this);

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3['default'])(LearnMore, [{
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
      return _react2['default'].createElement(
        'p',
        null,
        _react2['default'].createElement(
          _Button2['default'],
          { bsStyle: 'primary', bsSize: 'large', onClick: this.openModal },
          'Learn more \xBB'
        ),
        _react2['default'].createElement(
          _Modal2['default'],
          { show: this.state.open, onHide: this.closeModal },
          _react2['default'].createElement(
            _Modal2['default'].Header,
            { closeButton: true },
            _react2['default'].createElement(
              _Modal2['default'].Title,
              null,
              'Learn More'
            )
          ),
          _react2['default'].createElement(
            _Modal2['default'].Body,
            null,
            'This demonstrates how to use the Modal component from React-Bootstrap'
          ),
          _react2['default'].createElement(
            _Modal2['default'].Footer,
            null,
            _react2['default'].createElement(
              _Button2['default'],
              { onClick: this.closeModal },
              'Close'
            )
          )
        )
      );
    }
  }]);
  return LearnMore;
}(_react2['default'].Component);

exports['default'] = LearnMore;