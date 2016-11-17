'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TODO_FILTERS = (_TODO_FILTERS = {}, _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_ALL, function () {
  return true;
}), _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_ACTIVE, function (todo) {
  return !todo.completed;
}), _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_COMPLETED, function (todo) {
  return todo.completed;
}), _TODO_FILTERS);

var MainSection = function (_Component) {
  _inherits(MainSection, _Component);

  function MainSection(props, context) {
    _classCallCheck(this, MainSection);

    var _this = _possibleConstructorReturn(this, (MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call(this, props, context));

    _this.state = { filter: _TodoFilters.SHOW_ALL };
    return _this;
  }

  _createClass(MainSection, [{
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
        return _react2.default.createElement('input', { className: (0, _classnames2.default)({
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
        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
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

      return _react2.default.createElement(
        'section',
        { className: 'main' },
        this.renderToggleAll(completedCount),
        _react2.default.createElement(
          'ul',
          { className: 'todo-list' },
          filteredTodos.map(function (todo) {
            return _react2.default.createElement(_TodoItem2.default, _extends({ key: todo.id, todo: todo }, actions));
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

exports.default = MainSection;