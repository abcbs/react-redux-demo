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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

//

var AppRaw = function (_Component) {
    (0, _inherits3['default'])(AppRaw, _Component);

    function AppRaw() {
        (0, _classCallCheck3['default'])(this, AppRaw);
        return (0, _possibleConstructorReturn3['default'])(this, (AppRaw.__proto__ || (0, _getPrototypeOf2['default'])(AppRaw)).apply(this, arguments));
    }

    (0, _createClass3['default'])(AppRaw, [{
        key: 'render',

        //原来的没有加工过的函数
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_AddTodo2['default'], {
                    onAddClick: function onAddClick(text) {
                        return console.log('add todo', text);
                    } }),
                _react2['default'].createElement(_TodoList2['default'], {
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
                _react2['default'].createElement(_Footer2['default'], {
                    filter: 'SHOW_ALL',
                    onFilterChange: function onFilterChange(filter) {
                        return console.log('filter change', filter);
                    } })
            );
        }
    }]);
    return AppRaw;
}(_react.Component);
//import AddTodo from '../components/AddTodo'
//import TodoList from '../components/TodoList'
//import Footer from '../components/Footer'


AppRaw.propTypes = {
    visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string.isRequired,
        completed: _react.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};
exports['default'] = AppRaw;