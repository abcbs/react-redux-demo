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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Root = function Root(_ref) {
    var store = _ref.store;
    return _react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        _react2['default'].createElement(
            _reactRouter.Router,
            { history: _reactRouter.browserHistory, path: '/', component: _HomePage2['default']
            },
            _react2['default'].createElement(_reactRouter.IndexRoute, { component: _App2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: '/', component: _App2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: '/:filter', component: _App2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: '/home/pages', component: _HomePage2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: '/introduction/pages', component: _IntroductionPage2['default'] }),
            _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _AbcNotFoundPage2['default'] })
        )
    );
};
// import AppRaw from '../containers/AppRaw';


Root.propTypes = {
    store: _react.PropTypes.object.isRequired
};

exports['default'] = Root;