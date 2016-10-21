webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactRedux = __webpack_require__(34);

	var _containersApp = __webpack_require__(98);

	var _containersApp2 = _interopRequireDefault(_containersApp);

	var _storeConfigureStore = __webpack_require__(101);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	var store = (0, _storeConfigureStore2['default'])();

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_containersApp2['default'], null)
	), document.getElementById('root'));

/***/ },

/***/ 60:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.increment = increment;
	exports.decrement = decrement;
	exports.incrementIfOdd = incrementIfOdd;
	exports.incrementAsync = incrementAsync;
	var INCREMENT_COUNTER = 'INCREMENT_COUNTER';
	exports.INCREMENT_COUNTER = INCREMENT_COUNTER;
	var DECREMENT_COUNTER = 'DECREMENT_COUNTER';
	exports.DECREMENT_COUNTER = DECREMENT_COUNTER;
	//导出加一的方法

	function increment() {
	  return {
	    type: INCREMENT_COUNTER
	  };
	}

	//导出减一的方法

	function decrement() {
	  return {
	    type: DECREMENT_COUNTER
	  };
	}

	//导出奇数加一的方法，该方法返回一个方法，
	// 包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state

	function incrementIfOdd() {
	  return function (dispatch, getState) {
	    //获取state对象中的counter属性值

	    var _getState = getState();

	    var counter = _getState.counter;

	    //偶数则返回
	    if (counter % 2 === 0) {
	      return;
	    }
	    //没有返回就执行加一
	    dispatch(increment());
	  };
	}

	//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一

	function incrementAsync() {
	  var delay = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];

	  return function (dispatch) {
	    setTimeout(function () {
	      dispatch(increment());
	    }, delay);
	  };
	}

	//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(16);

	var _react2 = _interopRequireDefault(_react);

	var Counter = (function (_Component) {
	  _inherits(Counter, _Component);

	  function Counter() {
	    _classCallCheck(this, Counter);

	    _get(Object.getPrototypeOf(Counter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  //限制组件的props安全

	  _createClass(Counter, [{
	    key: 'render',
	    value: function render() {
	      //从组件的props属性中导入四个方法和一个变量
	      var _props = this.props;
	      var increment = _props.increment;
	      var incrementIfOdd = _props.incrementIfOdd;
	      var incrementAsync = _props.incrementAsync;
	      var decrement = _props.decrement;
	      var counter = _props.counter;

	      //渲染组件，包括一个数字，四个按钮
	      return _react2['default'].createElement(
	        'p',
	        null,
	        'Clicked: ',
	        counter,
	        ' times',
	        ' ',
	        _react2['default'].createElement(
	          'button',
	          { onClick: increment },
	          '+'
	        ),
	        ' ',
	        _react2['default'].createElement(
	          'button',
	          { onClick: decrement },
	          '-'
	        ),
	        ' ',
	        _react2['default'].createElement(
	          'button',
	          { onClick: incrementIfOdd },
	          'Increment if odd'
	        ),
	        ' ',
	        _react2['default'].createElement(
	          'button',
	          { onClick: function () {
	              return incrementAsync();
	            } },
	          'Increment async'
	        )
	      );
	    }
	  }]);

	  return Counter;
	})(_react.Component);

	Counter.propTypes = {
	  //increment必须为fucntion,且必须存在
	  increment: _react.PropTypes.func.isRequired,
	  incrementIfOdd: _react.PropTypes.func.isRequired,
	  incrementAsync: _react.PropTypes.func.isRequired,
	  decrement: _react.PropTypes.func.isRequired,
	  //counter必须为数字，且必须存在
	  counter: _react.PropTypes.number.isRequired
	};

	exports['default'] = Counter;
	module.exports = exports['default'];

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(26);

	var _reactRedux = __webpack_require__(34);

	var _componentsCounter = __webpack_require__(97);

	var _componentsCounter2 = _interopRequireDefault(_componentsCounter);

	var _actionsCounter = __webpack_require__(60);

	var CounterActions = _interopRequireWildcard(_actionsCounter);

	//将state.counter绑定到props的counter
	function mapStateToProps(state) {
	  return {
	    counter: state.counter
	  };
	}
	//将action的所有方法绑定到props上
	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(CounterActions, dispatch);
	}

	//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsCounter2['default']);
	module.exports = exports['default'];

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = counter;

	var _actionsCounter = __webpack_require__(60);

	//reducer其实也是个方法而已,参数是state和action,返回值是新的state

	function counter(state, action) {
	  if (state === undefined) state = 0;

	  switch (action.type) {
	    case _actionsCounter.INCREMENT_COUNTER:
	      return state + 1;
	    case _actionsCounter.DECREMENT_COUNTER:
	      return state - 1;
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(26);

	var _counter = __webpack_require__(99);

	var _counter2 = _interopRequireDefault(_counter);

	//使用redux的combineReducers方法将所有reducer打包起来
	var rootReducer = (0, _redux.combineReducers)({
	  counter: _counter2['default']
	});

	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(26);

	var _reduxThunk = __webpack_require__(92);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(100);

	var _reducers2 = _interopRequireDefault(_reducers);

	//applyMiddleware来自redux可以包装 store 的 dispatch
	//thunk作用是使action创建函数可以返回一个function代替一个action对象
	var createStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	    return f;
	})(_redux.createStore);

	function configureStore(initialState) {
	    var store = createStoreWithMiddleware(_reducers2['default'], initialState);
	    return store;
	}

	module.exports = exports['default'];

/***/ }

});