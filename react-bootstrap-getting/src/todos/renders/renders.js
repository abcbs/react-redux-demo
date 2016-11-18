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

function renderFullPage(html, initialState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="dist/reactvendor.js"></script>
        <script src="dist/bootvendor.js"></script>
        <script src="/build/app.js"></script>
      </body>
    </html>
    `
}

