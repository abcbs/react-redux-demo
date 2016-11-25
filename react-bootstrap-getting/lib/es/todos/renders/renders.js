'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _ApiClient = require('../framework/utils/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _configureStore = require('../store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _prettyError = require('pretty-error');

var _prettyError2 = _interopRequireDefault(_prettyError);

var _reactRouterRedux = require('react-router-redux');

var _createMemoryHistory = require('react-router/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _Routes = require('../routeres/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _Html = require('../static/Html');

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// 每当收到请求时都会触发

//异步装载
// import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
//路由历史在内存中的存储，主要用于服务端

//create an express middleware to render your pages on the server
//html page markup

//客户端请求封装
module.exports = function (req, res) {
    // if (__DEVELOPMENT__) {
    //     // Do not cache webpack stats: the script file would change since
    //     // hot module replacement is enabled in the development env
    //     webpackIsomorphicTools.refresh();
    // }
    //请求解析
    var client = new _ApiClient2['default'](req);
    //请求历史存储
    var memoryHistory = (0, _createMemoryHistory2['default'])(req.originalUrl);
    //得到初始 state
    var data = { present: [{ text: "testest" + new Date(), completed: false }, { text: "testest", completed: false }] };
    var intinal = {
        visibilityFilter: "SHOW_ALL",
        todos: data
    };
    //初始化Redux
    var store = (0, _configureStore2['default'])(memoryHistory, client, intinal);
    // Create an enhanced history that syncs navigation events with the store
    var history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
    // for react-router example of determining current page by URL take a look at this:
    // https://github.com/halt-hammerzeit/webapp/blob/master/code/server/webpage%20rendering.js
    function hydrateOnClient() {
        res.send('<!doctype html>\n' + _server2['default'].renderToString(_react2['default'].createElement(_Html2['default'], { assets: webpackIsomorphicTools.assets(), store: store })));
    }

    // if (__DISABLE_SSR__) {
    //     hydrateOnClient();
    //     return;
    // }
    (0, _reactRouter.match)({ history: history, routes: _Routes2['default'], store: store, location: req.url }, function (err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).end('Internal Server Error ' + err);
        } else if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var component = _react2['default'].createElement(
                _reactRedux.Provider,
                { store: store },
                _react2['default'].createElement(_reactRouter.RouterContext, renderProps)
            );
            var html = (0, _server.renderToString)(component);
            res.send('<!doctype html>\n' + _server2['default'].renderToString(_react2['default'].createElement(_Html2['default'], { component: component, store: store })));
            //res.end(renderFullPage(html, store.getState()));
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
};
/**
<div id="root">${html}</div>
<script>
window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
</script>
**/

//第一件要做的事情就是对每个请求创建一个新的Redux store实例。这个store惟一作用是提供应用初始的state。
//渲染时，使用<Provider>来包住根组件<App />，以此来让组件树中所有组件都能访问到store.
//服务端渲染最关键的一步是在发送响应前渲染初始的HTML。这就要使用React.renderToString().
//然后使用store.getState()从store得到初始state。renderFullPage函数会介绍接下来如何传递。


//路由的状态管理
function renderFullPage(html, initialState) {
    return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>ABC-Endpoint</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <title>Material-UI Example</title>\n        <meta name="description" content="ABC-End-UI Example">\n        <!-- Use minimum-scale=1 to enable GPU rasterization -->\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"\n        >\n        <!--\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">\n    \n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">\n        -->\n        <link rel="stylesheet" href="/build/css/app.css" />\n        <!--<link rel="stylesheet" href="/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css" />-->\n        <!--[if lt IE 9]>\n          <script>\n          (function(){\n            var ef = function(){};\n            window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};\n          }());\n          </script>\n    \n          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>\n          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>\n    \n        <![endif]-->\n          <link rel="stylesheet" href="/external/home.css">\n      </head>\n      <body >\n      <div class="pos images">\n          <span class="top a1" >Hello Beijing</span>\n          <span class="top a2">Hello China</span>\n          <span class="top a3">Hello World</span>\n      </div>\n       <div id="root">' + html + '</div>\n        <script>\n        window.__INITIAL_STATE__ = ' + (0, _stringify2['default'])(initialState) + '\n        </script>\n        <div id="home">\n        </div>\n     \n      <script src="/external/requirejs/require.js"></script>\n      <script src="/external/requirejs.config.js"></script>\n      </body>\n    </html>\n\n    ';
}