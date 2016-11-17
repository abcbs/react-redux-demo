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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

var muiTheme = (0, _getMuiTheme2['default'])({
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
    (0, _inherits3['default'])(BadgeExampleSimple, _React$Component);

    function BadgeExampleSimple() {
        (0, _classCallCheck3['default'])(this, BadgeExampleSimple);
        return (0, _possibleConstructorReturn3['default'])(this, (BadgeExampleSimple.__proto__ || (0, _getPrototypeOf2['default'])(BadgeExampleSimple)).apply(this, arguments));
    }

    (0, _createClass3['default'])(BadgeExampleSimple, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _MuiThemeProvider2['default'],
                { muiTheme: muiTheme },
                _react2['default'].createElement(
                    'div',
                    { style: styles.container },
                    _react2['default'].createElement(
                        _Badge2['default'],
                        {
                            badgeContent: 4,
                            primary: true,
                            muiTheme: muiTheme
                        },
                        _react2['default'].createElement(_notifications2['default'], null)
                    ),
                    _react2['default'].createElement(
                        _Badge2['default'],
                        {
                            badgeContent: 10,
                            secondary: true,
                            badgeStyle: { top: 12, right: 12 },
                            muiTheme: muiTheme
                        },
                        _react2['default'].createElement(
                            _IconButton2['default'],
                            { tooltip: 'Notifications' },
                            _react2['default'].createElement(_notifications2['default'], null)
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
}(_react2['default'].Component);

exports['default'] = BadgeExampleSimple;
;

BadgeExampleSimple.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object.isRequired
};