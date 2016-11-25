'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TodoDetail = require('./TodoDetail');

var _TodoDetail2 = _interopRequireDefault(_TodoDetail);

var _TodoEvent = require('../view-bootsrap/TodoEvent');

var _TodoEvent2 = _interopRequireDefault(_TodoEvent);

var _logger = require('../../abc-framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//使用事件监听方式实现组件中的消息传递
var EventEmitter = require('events').EventEmitter;
var enentEmitter = new EventEmitter();

var AddTodo = function (_Component) {
    _inherits(AddTodo, _Component);

    function AddTodo(props) {
        _classCallCheck(this, AddTodo);

        return _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));
    }

    _createClass(AddTodo, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var todos = _props.todos;
            var onAddClick = _props.onAddClick;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TodoDetail2.default, { other: true,
                    onAddClick: onAddClick,
                    formName: '\u6DFB\u52A0\u8BE6\u7EC6',
                    enentEmitter: enentEmitter
                    // onAddTodoVerfiyClick={onAddTodoVerfiy}
                    // verfiedResult={verfiedResult}

                }),
                _react2.default.createElement(_TodoEvent2.default, { onAddClick: onAddClick
                    // onAddTodoVerfiyClick={onAddTodoVerfiy}
                    , onAddBtnName: '\u786E\u5B9A', enentEmitter: enentEmitter
                    // submitResult={submitResult}  submmitTodo={submmitTodo}
                })
            );
        }
    }]);

    return AddTodo;
}(_react.Component);

exports.default = AddTodo;


AddTodo.propTypes = {
    onAddClick: _react.PropTypes.func.isRequired
};