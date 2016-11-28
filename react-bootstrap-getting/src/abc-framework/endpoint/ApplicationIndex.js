import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client';
// import 'bootstrap/less/theme.less'
// import 'bootstrap/less/bootstrap.less';
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';



// import language  from '../international/language'
import international from '../international/loader';
// import Client from './Client';
import assets from './assets'

for (let asset of Object.keys(assets))
{
    assets[asset]()
}

injectTapEventPlugin();
// Make taps on links and buttons work fast on mobiles
FastClick.attach(document.body);

//在服务端渲染中，这是客户端
//store(Redux Store): 应用程序中唯一的Redux store对象
//通过服务端注入的全局变量得到初始state
const initialState = window.__INITIAL_STATE__;
const dest=document.getElementById('root');

// load the Intl polyfill and its locale data before rendering the application
international.load().then(() =>
{

    // const create_routes = require('./routes')
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
    const Client= require ('./Client').default;
        international.load_translation('zh').then(data=>{
             // renders the webpage on the client side
            render
            (
                <Client data={initialState} messages={data}/>,
                document.getElementById('root'),

            )
    }).then(({ component, store, rerender }) =>
        {

            international.hot_reload(rerender)
      })
})

// render(
//     <Client data={initialState}/>,
//     document.getElementById('root'));




