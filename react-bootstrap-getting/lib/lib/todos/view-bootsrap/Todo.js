'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var idx = 0;

var Todo = function (_Component) {
    _inherits(Todo, _Component);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                {
                    key: idx++,
                    onClick: this.props.onClick,
                    style: {
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                        cursor: this.props.completed ? 'default' : 'pointer'
                    } },
                _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    this.props.text
                )
            );
        }
    }]);

    return Todo;
}(_react.Component);

exports.default = Todo;


Todo.propTypes = {
    onClick: _react.PropTypes.func.isRequired,
    text: _react.PropTypes.string.isRequired,
    completed: _react.PropTypes.bool.isRequired
};