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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var STATUS = {
    NORMAL: 'normal',
    HOVERED: 'hovered'
};

var Link = function (_React$Component) {
    (0, _inherits3['default'])(Link, _React$Component);

    function Link() {
        (0, _classCallCheck3['default'])(this, Link);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Link.__proto__ || (0, _getPrototypeOf2['default'])(Link)).call(this));

        _this._onMouseEnter = _this._onMouseEnter.bind(_this);
        _this._onMouseLeave = _this._onMouseLeave.bind(_this);

        _this.state = {
            'class': STATUS.NORMAL
        };
        return _this;
    }

    (0, _createClass3['default'])(Link, [{
        key: '_onMouseEnter',
        value: function _onMouseEnter() {
            this.setState({ 'class': STATUS.HOVERED });
        }
    }, {
        key: '_onMouseLeave',
        value: function _onMouseLeave() {
            this.setState({ 'class': STATUS.NORMAL });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'a',
                {
                    className: this.state['class'],
                    href: this.props.page || '#',
                    onMouseEnter: this._onMouseEnter,
                    onMouseLeave: this._onMouseLeave },
                this.props.children
            );
        }
    }]);
    return Link;
}(_react2['default'].Component);

exports['default'] = Link;