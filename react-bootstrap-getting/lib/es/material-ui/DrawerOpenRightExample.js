'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

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
    prepareStyles: {
        textAlign: 'center',
        paddingTop: 200
    }
});

var DrawerOpenRightExample = function (_React$Component) {
    (0, _inherits3['default'])(DrawerOpenRightExample, _React$Component);
    (0, _createClass3['default'])(DrawerOpenRightExample, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: muiTheme
            };
        }
    }]);

    function DrawerOpenRightExample(props) {
        (0, _classCallCheck3['default'])(this, DrawerOpenRightExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (DrawerOpenRightExample.__proto__ || (0, _getPrototypeOf2['default'])(DrawerOpenRightExample)).call(this, props));

        _this.handleToggle = function () {
            return _this.setState({ open: !_this.state.open });
        };

        _this.state = { open: false };
        return _this;
    }

    (0, _createClass3['default'])(DrawerOpenRightExample, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_RaisedButton2['default'], {
                    label: 'Toggle Drawer',
                    onTouchTap: this.handleToggle
                }),
                _react2['default'].createElement(
                    _Drawer2['default'],
                    { width: 200, openSecondary: true, open: this.state.open },
                    _react2['default'].createElement(_AppBar2['default'], { title: 'AppBar' })
                )
            );
        }
    }]);
    return DrawerOpenRightExample;
}(_react2['default'].Component);

exports['default'] = DrawerOpenRightExample;


DrawerOpenRightExample.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object.isRequired
};