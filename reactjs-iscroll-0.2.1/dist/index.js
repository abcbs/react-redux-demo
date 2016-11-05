(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames3 = __webpack_require__(4);

	var _classnames4 = _interopRequireDefault(_classnames3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import '../sass/iscroll.scss';

	/**!
	 * iScroll React Component
	 * iScroll: http://iscrolljs.com/
	 * reactjs-iscroll: https://github.com/reactjs-ui/reactjs-iscroll
	 *
	 */

	/**
	 * iScroll event name
	 beforeScrollStart, executed as soon as user touches the screen but before the scrolling has initiated.
	 scrollCancel, scroll initiated but didn't happen.
	 scrollStart, the scroll started.
	 scroll, the content is scrolling. Available only in scroll-probe.js edition. See onScroll event.
	 scrollEnd, content stopped scrolling.
	 flick, user flicked left/right.
	 zoomStart, user started zooming.
	 zoomEnd, zoom ended.
	 * @type {*[]}
	 */
	var iScrollEvents = ['beforeScrollStart', 'scrollCancel', 'scrollStart', 'scroll', 'scrollEnd', 'flick', 'zoomStart', 'zoomEnd'];

	var ReactIScroll = function (_Component) {
	  _inherits(ReactIScroll, _Component);

	  function ReactIScroll(props) {
	    _classCallCheck(this, ReactIScroll);

	    var _this = _possibleConstructorReturn(this, (ReactIScroll.__proto__ || Object.getPrototypeOf(ReactIScroll)).call(this, props));

	    _this.state = {
	      isScrolling: false, //是否正在滚动
	      pullDownState: 0, //下拉状态，0 表示下拉，1表示松开，2表示加载数据中
	      pullUpState: 0, //上拉状态，0 表示上拉，1表示松开，2表示加载数据中
	      pullDownCls: 'scrolled-up',
	      pullUpCls: '',
	      pullDownStyle: null,
	      pullUpStyle: null
	    };

	    // 中间辅助值
	    _this.scrollStartPos = 0; // 开始位置
	    _this.pullDownOffset = 0; // 向下刷新框偏移量
	    _this.lock = false; // 当加载数据时，锁住
	    return _this;
	  }

	  _createClass(ReactIScroll, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var pullDownEl = this.refs.pullDown;
	      this.pullDownOffset = pullDownEl.offsetHeight;
	      this.initIscroll();
	      this.bindIScrollEvents();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.destoryIScroll();
	    }
	  }, {
	    key: 'initIscroll',
	    value: function initIscroll() {
	      // Create new iscroll instance here
	      var _props = this.props,
	          iScroll = _props.iScroll,
	          options = _props.options;

	      var iScrollInstance = new iScroll(_reactDom2.default.findDOMNode(this), options);
	      this.iScrollInstance = iScrollInstance;
	    }
	  }, {
	    key: 'destoryIScroll',
	    value: function destoryIScroll() {
	      if (this.iScrollInstance) {
	        this.iScrollInstance.destroy();
	        this.iScrollInstance = null;
	      }
	    }
	  }, {
	    key: 'getIScroll',
	    value: function getIScroll() {
	      return this.iScrollInstance;
	    }
	  }, {
	    key: 'bindIScrollEvents',
	    value: function bindIScrollEvents() {
	      var _this2 = this;

	      var iScrollInstance = this.getIScroll();
	      var len = iScrollEvents.length;

	      var _loop = function _loop(i) {
	        var item = iScrollEvents[i];
	        var event = _this2.props[item] ? _this2.props[item] : _this2[item];
	        if (event) {
	          event = event.bind(_this2);
	          iScrollInstance.on(item, function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = arguments[_key];
	            }

	            event.apply(undefined, [iScrollInstance].concat(args));
	          });
	        }
	      };

	      for (var i = 0; i < len; i++) {
	        _loop(i);
	      }

	      // 执行，恢复到默认状态
	      this.refresh(iScrollInstance);

	      //注册刷新事件
	      var origRefresh = iScrollInstance.refresh;
	      iScrollInstance.refresh = function () {
	        origRefresh.apply(iScrollInstance);
	        _this2.refresh(iScrollInstance);
	      };
	    }

	    // IScroll events start
	    /**
	     * 开始滚动时事件
	     * @param iScroll
	     */

	  }, {
	    key: 'scrollStart',
	    value: function scrollStart(iScroll) {
	      if (this.lock) {
	        return;
	      }
	      this.setState({
	        isScrolling: true
	      });
	      this.scrollStartPos = iScroll.y;
	    }

	    /**
	     * 滚动过程中事件
	     * @param iScroll
	     */

	  }, {
	    key: 'scroll',
	    value: function scroll(iScroll) {
	      var _this3 = this;

	      if (this.lock) {
	        return;
	      }
	      var y = iScroll.y;
	      var _props2 = this.props,
	          pullDown = _props2.pullDown,
	          pullUp = _props2.pullUp,
	          pullDownThreshold = _props2.pullDownThreshold,
	          pullUpThreshold = _props2.pullUpThreshold;
	      //如果没设置下拉刷新或向上加载更多时，则直接返回

	      if (!pullDown && !pullUp) {
	        return;
	      }

	      var _state = this.state,
	          pullDownCls = _state.pullDownCls,
	          pullUpCls = _state.pullUpCls;


	      if (this.scrollStartPos === 0 && y === 0) {
	        // 解决当内容太少时，drag 或 scroll 不起作用，我们通过重新设置 hasVerticalScroll 为 true 来激活拖拽或滚动
	        iScroll.hasVerticalScroll = true;
	        // 设置为 -1000 稍后重新检测
	        this.scrollStartPos = -1000;
	      }

	      // 向下滑
	      if (pullDown) {
	        //如果向下滑动超过一定的范围则改变样式，默认范围为加载条高度+5px
	        if (y > this.pullDownOffset + pullDownThreshold && pullDownCls !== 'iscroll-flip') {
	          this.setState({
	            pullDownStyle: {
	              transitionDuration: '',
	              marginTop: ''
	            },
	            pullDownCls: 'iscroll-flip',
	            pullDownState: 1
	          }, function () {
	            // Adjust scrolling position to match the change in pullDownEl's margin-top
	            iScroll.scrollBy(0, -_this3.pullDownOffset, 0);
	          });
	        } else if (y < 0 && pullDownCls === 'iscroll-flip') {
	          //重新向上滑动时恢复默认样子
	          this.setState({
	            pullDownStyle: {
	              transitionDuration: '',
	              marginTop: ''
	            },
	            pullDownCls: 'scrolled-up',
	            pullDownState: 0
	          }, function () {
	            // Adjust scrolling position to match the change in pullDownEl's margin-top
	            iScroll.scrollBy(0, _this3.pullDownOffset, 0);
	          });
	        }
	      }

	      // 向上滑
	      if (pullUp) {
	        if (y < iScroll.maxScrollY - pullUpThreshold && pullUpCls !== 'iscroll-flip') {
	          this.setState({
	            pullUpCls: 'iscroll-flip',
	            pullUpState: 1
	          }, function () {
	            iScroll.hasVerticalScroll = true;
	            iScroll.scrollBy(0, 0, 0);
	          });
	        } else if (y > iScroll.maxScrollY - pullUpThreshold && pullUpCls === 'iscroll-flip') {
	          this.setState({
	            pullUpCls: '',
	            pullUpState: 0
	          }, function () {
	            iScroll.hasVerticalScroll = true;
	          });
	        }
	      }
	    }

	    /**
	     * 滑动结束
	     * @param iScroll
	     */

	  }, {
	    key: 'scrollEnd',
	    value: function scrollEnd(iScroll) {
	      if (this.lock) {
	        return;
	      }
	      var _props3 = this.props,
	          pullDown = _props3.pullDown,
	          pullUp = _props3.pullUp;
	      var _state2 = this.state,
	          pullDownCls = _state2.pullDownCls,
	          pullUpCls = _state2.pullUpCls;

	      if (pullDown && pullDownCls === 'iscroll-flip') {
	        this.setState({
	          pullDownStyle: {
	            transitionDuration: '',
	            marginTop: ''
	          },
	          pullDownCls: 'iscroll-loading',
	          pullDownState: 2
	        });
	        this.pullActionHandler(iScroll, 'down');
	      }

	      if (pullUp && pullUpCls === 'iscroll-flip') {
	        this.setState({
	          pullUpCls: 'iscroll-loading',
	          pullUpState: 2
	        });
	        this.pullActionHandler(iScroll, 'up');
	      }

	      if (this.scrollStartPos === -1000) {
	        // 重新计算 iScroll 是否可以拖拽或滚动
	        this.hasVerticalScroll = iScroll.options.scrollY && iScroll.maxScrollY < 0;
	      }
	    }

	    // IScroll events end

	    /**
	     * 刷新
	     * @param iScroll
	     */

	  }, {
	    key: 'refresh',
	    value: function refresh(iScroll) {
	      var _this4 = this;

	      if (this.lock) {
	        return;
	      }
	      var y = iScroll.y;
	      var animTime = void 0;
	      var type = void 0;
	      var _props4 = this.props,
	          pullDown = _props4.pullDown,
	          pullUp = _props4.pullUp;
	      var _state3 = this.state,
	          pullDownCls = _state3.pullDownCls,
	          pullUpCls = _state3.pullUpCls,
	          isScrolling = _state3.isScrolling;


	      if (pullDown) {
	        if (pullDownCls === 'iscroll-loading' && isScrolling === false) {
	          var state = {
	            pullDownState: 0,
	            pullDownCls: 'scrolled-up'
	          };
	          if (y >= 0) {
	            type = 1;
	            animTime = 250;
	            state.pullDownStyle = {
	              transitionDuration: animTime + 'ms',
	              marginTop: ''
	            };
	          } else if (y > -this.pullDownOffset) {
	            type = 2;

	            var pullDownEl = this.refs.pullDown;
	            pullDownEl.style.marginTop = y + 'px';
	            pullDownEl.offsetHeight;

	            animTime = 250 * (this.pullDownOffset + y) / this.pullDownOffset;
	            state.pullDownStyle = {
	              transitionDuration: animTime + 'ms',
	              marginTop: ''
	            };
	          } else {
	            type = 3;
	            animTime = 0;
	            state.pullDownStyle = {
	              transitionDuration: '',
	              marginTop: ''
	            };
	          }

	          this.setState(state, function () {
	            setTimeout(function () {
	              iScroll.refresh();
	            }, animTime + 10);

	            if (type === 2) {
	              iScroll.scrollTo(0, 0, 0);
	            } else if (type === 3) {
	              iScroll.scrollBy(0, _this4.pullDownOffset, 0);
	            }
	          });
	        }
	      }

	      if (pullUp) {
	        if (pullUpCls === 'iscroll-loading' && isScrolling === false) {
	          this.setState({
	            pullUpCls: '',
	            pullUpState: 0
	          });
	        }
	      }
	    }

	    // 重新加载数据

	  }, {
	    key: 'pullActionHandler',
	    value: function pullActionHandler(iScroll, downOrUp) {
	      var _this5 = this;

	      this.lock = true;
	      var handleRefresh = this.props.handleRefresh;


	      if (handleRefresh && typeof handleRefresh === 'function') {
	        handleRefresh(downOrUp, function () {
	          _this5.setState({
	            pullUpState: 0,
	            isScrolling: false
	          }, function () {
	            _this5.lock = false;
	            iScroll.refresh();
	          });
	        });
	      } else {
	        //这里只是模拟操作，实际中 handleRefresh 应该必须传入
	        setTimeout(function () {
	          _this5.setState({
	            pullUpState: 0,
	            isScrolling: false
	          }, function () {
	            _this5.lock = false;
	            iScroll.refresh();
	          });
	        }, 1000);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state4 = this.state,
	          pullDownState = _state4.pullDownState,
	          pullUpState = _state4.pullUpState,
	          pullDownCls = _state4.pullDownCls,
	          pullUpCls = _state4.pullUpCls;
	      var _props5 = this.props,
	          pullDown = _props5.pullDown,
	          pullUp = _props5.pullUp,
	          pullDownText = _props5.pullDownText,
	          pullUpText = _props5.pullUpText,
	          className = _props5.className;

	      className = className ? ' ' + className : '';

	      return _react2.default.createElement(
	        'div',
	        { className: 'iscroll-wrapper' + className },
	        _react2.default.createElement(
	          'div',
	          { className: 'iscroll-body' },
	          pullDown ? _react2.default.createElement(
	            'div',
	            { ref: 'pullDown', className: (0, _classnames4.default)(_defineProperty({ 'iscroll-pull-down': true }, pullDownCls, true)) },
	            _react2.default.createElement('i', null),
	            _react2.default.createElement(
	              'span',
	              null,
	              pullDownText[pullDownState]
	            )
	          ) : null,
	          this.props.children,
	          pullUp ? _react2.default.createElement(
	            'div',
	            { className: (0, _classnames4.default)(_defineProperty({ 'iscroll-pull-up': true }, pullUpCls, true)) },
	            _react2.default.createElement('i', null),
	            _react2.default.createElement(
	              'span',
	              null,
	              pullUpText[pullUpState]
	            )
	          ) : null
	        )
	      );
	    }
	  }]);

	  return ReactIScroll;
	}(_react.Component);

	ReactIScroll.defaultProps = {
	  options: {
	    mouseWheel: true, // 是否支持鼠标滚轮
	    scrollbars: true, // 是否显示滚动条
	    probeType: 2, // 滚动的节奏
	    //bounceTime: 250, // 滚动动画持续的时间，默认为600
	    bounceEasing: 'quadratic', // 动画算法
	    fadeScrollbars: true, // 是否使用滚动 fade 效果
	    interactiveScrollbars: true // 滚动条是否可以被拖拽
	  },
	  pullDown: true,
	  pullUp: true,
	  pullDownText: ['下拉刷新', '松开刷新', '加载中，请稍后...'],
	  pullUpText: ['上滑加载更多...', '松开加载...', '加载中，请稍后...'],
	  pullDownThreshold: 5, //向下滑动临界值
	  pullUpThreshold: 55 };

	ReactIScroll.propTypes = {
	  options: _react.PropTypes.object.isRequired,
	  iScroll: _react.PropTypes.func.isRequired,
	  className: _react.PropTypes.string, // 自定义样式
	  children: _react.PropTypes.node,
	  pullDown: _react.PropTypes.bool, //是否显示向下刷新加载
	  pullUp: _react.PropTypes.bool, //是否显示向上加载更多
	  pullDownText: _react.PropTypes.array,
	  pullUpText: _react.PropTypes.array,
	  pullDownThreshold: _react.PropTypes.number,
	  pullUpThreshold: _react.PropTypes.number,
	  handleRefresh: _react.PropTypes.func //刷新后回调函数，定义要处理的逻辑，比如加载更多，刷新等
	};

	exports.default = ReactIScroll;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;