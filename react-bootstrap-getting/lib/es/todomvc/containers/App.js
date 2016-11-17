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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = require('../components/MainSection');

var _MainSection2 = _interopRequireDefault(_MainSection);

var _todos = require('../reducers/todos');

var TodoActions = _interopRequireWildcard(_todos);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var App = function (_Component) {
  (0, _inherits3['default'])(App, _Component);

  function App() {
    (0, _classCallCheck3['default'])(this, App);
    return (0, _possibleConstructorReturn3['default'])(this, (App.__proto__ || (0, _getPrototypeOf2['default'])(App)).apply(this, arguments));
  }

  (0, _createClass3['default'])(App, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var todos = _props.todos;
      var actions = _props.actions;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], { addTodo: actions.addTodo }),
        _react2['default'].createElement(_MainSection2['default'], { todos: todos, actions: actions })
      );
    }
  }]);
  return App;
}(_react.Component);

//组件的属性可以接受任意值，字符串、对象、函数等等都可以。
//有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。


App.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired
};

//将state.todos绑定到props的todos
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return { //把所有的Action注册到Redux中
    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
  };
}

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);