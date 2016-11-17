'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

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

var _TodoDetail = require('./TodoDetail');

var _TodoDetail2 = _interopRequireDefault(_TodoDetail);

var _TodoEvent = require('../view-bootsrap/TodoEvent');

var _TodoEvent2 = _interopRequireDefault(_TodoEvent);

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

//使用事件监听方式实现组件中的消息传递
var EventEmitter = require('events').EventEmitter;
var enentEmitter = new EventEmitter();

var AddTodo = function (_Component) {
    (0, _inherits3['default'])(AddTodo, _Component);

    function AddTodo(props) {
        (0, _classCallCheck3['default'])(this, AddTodo);
        return (0, _possibleConstructorReturn3['default'])(this, (AddTodo.__proto__ || (0, _getPrototypeOf2['default'])(AddTodo)).call(this, props));
    }

    (0, _createClass3['default'])(AddTodo, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var todos = _props.todos;
            var onAddClick = _props.onAddClick;

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_TodoDetail2['default'], { other: true,
                    onAddClick: onAddClick,
                    formName: '\u6DFB\u52A0\u8BE6\u7EC6',
                    enentEmitter: enentEmitter
                    // onAddTodoVerfiyClick={onAddTodoVerfiy}
                    // verfiedResult={verfiedResult}

                }),
                _react2['default'].createElement(_TodoEvent2['default'], { onAddClick: onAddClick
                    // onAddTodoVerfiyClick={onAddTodoVerfiy}
                    , onAddBtnName: '\u786E\u5B9A', enentEmitter: enentEmitter
                    // submitResult={submitResult}  submmitTodo={submmitTodo}
                })
            );
        }
    }]);
    return AddTodo;
}(_react.Component);

exports['default'] = AddTodo;


AddTodo.propTypes = {
    onAddClick: _react.PropTypes.func.isRequired
};