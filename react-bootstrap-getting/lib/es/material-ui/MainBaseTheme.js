'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MainBaseTheme = function (_React$Component) {
    (0, _inherits3['default'])(MainBaseTheme, _React$Component);

    function MainBaseTheme() {
        (0, _classCallCheck3['default'])(this, MainBaseTheme);
        return (0, _possibleConstructorReturn3['default'])(this, (MainBaseTheme.__proto__ || (0, _getPrototypeOf2['default'])(MainBaseTheme)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MainBaseTheme, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { muiTheme: (0, _getMuiTheme2['default'])(_darkBaseTheme2['default']) };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_AppBar2['default'], { title: 'My AppBar' });
        }
    }]);
    return MainBaseTheme;
}(_react2['default'].Component);

MainBaseTheme.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object.isRequired
};

exports['default'] = MainBaseTheme;