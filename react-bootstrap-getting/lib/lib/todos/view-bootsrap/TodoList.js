'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

require('../../styles/css/index.css');

var _AbcContainer = require('../../abc-framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _Todo = require('./Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_Component) {
    _inherits(TodoList, _Component);

    function TodoList(props, context) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props, context));

        _this.handleTodo = function (index) {
            return _this.props.onTodoClick(index);
        };

        _this.idx = 1;
        return _this;
    }

    _createClass(TodoList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _AbcContainer2.default,
                { isMovedTop: false },
                _react2.default.createElement(
                    _reactBootstrap.ListGroup,
                    { className: 'todo-list', componentClass: 'ul' },
                    this.props.todos && this.props.todos.map && this.props.todos.map(function (todo, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: _this2.idx++ },
                            _react2.default.createElement('input', { type: 'checkbox' }),
                            _react2.default.createElement(_Todo2.default, _extends({}, todo, {
                                key: _this2.idx++,
                                onClick: function onClick() {
                                    return _this2.props.onTodoClick(index);
                                } }))
                        );
                    })
                )
            );
        }
    }]);

    return TodoList;
}(_react.Component);

exports.default = TodoList;


TodoList.propTypes = {
    onTodoClick: _react.PropTypes.func.isRequired,
    todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string.isRequired,
        completed: _react.PropTypes.bool.isRequired
    }).isRequired).isRequired

    //todos: PropTypes.array.isRequired,
};