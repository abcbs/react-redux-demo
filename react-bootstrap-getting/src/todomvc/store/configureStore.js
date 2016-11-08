import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
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
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,//允许我们 dispatch()函数
    createLogger()//一个很便捷的 middleware，用来打印action日志
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store
}
