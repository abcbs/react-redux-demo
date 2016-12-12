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

var _abcBootstrap = require('../../abc-bootstrap');

var _logger = require('../../abc-framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TodoEvent = function (_React$Component) {
    (0, _inherits3['default'])(TodoEvent, _React$Component);

    function TodoEvent(props, context) {
        (0, _classCallCheck3['default'])(this, TodoEvent);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TodoEvent.__proto__ || (0, _getPrototypeOf2['default'])(TodoEvent)).call(this, props, context));

        _this.sendData = null;

        return _this;
    }

    (0, _createClass3['default'])(TodoEvent, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var onAddClick = _props.onAddClick;
            var onAddTodoVerfiyClick = _props.onAddTodoVerfiyClick;
            var onAddBtnName = _props.onAddBtnName;
            var enentEmitter = _props.enentEmitter;

            return _react2['default'].createElement(
                _abcBootstrap.ButtonToolbar,
                { style: { position: 'relative', float: 'left', left: '10px' } },
                _react2['default'].createElement(
                    _abcBootstrap.Button,
                    { type: 'button', bsStyle: 'success',
                        onClick: this.handleClick.bind(this) },
                    onAddBtnName
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
}(_react2['default'].Component);

exports['default'] = TodoEvent;


TodoEvent.propTypes = {
    onAddClick: _react.PropTypes.func,
    onAddBtnName: _react.PropTypes.string.isRequired,
    enentEmitter: _react.PropTypes.object.isRequired
};

// export default TodoEvent