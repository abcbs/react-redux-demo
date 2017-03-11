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

var _AbcContainerPage = require('../../abc-framework/ui/AbcContainerPage');

var _AbcContainerPage2 = _interopRequireDefault(_AbcContainerPage);

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

var _AbcContainerFramePage = require('../../abc-framework/ui/AbcContainerFramePage');

var _AbcContainerFramePage2 = _interopRequireDefault(_AbcContainerFramePage);

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

function mapStateToProps(state, props) {
    return {
        visibleTodos: (0, _TodoSelectors.visibleTodosSelector)(state, props)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoAction: (0, _redux.bindActionCreators)(_actions.addTodo, dispatch),
        //绑定具体的处理方法，此方法在Todo中为真正的删除处理事件，它使用的动作为completeTodo
        //而它使用的动作为completeTodo的数据为索引index
        completeTodoAction: (0, _redux.bindActionCreators)(_actions.completeTodo, dispatch),
        setVisibilityFilterAtion: (0, _redux.bindActionCreators)(_actions.setVisibilityFilter, dispatch)
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
var App = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec2 = (0, _internationalize2.default)(), _dec3 = (0, _AbcContainerPage2.default)({ title: messages.title, subTitle: messages.subTitle }), _dec(_class = _dec2(_class = _dec3(_class = function (_React$Component) {
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
                    onAddTodoVerfiy: addTodoVerfiyAction
                    // verfiedResult={verfiedResult}
                    , submitResult: submitResult,
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
    }).isRequired),
    visibilityFilter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'])
};