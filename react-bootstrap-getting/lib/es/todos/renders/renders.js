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

//第一件要做的事情就是对每个请求创建一个新的Redux store实例。这个store惟一作用是提供应用初始的state。
//渲染时，使用<Provider>来包住根组件<App />，以此来让组件树中所有组件都能访问到store.
//服务端渲染最关键的一步是在发送响应前渲染初始的HTML。这就要使用React.renderToString().
//然后使用store.getState()从store得到初始state。renderFullPage函数会介绍接下来如何传递。


function renderFullPage(html, initialState) {
    return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Redux Universal Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + (0, _stringify2['default'])(initialState) + '\n        </script>\n        <script src="dist/reactvendor.js"></script>\n        <script src="dist/bootvendor.js"></script>\n        <script src="/build/app.js"></script>\n      </body>\n    </html>\n    ';
}