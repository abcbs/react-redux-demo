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

var CheckboxWithLabel = function (_React$Component) {
    (0, _inherits3["default"])(CheckboxWithLabel, _React$Component);

    function CheckboxWithLabel(props) {
        (0, _classCallCheck3["default"])(this, CheckboxWithLabel);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (CheckboxWithLabel.__proto__ || (0, _getPrototypeOf2["default"])(CheckboxWithLabel)).call(this, props));

        _this.state = { isChecked: false };

        // bind manually because React class components don't auto-bind
        // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    (0, _createClass3["default"])(CheckboxWithLabel, [{
        key: "onChange",
        value: function onChange() {
            this.setState({ isChecked: !this.state.isChecked });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2["default"].createElement(
                "label",
                null,
                _react2["default"].createElement("input", {
                    type: "checkbox",
                    checked: this.state.isChecked,
                    onChange: this.onChange
                }),
                this.state.isChecked ? this.props.labelOn : this.props.labelOff
            );
        }
    }]);
    return CheckboxWithLabel;
}(_react2["default"].Component); // CheckboxWithLabel.js

exports["default"] = CheckboxWithLabel;