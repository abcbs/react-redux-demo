import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
//store(Redux Store): 应用程序中唯一的Redux store对象
const store = createStore(reducer);
//<Provider store>使组件层级中的connect()方法都能够获得Redux store。
// 正常情况下，你的根组件应该嵌套在<Provider>中才能使用connect()方法。
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
