'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoTextInput = function (_Component) {
  _inherits(TodoTextInput, _Component);

  function TodoTextInput(props, context) {
    _classCallCheck(this, TodoTextInput);

    var _this = _possibleConstructorReturn(this, (TodoTextInput.__proto__ || Object.getPrototypeOf(TodoTextInput)).call(this, props, context));

    _this.state = {
      text: _this.props.text || ''
    };
    return _this;
  }

  _createClass(TodoTextInput, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var text = e.target.value.trim();
      if (e.which === 13) {
        //调用属性的保存方法
        this.props.onSave(text);
        if (this.props.newTodo) {
          this.setState({ text: '' });
        }
      }
    }

    //文本输入框的值，不能用 this.props.value 读取，
    // 而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值。
    // textarea 元素、select元素、radio元素都属于这种情况

  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (!this.props.newTodo) {
        this.props.onSave(e.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: (0, _classnames2.default)({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        }),
        type: 'text',
        placeholder: this.props.placeholder,
        autoFocus: 'true',
        value: this.state.text,
        onBlur: this.handleBlur.bind(this),
        onChange: this.handleChange.bind(this),
        onKeyDown: this.handleSubmit.bind(this) });
    }
  }]);

  return TodoTextInput;
}(_react.Component);
//组件属性
/**
 * 当新建时，newTodo、placeholder
 * 当编辑时，text、editing
 * @type {{onSave: *, newTodo: *, placeholder: *, text: *, editing: *}}
 */


TodoTextInput.propTypes = {
  onSave: _react.PropTypes.func.isRequired, //传入事件，用于向上绑定
  newTodo: _react.PropTypes.bool, //是否为newTodo
  placeholder: _react.PropTypes.string, //传入名称
  text: _react.PropTypes.string,
  editing: _react.PropTypes.bool

};

exports.default = TodoTextInput;