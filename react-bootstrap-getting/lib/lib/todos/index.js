'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _Client = require('./routeres/Client');

var _Client2 = _interopRequireDefault(_Client);

require('bootstrap/less/theme.less');

require('bootstrap/less/bootstrap.less');

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();
// Make taps on links and buttons work fast on mobiles
_fastclick2.default.attach(document.body);

//在服务端渲染中，这是客户端
//store(Redux Store): 应用程序中唯一的Redux store对象
//通过服务端注入的全局变量得到初始state
var initialState = window.__INITIAL_STATE__;
(0, _reactDom.render)(_react2.default.createElement(_Client2.default, { data: initialState }), document.getElementById('root'));
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