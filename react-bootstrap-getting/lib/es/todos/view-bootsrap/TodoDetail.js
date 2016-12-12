'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _abcBootstrap = require('../../abc-bootstrap');

var _TodoEvent = require('../view-bootsrap/TodoEvent');

var _TodoEvent2 = _interopRequireDefault(_TodoEvent);

var _AbcContainer = require('../../abc-framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _logger = require('../../abc-framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TodoDetail = function (_Component) {
    (0, _inherits3['default'])(TodoDetail, _Component);

    function TodoDetail(props, context) {
        (0, _classCallCheck3['default'])(this, TodoDetail);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TodoDetail.__proto__ || (0, _getPrototypeOf2['default'])(TodoDetail)).call(this, props, context));

        _this.state = {
            todovalue: ""
        };
        _this.verify;
        return _this;
    }

    (0, _createClass3['default'])(TodoDetail, [{
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
            (0, _logger2['default'])("render,props,", this.props);
            (0, _logger2['default'])("render,state,", this.state);

            var _props = this.props;
            var formName = _props.formName;
            var btnName = _props.btnName;
            var onAddClick = _props.onAddClick;
            var enentEmitter = _props.enentEmitter;
            var other = (0, _objectWithoutProperties3['default'])(_props, ['formName', 'btnName', 'onAddClick', 'enentEmitter']);

            var valid = this.state.todovalueHelp;

            return _react2['default'].createElement(
                _abcBootstrap.FormGroup,
                {
                    controlId: 'formBasicText',
                    validationState: this.getValidationState()
                },
                _react2['default'].createElement(_abcBootstrap.FormControl, {
                    type: 'text',
                    value: this.state.todovalue,
                    placeholder: 'Enter text',
                    onChange: this.handleChange.bind(this),
                    onKeyDown: this.handleSubmit.bind(this)
                }),
                _react2['default'].createElement(_abcBootstrap.FormControl.Feedback, null),
                _react2['default'].createElement(
                    _abcBootstrap.HelpBlock,
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        this.state.todovalueHelp || this.verify
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

exports['default'] = TodoDetail;


TodoDetail.propTypes = {
    onAddClick: _react.PropTypes.func,
    onEditClick: _react.PropTypes.func,
    formName: _react.PropTypes.string,
    btnName: _react.PropTypes.string,
    enentEmitter: _react.PropTypes.object.isRequired
    // onAddTodoVerfiyClick: PropTypes.func,
    // verfiedResult:PropTypes.object

};