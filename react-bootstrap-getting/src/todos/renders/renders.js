import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//第一件要做的事情就是对每个请求创建一个新的Redux store实例。这个store惟一作用是提供应用初始的state。
//渲染时，使用<Provider>来包住根组件<App />，以此来让组件树中所有组件都能访问到store.
//服务端渲染最关键的一步是在发送响应前渲染初始的HTML。这就要使用React.renderToString().
//然后使用store.getState()从store得到初始state。renderFullPage函数会介绍接下来如何传递。
import { renderToString } from 'react-dom/server'
import reducer from '../reducers';
import App from '../containers/App';


// 每当收到请求时都会触发
//app.use(handleRender);
module.exports  =function(req, res) {
    // 创建新的 Redux store 实例
    const store = createStore(reducer);

    // 把组件渲染成字符串
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    //从store中获得初始state
    const initialState = store.getState();
    // 把渲染后的页面内容发送给客户端
    res.send(renderFullPage(html, initialState));
}
/**
<div id="root">${html}</div>
<script>
window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
</script>
**/
function renderFullPage(html, initialState) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>ABC-Endpoint</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Material-UI Example</title>
        <meta name="description" content="ABC-End-UI Example">
        <!-- Use minimum-scale=1 to enable GPU rasterization -->
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        >
        <!--
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
        -->
        <link rel="stylesheet" href="/build/css/app.css" />
        <!--<link rel="stylesheet" href="/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css" />-->
        <!--[if lt IE 9]>
          <script>
          (function(){
            var ef = function(){};
            window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};
          }());
          </script>
    
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
    
        <![endif]-->
          <link rel="stylesheet" href="/external/home.css">
      </head>
      <body >
      <div class="pos images">
          <span class="top a1" >Hello Beijing</span>
          <span class="top a2">Hello China</span>
          <span class="top a3">Hello World</span>
      </div>
       <div id="root">${html}</div>
        <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <div id="home">
        </div>
     
      <script src="/external/requirejs/require.js"></script>
      <script src="/external/requirejs.config.js"></script>
      </body>
    </html>

    `
}

