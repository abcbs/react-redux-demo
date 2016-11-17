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

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _BottomNavigation = require('material-ui/BottomNavigation');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _locationOn = require('material-ui/svg-icons/communication/location-on');

var _locationOn2 = _interopRequireDefault(_locationOn);

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

var recentsIcon = _react2['default'].createElement(
    _FontIcon2['default'],
    { className: 'material-icons' },
    'restore'
);
var favoritesIcon = _react2['default'].createElement(
    _FontIcon2['default'],
    { className: 'material-icons' },
    'favorite'
);
var nearbyIcon = _react2['default'].createElement(_locationOn2['default'], null);

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */

var BottomNavigationExampleSimple = function (_Component) {
    (0, _inherits3['default'])(BottomNavigationExampleSimple, _Component);

    function BottomNavigationExampleSimple() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3['default'])(this, BottomNavigationExampleSimple);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = BottomNavigationExampleSimple.__proto__ || (0, _getPrototypeOf2['default'])(BottomNavigationExampleSimple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedIndex: 0
        }, _this.select = function (index) {
            return _this.setState({ selectedIndex: index });
        }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
    }

    (0, _createClass3['default'])(BottomNavigationExampleSimple, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: muiTheme
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(
                _Paper2['default'],
                { zDepth: 1 },
                _react2['default'].createElement(
                    _BottomNavigation.BottomNavigation,
                    { selectedIndex: this.state.selectedIndex },
                    _react2['default'].createElement(_BottomNavigation.BottomNavigationItem, {
                        label: 'Recents',
                        icon: recentsIcon,
                        onTouchTap: function onTouchTap() {
                            return _this2.select(0);
                        }
                    }),
                    _react2['default'].createElement(_BottomNavigation.BottomNavigationItem, {
                        label: 'Favorites',
                        icon: favoritesIcon,
                        onTouchTap: function onTouchTap() {
                            return _this2.select(1);
                        }
                    }),
                    _react2['default'].createElement(_BottomNavigation.BottomNavigationItem, {
                        label: 'Nearby',
                        icon: nearbyIcon,
                        onTouchTap: function onTouchTap() {
                            return _this2.select(2);
                        }
                    })
                )
            );
        }
    }]);
    return BottomNavigationExampleSimple;
}(_react.Component);

exports['default'] = BottomNavigationExampleSimple;


BottomNavigationExampleSimple.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object.isRequired
};