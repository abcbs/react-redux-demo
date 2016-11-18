'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoEvent = function (_React$Component) {
    _inherits(TodoEvent, _React$Component);

    function TodoEvent(props, context) {
        _classCallCheck(this, TodoEvent);

        var _this = _possibleConstructorReturn(this, (TodoEvent.__proto__ || Object.getPrototypeOf(TodoEvent)).call(this, props, context));

        _this.sendData = null;

        return _this;
    }

    _createClass(TodoEvent, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var onAddClick = _props.onAddClick;
            var onAddTodoVerfiyClick = _props.onAddTodoVerfiyClick;
            var onAddBtnName = _props.onAddBtnName;
            var enentEmitter = _props.enentEmitter;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _reactBootstrap.ButtonToolbar,
                    { style: { position: 'relative', float: 'left', left: '10px' } },
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { type: 'button', bsStyle: 'success',
                            onClick: this.handleClick.bind(this) },
                        onAddBtnName
                    )
                )
            );
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (this.sendData) {
                this.props.onAddClick(this.sendData);
                // this.props.submmitTodo(this.sendData);
            } else {
                // this.props.onAddTodoVerfiyClick("* Dodo不能为空");
                if (this.props.enentEmitter) {
                    this.props.enentEmitter.emit('todos:adding-verfiy', { description: "验证不通过",
                        type: "Verify-Error"
                    }, "* Dodo不能为空,长度大于10");
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.enentEmitter) {
                (function () {
                    var that = _this2;
                    _this2.props.enentEmitter.on('todos:adding', function (option, data) {
                        console.log(option.type, option.description, data);
                        that.sendData = data;
                    });
                })();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true;
        }
        // componentWillUpdate() {
        //     if (this.props.submitResult) {
        //         this.sendData = this.props.submitResult;
        //     }
        // }

    }]);

    return TodoEvent;
}(_react2.default.Component);

exports.default = TodoEvent;


TodoEvent.propTypes = {
    onAddClick: _react.PropTypes.func,
    onAddBtnName: _react.PropTypes.string.isRequired,
    enentEmitter: _react.PropTypes.object.isRequired
};

// export default TodoEvent