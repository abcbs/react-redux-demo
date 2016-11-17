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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TodoTextInput = function (_Component) {
  (0, _inherits3['default'])(TodoTextInput, _Component);

  function TodoTextInput(props, context) {
    (0, _classCallCheck3['default'])(this, TodoTextInput);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (TodoTextInput.__proto__ || (0, _getPrototypeOf2['default'])(TodoTextInput)).call(this, props, context));

    _this.state = {
      text: _this.props.text || ''
    };
    return _this;
  }

  (0, _createClass3['default'])(TodoTextInput, [{
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
      return _react2['default'].createElement('input', { className: (0, _classnames2['default'])({
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

exports['default'] = TodoTextInput;