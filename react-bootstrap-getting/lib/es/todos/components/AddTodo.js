"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AddTodo = function (_Component) {
    (0, _inherits3["default"])(AddTodo, _Component);

    function AddTodo(props) {
        (0, _classCallCheck3["default"])(this, AddTodo);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (AddTodo.__proto__ || (0, _getPrototypeOf2["default"])(AddTodo)).call(this, props));

        _this.state = {
            userName: "",
            userPassword: "",
            isRemember: false,
            unameHelp: "",
            upwdHelp: "",
            todovalue: ""
        };
        return _this;
    }

    (0, _createClass3["default"])(AddTodo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    "div",
                    { className: "login-box" },
                    _react2["default"].createElement(
                        "div",
                        { className: "login-title" },
                        "\u767B   \u5F55"
                    ),
                    _react2["default"].createElement(
                        "form",
                        { action: "", className: "form-horizontal" },
                        _react2["default"].createElement(
                            "div",
                            { className: "form-group input-text" },
                            _react2["default"].createElement(
                                "label",
                                { htmlFor: "uname" },
                                "\u8D26\u53F7"
                            ),
                            _react2["default"].createElement("input", { name: "username", id: "uname", onChange: this.changeUsername.bind(this),
                                value: this.state.userName,
                                type: "text", placeholder: "\u624B\u673A\u53F7/\u7528\u6237\u540D", className: "form-control", ref: "uname" }),
                            _react2["default"].createElement(
                                "span",
                                { className: "help-block" },
                                this.state.unameHelp
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "form-group input-text" },
                            _react2["default"].createElement(
                                "label",
                                { htmlFor: "upwd" },
                                "\u5BC6\u7801"
                            ),
                            _react2["default"].createElement("input", { name: "password", id: "upwd",
                                onChange: this.changePassword.bind(this),
                                type: "password", placeholder: "\u5BC6\u7801", className: "form-control",
                                value: this.state.userPassword, ref: "upwd" }),
                            _react2["default"].createElement(
                                "span",
                                { className: "help-block" },
                                this.state.upwdHelp
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "form-group" },
                            _react2["default"].createElement(
                                "label",
                                { className: "check", htmlFor: "chk" },
                                _react2["default"].createElement("input", { id: "chk", onClick: this.handleCheckbox.bind(this),
                                    type: "checkbox",
                                    checked: this.state.isRemember
                                }),
                                _react2["default"].createElement(
                                    "span",
                                    null,
                                    "\u8BB0\u4F4F\u5BC6\u7801"
                                )
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "form-group" },
                            _react2["default"].createElement(
                                "button",
                                { onClick: this.handleClickLogin.bind(this, this.state.userName, this.state.userPassword),
                                    type: "button", className: "btn btn-primary login-btn" },
                                "\u767B\u5F55"
                            )
                        )
                    )
                ),
                _react2["default"].createElement(
                    "div",
                    null,
                    _react2["default"].createElement(
                        "div",
                        null,
                        _react2["default"].createElement(
                            "div",
                            null,
                            "Todo"
                        ),
                        _react2["default"].createElement("input", { type: "text", ref: "todovalue", id: "todovalue", placeholder: "Todos\u4E0D\u80FD\u4E3A\u7A7A\u503C",
                            value: this.state.todovalue,
                            onChange: this.changeTodo.bind(this)

                        }),
                        _react2["default"].createElement(
                            "span",
                            { className: "help-block", style: { color: "red" } },
                            this.state.todovalueHelp
                        )
                    ),
                    _react2["default"].createElement(
                        "button",
                        { onClick: function onClick(e) {
                                return _this2.handleClick(e);
                            } },
                        "Add"
                    )
                )
            );
        }
        //监听input中的数据，保存到state中

    }, {
        key: "changeUsername",
        value: function changeUsername(e) {
            var uname = e.target.value;
            this.setState({
                userName: uname
            });
            console.log(this.state.userName);
        }
    }, {
        key: "changePassword",
        value: function changePassword(e) {
            var upwd = e.target.value;
            this.setState({
                userPassword: upwd
            });
        }

        //是否记住密码

    }, {
        key: "handleCheckbox",
        value: function handleCheckbox(e) {
            var isChecked = e.target.checked;
            if (isChecked) {
                this.setState({
                    isRemember: true
                });
            } else {
                this.setState({
                    isRemember: false
                });
            }
        }

        //点击登录按钮，触发后台接口提供的验证，对数据的处理等方法

    }, {
        key: "handleClickLogin",
        value: function handleClickLogin(e) {
            if (this.state.userName === "" || this.state.userName === null) {
                this.setState({
                    unameHelp: "* 用户名不能为空"
                });
            } else if (this.state.userPassword === "" || this.state.userPassword === null) {
                this.setState({
                    unameHelp: "",
                    upwdHelp: "* 密码不能为空"
                });
            } else {
                this.setState({ //清除help-block提示文字
                    unameHelp: "",
                    upwdHelp: ""
                });

                if (this.state.isRemember === true) {
                    //是否记住密码，若记住，则保存至localstorage，反之，清除
                    // let loginData = {this.state.userName,this.state.userPassword};
                    var loginData = {};
                    loginData.userName = this.state.userName;
                    loginData.userPassword = this.state.userPassword;
                }
                this.props.login(this.state.userName, this.state.userPassword);
                console.log(this.state);
            }
        }

        // getInitialState() {
        //     return {todovalue:'Hello!'};
        // }

    }, {
        key: "changeTodo",
        value: function changeTodo(e) {
            var upwd = e.target.value;
            this.setState({
                todovalue: upwd
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            if (this.state.todovalue === "" || this.state.todovalue === null) {
                this.setState({
                    todovalueHelp: "* Dodo不能为空"
                });
                return;
            }
            var node = this.refs.todovalue.value.trim();
            this.props.onAddClick(node);
            this.refs.todovalue.value = '';
        }
    }]);
    return AddTodo;
}(_react.Component);

exports["default"] = AddTodo;


AddTodo.propTypes = {
    onAddClick: _react.PropTypes.func.isRequired

};