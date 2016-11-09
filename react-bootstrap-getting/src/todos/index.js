import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import Rooter from './routeres/rootes'
//import '../../external/bootstrap-3.3.7/dist/css/bootstrap-theme.css'
//import '../../external/bootstrap-3.3.7/dist/css/bootstrap.css'
import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

//store(Redux Store): 应用程序中唯一的Redux store对象
//通过服务端注入的全局变量得到初始state
const initialState = window.__INITIAL_STATE_||[];
const store = createStore(reducer,initialState);
//<Provider store>使组件层级中的connect()方法都能够获得Redux store。
// 正常情况下，你的根组件应该嵌套在<Provider>中才能使用connect()方法。
/**
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
 **/


render(
    <Rooter store={store}/>,
    document.getElementById('root'));
/**
render(
    <App />,
    document.getElementById('root'));
 **/