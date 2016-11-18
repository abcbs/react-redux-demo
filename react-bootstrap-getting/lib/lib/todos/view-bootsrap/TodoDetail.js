'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _TodoEvent = require('../view-bootsrap/TodoEvent');

var _TodoEvent2 = _interopRequireDefault(_TodoEvent);

var _AbcContainer = require('../framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoDetail = function (_Component) {
    _inherits(TodoDetail, _Component);

    function TodoDetail(props, context) {
        _classCallCheck(this, TodoDetail);

        var _this = _possibleConstructorReturn(this, (TodoDetail.__proto__ || Object.getPrototypeOf(TodoDetail)).call(this, props, context));

        _this.state = {
            todovalue: ""
        };
        _this.verify;
        return _this;
    }

    _createClass(TodoDetail, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            var _this2 = this;

            if (this.props.enentEmitter && this.props.enentEmitter) {
                (function () {
                    var that = _this2;
                    _this2.props.enentEmitter.on('todos:adding-verfiy', function (option, data) {
                        that.setState({
                            todovalueHelp: data
                        });
                    });
                })();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            (0, _logger2.default)("render,props,", this.props);
            (0, _logger2.default)("render,state,", this.state);

            var _props = this.props;
            var formName = _props.formName;
            var btnName = _props.btnName;
            var onAddClick = _props.onAddClick;
            var enentEmitter = _props.enentEmitter;

            var other = _objectWithoutProperties(_props, ['formName', 'btnName', 'onAddClick', 'enentEmitter']);

            var valid = this.state.todovalueHelp;

            return _react2.default.createElement(
                _AbcContainer2.default,
                { isMovedTop: false },
                _react2.default.createElement(
                    _reactBootstrap.FormGroup,
                    {
                        controlId: 'formBasicText',
                        validationState: this.getValidationState()
                    },
                    _react2.default.createElement(_reactBootstrap.FormControl, {
                        type: 'text',
                        value: this.state.todovalue,
                        placeholder: 'Enter text',
                        onChange: this.handleChange.bind(this),
                        onKeyDown: this.handleSubmit.bind(this)
                    }),
                    _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
                    _react2.default.createElement(
                        _reactBootstrap.HelpBlock,
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            this.state.todovalueHelp || this.verify
                        )
                    )
                )
            );
        }
    }, {
        key: 'changeTodo',
        value: function changeTodo(e) {
            var upwd = e.target.value;
            this.setState({
                todovalue: upwd
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (this.getValidationState() === 'success') {
                if (this.state.todovalue === "" || this.state.todovalue === null) {
                    this.setState({
                        todovalueHelp: ""
                    });
                }
                this.props.onAddClick(this.state.todovalue);
            } else {
                this.setState({
                    todovalueHelp: "* Dodo不能为空,长度大于10,目前长度为:".concat(this.state.todovalue.length)
                });
                return;
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var text = e.target.value.trim();
            if (e.which === 13) {
                this.handleClick(e);
            }
        }
    }, {
        key: 'getValidationState',
        value: function getValidationState() {
            var length = this.state.todovalue.length;
            if (length > 10) return 'success';else if (length > 5) return 'warning';else if (length >= 0) return 'error';
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ todovalue: e.target.value });
            if (this.getValidationState() === 'success') {
                //由事件机制提交到操作
                this.setState({
                    todovalueHelp: ""
                });
                //提交数据
                // this.props.onAddClick(this.state.todovalue);
                if (this.props.enentEmitter) {
                    //event.emit("todo-adding",null,value);
                    this.props.enentEmitter.emit('todos:adding', { description: "数据保存成功，并且回调执行成功",
                        type: "Sucess"
                    }, e.target.value);
                }
            } else {
                this.setState({

                    todovalueHelp: "* Dodo不能为空,目前长度为:".concat(this.state.todovalue.length)
                });
                return;
            }
        }
    }]);

    return TodoDetail;
}(_react.Component);

exports.default = TodoDetail;


TodoDetail.propTypes = {
    onAddClick: _react.PropTypes.func,
    onEditClick: _react.PropTypes.func,
    formName: _react.PropTypes.string,
    btnName: _react.PropTypes.string,
    enentEmitter: _react.PropTypes.object.isRequired
    // onAddTodoVerfiyClick: PropTypes.func,
    // verfiedResult:PropTypes.object

};