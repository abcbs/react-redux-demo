'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class;
//

//import AddTodo from '../components/AddTodo'
//import TodoList from '../components/TodoList'
//import Footer from '../components/Footer'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactIntl = require('react-intl');

var _internationalize = require('../../abc-framework/international/internationalize');

var _internationalize2 = _interopRequireDefault(_internationalize);

var _AbcPageContainer = require('../../abc-framework/ui/AbcPageContainer');

var _AbcPageContainer2 = _interopRequireDefault(_AbcPageContainer);

var _actions = require('../actions');

var _AddTodo = require('../view-bootsrap/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('../view-bootsrap/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _Footer = require('../view-bootsrap/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _UndoRedo = require('./UndoRedo');

var _UndoRedo2 = _interopRequireDefault(_UndoRedo);

var _TodoSelectors = require('../selectors/TodoSelectors');

var _AbcPage = require('../../abc-framework/ui/AbcPage');

var _AbcPage2 = _interopRequireDefault(_AbcPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
var messages = (0, _reactIntl.defineMessages)({
    title: {
        id: 'main.title',
        description: '新增产品',
        defaultMessage: '新增产品'
    },
    subTitle: {
        id: 'main.subTitle',
        description: '新增产品',
        defaultMessage: '新增产品，可以撤销'
    }
});
var getVisibleTodos = function getVisibleTodos(state, filter) {

    var todos = state.todos;
    switch (filter) {
        case 'SHOW_ALL':
            return state;
        case 'SHOW_COMPLETED':
            return state.filter(function (t) {
                return t.completed;
            });
        case 'SHOW_ACTIVE':
            return state.filter(function (t) {
                return !t.completed;
            });
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

/**
 * 提交之后
 * @param state
 * @returns {*}
 */
var getFormInfo = function getFormInfo(actions, state) {
    var action = actions && actions.splice && actions.splice(-1, 1);
    var todo = action[0];
    if (!action[0] || !todo) {
        return '';
    } else {
        var act = todo.action;
        if (todo.text && state.visibilityFilter) {
            actions.push(todo);
        }
        return todo.text || act.text;
    }
};
var getTodoVerfiy = function getTodoVerfiy(todos) {
    return todos.addTodoVerfiy;
};

function mapStateToProps(state, ownProps) {
    var visibleTodos = _TodoSelectors.visibleTodosSelector;
    var todos = state.todos || state.default.todos;
    return {
        verfiedResult: getTodoVerfiy(state),
        visibilityFilter: state.visibilityFilter || state.default.visibilityFilter,
        submitResult: getFormInfo(todos.present, state || state.default),
        todos: getVisibleTodos(todos.present, state.visibilityFilter || state.default.visibilityFilter)

    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoAction: (0, _redux.bindActionCreators)(_actions.addTodo, dispatch),
        completeTodoAction: (0, _redux.bindActionCreators)(_actions.completeTodo, dispatch),
        setVisibilityFilterAtion: (0, _redux.bindActionCreators)(_actions.setVisibilityFilter, dispatch)
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
var App = (_dec = (0, _reactRedux.connect)(_TodoSelectors.visibleTodosSelector, mapDispatchToProps), _dec2 = (0, _internationalize2.default)(), _dec3 = (0, _AbcPageContainer2.default)({ title: messages.title, subTitle: messages.subTitle }), _dec(_class = _dec2(_class = _dec3(_class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            // Injected by connect() call:
            var _props = this.props;
            var dispatch = _props.dispatch;
            var visibleTodos = _props.visibleTodos;
            var visibilityFilter = _props.visibilityFilter;
            var addTodoAction = _props.addTodoAction;
            var verfiedResult = _props.verfiedResult;
            var addTodoVerfiyAction = _props.addTodoVerfiyAction;
            var completeTodoAction = _props.completeTodoAction;
            var setVisibilityFilterAtion = _props.setVisibilityFilterAtion;
            var submitResult = _props.submitResult;
            var submmitTodoAction = _props.submmitTodoAction;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AddTodo2.default, {
                    onAddClick: addTodoAction,
                    onAddTodoVerfiy: addTodoVerfiyAction,
                    verfiedResult: verfiedResult,
                    submitResult: submitResult,
                    submmitTodo: submmitTodoAction
                }),
                _react2.default.createElement(_UndoRedo2.default, null),
                _react2.default.createElement(_TodoList2.default, {
                    todos: visibleTodos,
                    onTodoClick: completeTodoAction }),
                _react2.default.createElement(_Footer2.default, {
                    filter: visibilityFilter,
                    onFilterChange: setVisibilityFilterAtion })
            );
        }
    }]);

    return App;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = App;


App.propTypes = {
    visibleTodos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string.isRequired,
        completed: _react.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};