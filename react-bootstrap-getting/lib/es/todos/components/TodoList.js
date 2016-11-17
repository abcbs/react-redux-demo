'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TodoList = function (_Component) {
    (0, _inherits3['default'])(TodoList, _Component);

    function TodoList() {
        (0, _classCallCheck3['default'])(this, TodoList);
        return (0, _possibleConstructorReturn3['default'])(this, (TodoList.__proto__ || (0, _getPrototypeOf2['default'])(TodoList)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TodoList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                'ul',
                null,
                this.props.todos.map(function (todo, index) {
                    return _react2['default'].createElement(_Todo2['default'], (0, _extends3['default'])({}, todo, {
                        key: index,
                        onClick: function onClick() {
                            return _this2.props.onTodoClick(index);
                        } }));
                })
            );
        }
    }]);
    return TodoList;
}(_react.Component);

exports['default'] = TodoList;


TodoList.propTypes = {
    onTodoClick: _react.PropTypes.func.isRequired,
    // todos: PropTypes.arrayOf(PropTypes.shape({
    //     text: PropTypes.string.isRequired,
    //     completed: PropTypes.bool.isRequired
    // }).isRequired).isRequired

    todos: _react.PropTypes.array.isRequired
};