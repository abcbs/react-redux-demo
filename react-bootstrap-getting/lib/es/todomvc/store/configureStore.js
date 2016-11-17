'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = configureStore;

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
**/
var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2['default'], //允许我们 dispatch()函数
(0, _reduxLogger2['default'])() //一个很便捷的 middleware，用来打印action日志
)(_redux.createStore);

function configureStore(initialState) {
  var store = createStoreWithMiddleware(_reducers2['default'], initialState);

  return store;
}