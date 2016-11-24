import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {match, RouterContext ,browserHistory} from 'react-router';
//第一件要做的事情就是对每个请求创建一个新的Redux store实例。这个store惟一作用是提供应用初始的state。
//渲染时，使用<Provider>来包住根组件<App />，以此来让组件树中所有组件都能访问到store.
//服务端渲染最关键的一步是在发送响应前渲染初始的HTML。这就要使用React.renderToString().
//然后使用store.getState()从store得到初始state。renderFullPage函数会介绍接下来如何传递。
import { renderToString } from 'react-dom/server'
import reducer from '../reducers';
import App from '../containers/App';
import routes from '../routeres/Routes'

// 每当收到请求时都会触发
module.exports  =function(req, res) {
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
        if (err) {
            res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            //得到初始 state
            // const intinal={state:{text: "one"},action:{text: "testest", type: "ADD_TODO"}}
            //创建新的 Redux store 实例
            //得到初始 state
            var data={present:[{text:"testest"+(new Date),completed:false},
                                {text:"testest",completed:false}]};
            var intinal=
            {
                visibilityFilter: "SHOW_ALL",
                todos:data};
            const store = createStore(reducer,intinal);
            const state = store.getState();
            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps}/>
                </Provider>
            );
            res.end(renderFullPage(html, store.getState()));
            // Promise.all([
            //     store.dispatch(fetchList()),
            //     store.dispatch(fetchItem(renderProps.params.id))
            // ])
            //     .then(() => {
            //         const html = renderToString(
            //             <Provider store={store}>
            //                 <RoutingContext {...renderProps} />
            //             </Provider>
            //         );
            //         res.end(renderFullPage(html, store.getState()));
            //     });
        } else {
            res.status(404).end('Not found');
        }
    });

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

