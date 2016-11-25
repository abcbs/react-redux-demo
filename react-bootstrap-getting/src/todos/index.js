import React from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client';
import Client from './routeres/Client'
import 'bootstrap/less/theme.less'
import 'bootstrap/less/bootstrap.less';
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

//在服务端渲染中，这是客户端
//store(Redux Store): 应用程序中唯一的Redux store对象
//通过服务端注入的全局变量得到初始state
const initialState = window.__INITIAL_STATE__;
render(
    <Client data={initialState}/>,
    document.getElementById('root'));
// function initSocket() {
//     const socket = io('', {path: '/ws'});
//     socket.on('news', (data) => {
//         console.log(data);
//         socket.emit('my other event', { my: 'data from client' });
//     });
//     socket.on('msg', (data) => {
//         console.log(data);
//     });
//
//     return socket;
// }
// global.socket = initSocket();


