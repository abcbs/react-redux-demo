'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS = {
    NORMAL: 'normal',
    HOVERED: 'hovered'
};

var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
        _classCallCheck(this, Link);

        var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this));

        _this._onMouseEnter = _this._onMouseEnter.bind(_this);
        _this._onMouseLeave = _this._onMouseLeave.bind(_this);

        _this.state = {
            class: STATUS.NORMAL
        };
        return _this;
    }

    _createClass(Link, [{
        key: '_onMouseEnter',
        value: function _onMouseEnter() {
            this.setState({ class: STATUS.HOVERED });
        }
    }, {
        key: '_onMouseLeave',
        value: function _onMouseLeave() {
            this.setState({ class: STATUS.NORMAL });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                {
                    className: this.state.class,
                    href: this.props.page || '#',
                    onMouseEnter: this._onMouseEnter,
                    onMouseLeave: this._onMouseLeave },
                this.props.children
            );
        }
    }]);

    return Link;
}(_react2.default.Component);

exports.default = Link;