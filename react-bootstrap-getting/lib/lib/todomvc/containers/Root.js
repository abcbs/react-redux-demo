'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
    var store = _ref.store;
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouter.Router,
            { history: _reactRouter.browserHistory },
            _react2.default.createElement(_reactRouter.Route, { path: '/(:filter)', component: _App2.default })
        )
    );
};

Root.propTypes = {
    store: _react.PropTypes.object.isRequired
};

exports.default = Root;