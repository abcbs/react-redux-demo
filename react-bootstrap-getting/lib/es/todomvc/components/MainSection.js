'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _TODO_FILTERS;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoItem = require('./TodoItem');

var _TodoItem2 = _interopRequireDefault(_TodoItem);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoFilters = require('../constants/TodoFilters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TODO_FILTERS = (_TODO_FILTERS = {}, (0, _defineProperty3['default'])(_TODO_FILTERS, _TodoFilters.SHOW_ALL, function () {
  return true;
}), (0, _defineProperty3['default'])(_TODO_FILTERS, _TodoFilters.SHOW_ACTIVE, function (todo) {
  return !todo.completed;
}), (0, _defineProperty3['default'])(_TODO_FILTERS, _TodoFilters.SHOW_COMPLETED, function (todo) {
  return todo.completed;
}), _TODO_FILTERS);

var MainSection = function (_Component) {
  (0, _inherits3['default'])(MainSection, _Component);

  function MainSection(props, context) {
    (0, _classCallCheck3['default'])(this, MainSection);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (MainSection.__proto__ || (0, _getPrototypeOf2['default'])(MainSection)).call(this, props, context));

    _this.state = { filter: _TodoFilters.SHOW_ALL };
    return _this;
  }

  (0, _createClass3['default'])(MainSection, [{
    key: 'handleClearCompleted',
    value: function handleClearCompleted() {
      this.props.actions.clearCompleted();
    }
  }, {
    key: 'handleShow',
    value: function handleShow(filter) {
      this.setState({ filter: filter });
    }
  }, {
    key: 'renderToggleAll',
    value: function renderToggleAll(completedCount) {
      var userAgent = window.navigator.userAgent; //取得浏览器的userAgent字符串
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;

      console.log("userAgent is,", userAgent);
      console.log("isIE is>,", isIE);
      var _props = this.props;
      var todos = _props.todos;
      var actions = _props.actions;

      if (todos.length > 0) {
        //
        return _react2['default'].createElement('input', { className: (0, _classnames2['default'])({
            "toggle-all-for-ie": isIE,
            "toggle-all": !isIE
          }),
          type: 'checkbox',
          checked: completedCount === todos.length,

          onChange: actions.completeAll });
      }
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(completedCount) {
      var todos = this.props.todos;
      var filter = this.state.filter;

      var activeCount = todos.length - completedCount;

      if (todos.length) {
        return _react2['default'].createElement(_Footer2['default'], { completedCount: completedCount,
          activeCount: activeCount,
          filter: filter,
          onClearCompleted: this.handleClearCompleted.bind(this),
          onShow: this.handleShow.bind(this) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var todos = _props2.todos;
      var actions = _props2.actions;
      var filter = this.state.filter;


      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
      var completedCount = todos.reduce(function (count, todo) {
        return todo.completed ? count + 1 : count;
      }, 0);

      return _react2['default'].createElement(
        'section',
        { className: 'main' },
        this.renderToggleAll(completedCount),
        _react2['default'].createElement(
          'ul',
          { className: 'todo-list' },
          filteredTodos.map(function (todo) {
            return _react2['default'].createElement(_TodoItem2['default'], (0, _extends3['default'])({ key: todo.id, todo: todo }, actions));
          })
        ),
        this.renderFooter(completedCount)
      );
    }
  }]);
  return MainSection;
}(_react.Component);

MainSection.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired
};

exports['default'] = MainSection;