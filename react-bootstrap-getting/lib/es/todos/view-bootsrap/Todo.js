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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var idx = 0;

var Todo = function (_Component) {
    (0, _inherits3['default'])(Todo, _Component);

    function Todo() {
        (0, _classCallCheck3['default'])(this, Todo);
        return (0, _possibleConstructorReturn3['default'])(this, (Todo.__proto__ || (0, _getPrototypeOf2['default'])(Todo)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Todo, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'span',
                {
                    key: idx++,
                    onClick: this.props.onClick,
                    style: {
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                        cursor: this.props.completed ? 'default' : 'pointer'
                    } },
                _react2['default'].createElement(
                    'label',
                    { className: 'control-label' },
                    this.props.text
                )
            );
        }
    }]);
    return Todo;
}(_react.Component);

exports['default'] = Todo;


Todo.propTypes = {
    onClick: _react.PropTypes.func.isRequired,
    text: _react.PropTypes.string.isRequired,
    completed: _react.PropTypes.bool.isRequired
};