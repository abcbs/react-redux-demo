'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _AbcNotFoundPage = require('../framework/ui/AbcNotFoundPage');

var _AbcNotFoundPage2 = _interopRequireDefault(_AbcNotFoundPage);

var _IntroductionPage = require('../frames/IntroductionPage');

var _IntroductionPage2 = _interopRequireDefault(_IntroductionPage);

var _HomePage = require('../frames/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _Rooter = require('./Rooter');

var _Rooter2 = _interopRequireDefault(_Rooter);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AppRaw from '../containers/AppRaw';
var Root = function Root(_ref) {
    var store = _ref.store;

    //const history = syncHistoryWithStore(browserHistory, store);
    //支持服务端渲染
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.browserHistory },
            _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/app/:filter', component: _App2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomePage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '/introduct', component: _IntroductionPage2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: '*', component: _AbcNotFoundPage2.default })
        )
    );
};

Root.propTypes = {
    store: _react.PropTypes.object.isRequired
};

exports.default = Root;