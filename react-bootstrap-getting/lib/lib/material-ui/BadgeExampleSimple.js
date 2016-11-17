'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('material-ui/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _notifications = require('material-ui/svg-icons/social/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _colors = require('material-ui/styles/colors');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

var muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        accent1Color: _colors.deepOrange500

    },
    badge: { //primaryColor
        primaryColor: _colors.red50,
        primaryTextColor: _colors.deepOrange500,
        color: _colors.deepOrange500,
        textColor: _colors.red50
    }
});

//const BadgeExampleSimple = (muiTheme,styles) => (

var BadgeExampleSimple = function (_React$Component) {
    _inherits(BadgeExampleSimple, _React$Component);

    function BadgeExampleSimple() {
        _classCallCheck(this, BadgeExampleSimple);

        return _possibleConstructorReturn(this, (BadgeExampleSimple.__proto__ || Object.getPrototypeOf(BadgeExampleSimple)).apply(this, arguments));
    }

    _createClass(BadgeExampleSimple, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: muiTheme },
                _react2.default.createElement(
                    'div',
                    { style: styles.container },
                    _react2.default.createElement(
                        _Badge2.default,
                        {
                            badgeContent: 4,
                            primary: true,
                            muiTheme: muiTheme
                        },
                        _react2.default.createElement(_notifications2.default, null)
                    ),
                    _react2.default.createElement(
                        _Badge2.default,
                        {
                            badgeContent: 10,
                            secondary: true,
                            badgeStyle: { top: 12, right: 12 },
                            muiTheme: muiTheme
                        },
                        _react2.default.createElement(
                            _IconButton2.default,
                            { tooltip: 'Notifications' },
                            _react2.default.createElement(_notifications2.default, null)
                        )
                    )
                )
            );
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: muiTheme
            };
        }
    }]);

    return BadgeExampleSimple;
}(_react2.default.Component);

exports.default = BadgeExampleSimple;
;

BadgeExampleSimple.childContextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};