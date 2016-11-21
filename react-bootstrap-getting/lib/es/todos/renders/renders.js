'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// 每当收到请求时都会触发
//app.use(handleRender);
module.exports = function (req, res) {
    // 创建新的 Redux store 实例
    var store = (0, _redux.createStore)(_reducers2['default']);

    // 把组件渲染成字符串
    var html = (0, _server.renderToString)(_react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        _react2['default'].createElement(_App2['default'], null)
    ));
    //从store中获得初始state
    var initialState = store.getState();
    // 把渲染后的页面内容发送给客户端
    res.send(renderFullPage(html, initialState));
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
function renderFullPage(html, initialState) {
    return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>ABC-Endpoint</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <title>Material-UI Example</title>\n        <meta name="description" content="ABC-End-UI Example">\n        <!-- Use minimum-scale=1 to enable GPU rasterization -->\n        <meta\n            name="viewport"\n            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"\n        >\n        <!--\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">\n    \n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">\n        -->\n        <link rel="stylesheet" href="/build/css/app.css" />\n        <!--<link rel="stylesheet" href="/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css" />-->\n        <!--[if lt IE 9]>\n          <script>\n          (function(){\n            var ef = function(){};\n            window.console = window.console || {log:ef,warn:ef,error:ef,dir:ef};\n          }());\n          </script>\n    \n          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>\n          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>\n    \n        <![endif]-->\n          <link rel="stylesheet" href="/external/home.css">\n      </head>\n      <body >\n      <div class="pos images">\n          <span class="top a1" >Hello Beijing</span>\n          <span class="top a2">Hello China</span>\n          <span class="top a3">Hello World</span>\n      </div>\n       <div id="root">' + html + '</div>\n        <script>\n        window.__INITIAL_STATE__ = ' + (0, _stringify2['default'])(initialState) + '\n        </script>\n        <div id="home">\n        </div>\n     \n      <script src="/external/requirejs/require.js"></script>\n      <script src="/external/requirejs.config.js"></script>\n      </body>\n    </html>\n\n    ';
}