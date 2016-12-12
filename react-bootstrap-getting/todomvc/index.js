import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import '../../resource/styles/css/index.css'
import '../../resource/styles/css/common.css'
import { browserHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);
const store = configureStore();
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
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result
};

const crashReporter = store => next => action => {
    console.log('crashReporter-dispatching', action);
    let result = next(action);
    console.log('crashReporter-next state', store.getState());
    return result
};

//警告：这只是一种“单纯”的实现方式！
//这*并不是*Redux的API.
function applyMiddleware(store, middlewares) {
    middlewares = middlewares.slice();
    middlewares.reverse();

    let dispatch = store.dispatch;
    middlewares.forEach(middleware =>
        dispatch = middleware(store)(dispatch)
    );
    return Object.assign({}, store, { dispatch })
}

let storeLogger=applyMiddleware(store, [ logger, crashReporter ]);


render(
    <Root store={store}  />,
    document.getElementById('root')
);
/**
render(
  <Provider store={storeLogger}>
    <App />
  </Provider>,
  document.getElementById('root')
);
**/
