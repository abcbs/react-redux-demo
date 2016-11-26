'use strict';

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

require('../../resource/styles/css/index.css');

require('../../resource/styles/css/common.css');

var _reactRouter = require('react-router');

var _Root = require('./containers/Root');

var _Root2 = _interopRequireDefault(_Root);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

// Make taps on links and buttons work fast on mobiles

//import { syncHistoryWithStore } from 'react-router-redux'
_fastclick2.default.attach(document.body);
var store = (0, _configureStore2.default)();
//const history = syncHistoryWithStore(browserHistory, store);
/**
let next = store.dispatch;

store.dispatch = function dispatchAndLog(action) {
    console.log('middleware-Monkeypatching-logger\ndispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};
**/
/**
function logger(store) {
    let next = store.dispatch;
    return function dispatchAndLog(action) {
        console.log('logger-dispatching', action);
        let result = next(action);
        console.log('logger-next state', store.getState());
        return result;
    }
}

function crashReporter(store) {
    let next = store.dispatch;
    return function dispatchAndReportErrors(action) {
        try {
            console.log('crashReporter-dispatching', action);
            let result = next(action);
            console.log('crashReporter-next state', store.getState());
            return result;

        } catch (err) {
            console.error('捕获一个异常!', err);
            Raven.captureException(err, {
                extra: {
                    action,
                    state: store.getState()
                }
            });
            throw err
        }
    }
}


function applyMiddlewareByMonkeypatching(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();
    //在每一个middleware中变换dispatch方法。
    middlewares.forEach(middleware =>
        store.dispatch = middleware(store)
    )
}

applyMiddlewareByMonkeypatching(store, [ logger, crashReporter ]);
**/
var logger = function logger(store) {
    return function (next) {
        return function (action) {
            console.log('dispatching', action);
            var result = next(action);
            console.log('next state', store.getState());
            return result;
        };
    };
};

var crashReporter = function crashReporter(store) {
    return function (next) {
        return function (action) {
            console.log('crashReporter-dispatching', action);
            var result = next(action);
            console.log('crashReporter-next state', store.getState());
            return result;
        };
    };
};

//警告：这只是一种“单纯”的实现方式！
//这*并不是*Redux的API.
function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    var dispatch = store.dispatch;
    middlewares.forEach(function (middleware) {
        return dispatch = middleware(store)(dispatch);
    });
    return (0, _simpleAssign2.default)({}, store, { dispatch: dispatch });
}

var storeLogger = applyMiddleware(store, [logger, crashReporter]);

(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store }), document.getElementById('root'));
/**
render(
  <Provider store={storeLogger}>
    <App />
  </Provider>,
  document.getElementById('root')
);
**/