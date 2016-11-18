'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _rootes = require('./routeres/rootes');

var _rootes2 = _interopRequireDefault(_rootes);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

//import '../../external/bootstrap-3.3.7/dist/css/bootstrap-theme.css'
//import '../../external/bootstrap-3.3.7/dist/css/bootstrap.css'

// import App from './containers/App'
(0, _reactTapEventPlugin2['default'])();
// Make taps on links and buttons work fast on mobiles
_fastclick2['default'].attach(document.body);
//在服务端渲染中，这是客户端
//store(Redux Store): 应用程序中唯一的Redux store对象
//通过服务端注入的全局变量得到初始state
var initialState = window.__INITIAL_STATE_;
var store = void 0;
if (initialState) {
    store = (0, _redux.createStore)(_reducers2['default'], initialState);
} else {
    store = (0, _redux.createStore)(_reducers2['default']);
}
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

(0, _reactDom.render)(_react2['default'].createElement(_rootes2['default'], { store: store }), document.getElementById('root'));
/**
render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
 **/