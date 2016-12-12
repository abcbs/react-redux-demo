'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _abcBootstrap = require('../../abc-bootstrap');

var _Link = require('../components/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _abcBootstrap.Navbar,
                { className: 'container',
                    style: { background: 'white', border: "none", boxShadow: "none" } },
                this.renderLiners()
            );
        }
    }, {
        key: 'renderFilter',
        value: function renderFilter(filter, name) {
            if (filter === this.props.filter) {
                return name;
            }
            return _react2.default.createElement(
                _Link2.default,
                { active: filter === this.props.filter,
                    linkName: name,
                    onClick: this.props.onFilterChange.bind(this, filter)
                },
                name
            );
        }
    }, {
        key: 'renderLiners',
        value: function renderLiners() {
            return _react2.default.createElement(
                'span',
                null,
                'Show:',
                ' ',
                this.renderFilter('SHOW_ALL', 'All'),
                ', ',
                this.renderFilter('SHOW_COMPLETED', 'Completed'),
                ', ',
                this.renderFilter('SHOW_ACTIVE', 'Active')
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;


Footer.propTypes = {
    onFilterChange: _react.PropTypes.func.isRequired,
    filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};