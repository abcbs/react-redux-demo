webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(60);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(59);

	var _reactRedux = __webpack_require__(61);

	var _logger = __webpack_require__(97);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// React component
	var Counter = function (_Component) {
	  _inherits(Counter, _Component);

	  function Counter() {
	    _classCallCheck(this, Counter);

	    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	  }

	  _createClass(Counter, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var value = _props.value;
	      var onIncreaseClick = _props.onIncreaseClick;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          value
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: onIncreaseClick },
	          'Increase'
	        )
	      );
	    }
	  }]);

	  return Counter;
	}(_react.Component);

	Counter.propTypes = {
	  value: _react.PropTypes.number.isRequired,
	  onIncreaseClick: _react.PropTypes.func.isRequired
	};

	// Action
	var increaseAction = { type: 'increase' };

	// Reducer
	function counter() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };
	  var action = arguments[1];

	  var count = state.count;
	  switch (action.type) {
	    case 'increase':
	      return { count: count + 1 };
	    default:
	      return state;
	  }
	}

	// Store
	//const store = createStore(counter)
	//Typical middleware application process
	var storeWithMiddleWare = (0, _redux.applyMiddleware)(_logger.logger, _logger.loggerTwo);
	var createStoreWithMiddleWare = storeWithMiddleWare(_redux.createStore);
	var store = createStoreWithMiddleWare(counter);

	// Map Redux state to component props
	function mapStateToProps(state) {
	  return {
	    value: state.count
	  };
	}

	// Map Redux actions to component props
	function mapDispatchToProps(dispatch) {
	  return {
	    onIncreaseClick: function onIncreaseClick() {
	      return dispatch(increaseAction);
	    }
	  };
	}

	// Connected Component
	var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(App, null)
	), document.getElementById('root'));

/***/ },

/***/ 97:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var logger = exports.logger = function logger(store) {
	    return function (next) {
	        return function (action) {
	            console.group(action.type);
	            console.info('dispatching', action);
	            var result = next(action);
	            console.log('next state', store.getState());
	            console.groupEnd(action.type);
	            return result;
	        };
	    };
	};

	var loggerTwo = exports.loggerTwo = function loggerTwo(store) {
	    return function (next) {
	        return function (action) {
	            console.group(action.type);
	            console.info('dispatching (logger two)', action);
	            var result = next(action);
	            console.log('next state (logger two)', store.getState());
	            console.groupEnd(action.type);
	            return result;
	        };
	    };
	};

/***/ }

});