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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoTextInput = require('./TodoTextInput');

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TodoItem = function (_Component) {
  (0, _inherits3['default'])(TodoItem, _Component);

  function TodoItem(props, context) {
    (0, _classCallCheck3['default'])(this, TodoItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (TodoItem.__proto__ || (0, _getPrototypeOf2['default'])(TodoItem)).call(this, props, context));

    _this.state = { //设置编辑默认为false
      editing: false
    };
    return _this;
  }
  //双击动作


  (0, _createClass3['default'])(TodoItem, [{
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
        element = _react2['default'].createElement(_TodoTextInput2['default'], { text: todo.text,
          editing: this.state.editing,
          onSave: function onSave(text) {
            return _this2.handleSave(todo.id, text);
          }
        });
      } else {
        element = _react2['default'].createElement(
          'div',
          { className: 'view' },
          _react2['default'].createElement('input', { className: 'toggle',
            type: 'checkbox',
            checked: todo.completed,
            onChange: function onChange() {
              return completeTodo(todo.id);
            }
          }),
          _react2['default'].createElement(
            'label',
            {
              /**
              * 双击动作
              */
              onDoubleClick: this.handleDoubleClick.bind(this)
            },
            todo.text
          ),
          _react2['default'].createElement('button', { className: 'destroy',
            onClick: function onClick() {
              return deleteTodo(todo.id);
            }
          })
        );
      }

      return _react2['default'].createElement(
        'li',
        { className: (0, _classnames2['default'])({
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

exports['default'] = TodoItem;