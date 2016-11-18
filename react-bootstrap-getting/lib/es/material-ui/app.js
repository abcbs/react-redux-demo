'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _ToolbarExamplesSimple;

var _ToolbarExamplesSimple2 = _interopRequireDefault(_ToolbarExamplesSimple);

var _AutoCompleteExampleSimple = require('./AutoCompleteExampleSimple');

var _AutoCompleteExampleSimple2 = _interopRequireDefault(_AutoCompleteExampleSimple);

var _AvatarExampleSimple = require('./AvatarExampleSimple');

var _AvatarExampleSimple2 = _interopRequireDefault(_AvatarExampleSimple);

var _BadgeExampleSimple = require('./BadgeExampleSimple');

var _BadgeExampleSimple2 = _interopRequireDefault(_BadgeExampleSimple);

var _MainBaseTheme = require('./MainBaseTheme');

var _MainBaseTheme2 = _interopRequireDefault(_MainBaseTheme);

var _DrawerOpenRightExample = require('./DrawerOpenRightExample');

var _DrawerOpenRightExample2 = _interopRequireDefault(_DrawerOpenRightExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

(0, _reactTapEventPlugin2['default'])();

// Make taps on links and buttons work fast on mobiles
_fastclick2['default'].attach(document.body);

(0, _reactDom.render)(_react2['default'].createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _Home2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/main', component: _Main2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/toolbar', component: _ToolbarExamplesSimple2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/autocomplete', component: _AutoCompleteExampleSimple2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/avatar', component: _AvatarExampleSimple2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/badge', component: _BadgeExampleSimple2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/bainBaseTheme', component: _MainBaseTheme2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/drawer', component: _DrawerOpenRightExample2['default'] })
), document.getElementById('root'));