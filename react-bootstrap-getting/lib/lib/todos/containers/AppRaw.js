'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _AddTodo = require('../view-bootsrap/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('../view-bootsrap/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('../view-bootsrap/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('../view-bootsrap/Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import AddTodo from '../components/AddTodo'
//import TodoList from '../components/TodoList'
//import Footer from '../components/Footer'


//

var AppRaw = function (_Component) {
    _inherits(AppRaw, _Component);

    function AppRaw() {
        _classCallCheck(this, AppRaw);

        return _possibleConstructorReturn(this, (AppRaw.__proto__ || Object.getPrototypeOf(AppRaw)).apply(this, arguments));
    }

    _createClass(AppRaw, [{
        key: 'render',

        //原来的没有加工过的函数
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AddTodo2.default, {
                    onAddClick: function onAddClick(text) {
                        return console.log('add todo', text);
                    } }),
                _react2.default.createElement(_TodoList2.default, {
                    todos: [{
                        text: 'Use Redux',
                        completed: true
                    }, {
                        text: 'Learn to connect it to React',
                        completed: false
                    }],
                    onTodoClick: function onTodoClick(todo) {
                        return console.log('todo clicked', todo);
                    } }),
                _react2.default.createElement(_Footer2.default, {
                    filter: 'SHOW_ALL',
                    onFilterChange: function onFilterChange(filter) {
                        return console.log('filter change', filter);
                    } })
            );
        }
    }]);

    return AppRaw;
}(_react.Component);

AppRaw.propTypes = {
    visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string.isRequired,
        completed: _react.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};
exports.default = AppRaw;