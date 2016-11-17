'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoTextInput = require('./TodoTextInput');

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function (_Component) {
  _inherits(TodoItem, _Component);

  function TodoItem(props, context) {
    _classCallCheck(this, TodoItem);

    var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this, props, context));

    _this.state = { //设置编辑默认为false
      editing: false
    };
    return _this;
  }
  //双击动作


  _createClass(TodoItem, [{
    key: 'handleDoubleClick',
    value: function handleDoubleClick() {
      //设置编辑为true
      this.setState({ editing: true });
    }
  }, {
    key: 'handleSave',
    value: function handleSave(id, text) {
      if (text.length === 0) {
        this.props.deleteTodo(id);
      } else {
        this.props.editTodo(id, text);
      }
      this.setState({ editing: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var todo = _props.todo;
      var completeTodo = _props.completeTodo;
      var deleteTodo = _props.deleteTodo;


      var element = void 0;
      //如果是编辑是则构建新的TodoTextInput
      if (this.state.editing) {
        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
          editing: this.state.editing,
          onSave: function onSave(text) {
            return _this2.handleSave(todo.id, text);
          }
        });
      } else {
        element = _react2.default.createElement(
          'div',
          { className: 'view' },
          _react2.default.createElement('input', { className: 'toggle',
            type: 'checkbox',
            checked: todo.completed,
            onChange: function onChange() {
              return completeTodo(todo.id);
            }
          }),
          _react2.default.createElement(
            'label',
            {
              /**
              * 双击动作
              */
              onDoubleClick: this.handleDoubleClick.bind(this)
            },
            todo.text
          ),
          _react2.default.createElement('button', { className: 'destroy',
            onClick: function onClick() {
              return deleteTodo(todo.id);
            }
          })
        );
      }

      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)({
            completed: todo.completed,
            editing: this.state.editing
          }) },
        element
      );
    }
  }]);

  return TodoItem;
}(_react.Component);

TodoItem.propTypes = {
  todo: _react.PropTypes.object.isRequired,
  editTodo: _react.PropTypes.func.isRequired,
  deleteTodo: _react.PropTypes.func.isRequired,
  completeTodo: _react.PropTypes.func.isRequired
};

exports.default = TodoItem;