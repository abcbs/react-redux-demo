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

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Footer = function (_Component) {
    (0, _inherits3['default'])(Footer, _Component);

    function Footer() {
        (0, _classCallCheck3['default'])(this, Footer);
        return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || (0, _getPrototypeOf2['default'])(Footer)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Footer, [{
        key: 'renderFilter',
        value: function renderFilter(filter, name) {
            if (filter === this.props.filter) {
                return name;
            }
            return (
                /**
                <a href='#' onClick={e => {
                    e.preventDefault();
                    this.props.onFilterChange(filter);
                 }}>
                    {name}
                </a>
                 **/
                _react2['default'].createElement(
                    _Link2['default'],
                    { active: filter === this.props.filter,
                        linkName: name,
                        onClick: this.props.onFilterChange.bind(this, filter)
                    },
                    name
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'p',
                null,
                'Show:',
                ' ',
                this.renderFilter('SHOW_ALL', 'All'),
                ', ',
                this.renderFilter('SHOW_COMPLETED', 'Completed'),
                ', ',
                this.renderFilter('SHOW_ACTIVE', 'Active'),
                '.'
            );
        }
    }]);
    return Footer;
}(_react.Component);

exports['default'] = Footer;


Footer.propTypes = {
    onFilterChange: _react.PropTypes.func.isRequired,
    filter: _react.PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};