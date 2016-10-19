webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(170);

	var _reactRedux = __webpack_require__(120);

	var _App = __webpack_require__(216);

	var _App2 = _interopRequireDefault(_App);

	var _configureStore = __webpack_require__(218);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configureStore2.default)(); //import 'babel-core/polyfill'


	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('root'));

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.INVALIDATE_REDDIT = exports.SELECT_REDDIT = exports.RECEIVE_POSTS = exports.REQUEST_POSTS = undefined;
	exports.selectReddit = selectReddit;
	exports.invalidateReddit = invalidateReddit;
	exports.fetchPostsIfNeeded = fetchPostsIfNeeded;

	var _isomorphicFetch = __webpack_require__(169);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
	var SELECT_REDDIT = exports.SELECT_REDDIT = 'SELECT_REDDIT';
	var INVALIDATE_REDDIT = exports.INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
	//选择新闻类型action
	function selectReddit(reddit) {
	  return {
	    type: SELECT_REDDIT,
	    reddit: reddit
	  };
	}
	//废弃新闻类型action
	function invalidateReddit(reddit) {
	  return {
	    type: INVALIDATE_REDDIT,
	    reddit: reddit
	  };
	}
	//开始获取新闻action
	function requestPosts(reddit) {
	  return {
	    type: REQUEST_POSTS,
	    reddit: reddit
	  };
	}
	//获取新闻成功的action
	function receivePosts(reddit, json) {
	  return {
	    type: RECEIVE_POSTS,
	    reddit: reddit,
	    posts: json.data.children.map(function (child) {
	      return child.data;
	    }),
	    receivedAt: Date.now()
	  };
	}

	//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
	function fetchPosts(reddit) {
	  return function (dispatch) {
	    dispatch(requestPosts(reddit));
	    return (0, _isomorphicFetch2.default)('https://www.reddit.com/r/' + reddit + '.json').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receivePosts(reddit, json));
	    });
	  };
	}

	//是否需要获取文章
	function shouldFetchPosts(state, reddit) {
	  var posts = state.postsByReddit[reddit];
	  if (!posts) {
	    return true;
	  }
	  if (posts.isFetching) {
	    return false;
	  }
	  return posts.didInvalidate;
	}

	//如果需要则开始获取文章
	function fetchPostsIfNeeded(reddit) {
	  return function (dispatch, getState) {
	    if (shouldFetchPosts(getState(), reddit)) {
	      return dispatch(fetchPosts(reddit));
	    }
	  };
	}

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Picker = function (_Component) {
	  _inherits(Picker, _Component);

	  function Picker() {
	    _classCallCheck(this, Picker);

	    return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
	  }

	  _createClass(Picker, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var value = _props.value;
	      var _onChange = _props.onChange;
	      var options = _props.options;


	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          value
	        ),
	        _react2.default.createElement(
	          'select',
	          { onChange: function onChange(e) {
	              return _onChange(e.target.value);
	            },
	            value: value },
	          options.map(function (option) {
	            return _react2.default.createElement(
	              'option',
	              { value: option, key: option },
	              option
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Picker;
	}(_react.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  options: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired,
	  value: _react.PropTypes.string.isRequired,
	  onChange: _react.PropTypes.func.isRequired
	};

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Posts = function (_Component) {
	  _inherits(Posts, _Component);

	  function Posts() {
	    _classCallCheck(this, Posts);

	    return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).apply(this, arguments));
	  }

	  _createClass(Posts, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        null,
	        this.props.posts.map(function (post, i) {
	          return _react2.default.createElement(
	            'li',
	            { key: i },
	            post.title
	          );
	        })
	      );
	    }
	  }]);

	  return Posts;
	}(_react.Component);

	exports.default = Posts;


	Posts.propTypes = {
	  posts: _react.PropTypes.array.isRequired
	};

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(120);

	var _actions = __webpack_require__(140);

	var _Picker = __webpack_require__(214);

	var _Picker2 = _interopRequireDefault(_Picker);

	var _Posts = __webpack_require__(215);

	var _Posts2 = _interopRequireDefault(_Posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleRefreshClick = _this.handleRefreshClick.bind(_this);
	    return _this;
	  }

	  //初始化渲染后触发


	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('执行componentDidMount');
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var selectedReddit = _props.selectedReddit;

	      dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));
	    }

	    //每次接受新的props触发

	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('执行componentWillReceiveProps', nextProps);
	      if (nextProps.selectedReddit !== this.props.selectedReddit) {
	        var dispatch = nextProps.dispatch;
	        var selectedReddit = nextProps.selectedReddit;

	        dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(nextReddit) {
	      this.props.dispatch((0, _actions.selectReddit)(nextReddit));
	    }
	  }, {
	    key: 'handleRefreshClick',
	    value: function handleRefreshClick(e) {
	      e.preventDefault();

	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var selectedReddit = _props2.selectedReddit;

	      dispatch((0, _actions.invalidateReddit)(selectedReddit));
	      dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var selectedReddit = _props3.selectedReddit;
	      var posts = _props3.posts;
	      var isFetching = _props3.isFetching;
	      var lastUpdated = _props3.lastUpdated;
	      ;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Picker2.default, { value: selectedReddit,
	          onChange: this.handleChange,
	          options: ['reactjs', 'frontend'] }),
	        _react2.default.createElement(
	          'p',
	          null,
	          lastUpdated && _react2.default.createElement(
	            'span',
	            null,
	            'Last updated at ',
	            new Date(lastUpdated).toLocaleTimeString(),
	            '.',
	            ' '
	          ),
	          !isFetching && _react2.default.createElement(
	            'a',
	            { href: '#',
	              onClick: this.handleRefreshClick },
	            'Refresh'
	          )
	        ),
	        isFetching && posts.length === 0 && _react2.default.createElement(
	          'h2',
	          null,
	          'Loading...'
	        ),
	        !isFetching && posts.length === 0 && _react2.default.createElement(
	          'h2',
	          null,
	          'Empty.'
	        ),
	        posts.length > 0 && _react2.default.createElement(
	          'div',
	          { style: { opacity: isFetching ? 0.5 : 1 } },
	          _react2.default.createElement(_Posts2.default, { posts: posts })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	App.propTypes = {
	  selectedReddit: _react.PropTypes.string.isRequired,
	  posts: _react.PropTypes.array.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired,
	  lastUpdated: _react.PropTypes.number,
	  dispatch: _react.PropTypes.func.isRequired
	};

	function mapStateToProps(state) {
	  var selectedReddit = state.selectedReddit;
	  var postsByReddit = state.postsByReddit;

	  var _ref = postsByReddit[selectedReddit] || {
	    isFetching: true,
	    items: []
	  };

	  var isFetching = _ref.isFetching;
	  var lastUpdated = _ref.lastUpdated;
	  var posts = _ref.items;


	  return {
	    selectedReddit: selectedReddit,
	    posts: posts,
	    isFetching: isFetching,
	    lastUpdated: lastUpdated
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(93);

	var _actions = __webpack_require__(140);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	//选择新闻后，将state.selectedReddit设为所选选项
	function selectedReddit() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reactjs';
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SELECT_REDDIT:
	      return action.reddit;
	    default:
	      return state;
	  }
	}

	function posts() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    //是否正在获取最新
	    isFetching: false,
	    //是否废弃
	    didInvalidate: false,
	    //内容
	    items: []
	  };
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.INVALIDATE_REDDIT:
	      return Object.assign({}, state, {
	        didInvalidate: true
	      });
	    case _actions.REQUEST_POSTS:
	      return Object.assign({}, state, {
	        isFetching: true,
	        didInvalidate: false
	      });
	    case _actions.RECEIVE_POSTS:
	      return Object.assign({}, state, {
	        isFetching: false,
	        didInvalidate: false,
	        items: action.posts,
	        lastUpdated: action.receivedAt
	      });
	    default:
	      return state;
	  }
	}
	//废弃、接收到、开始接受新闻后，将state.postsByReddit设为相关参数
	function postsByReddit() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.INVALIDATE_REDDIT:
	    case _actions.RECEIVE_POSTS:
	    case _actions.REQUEST_POSTS:
	      return Object.assign({}, state, _defineProperty({}, action.reddit, posts(state[action.reddit], action)));
	    default:
	      return state;
	  }
	}
	//将两个reducer合并成一个reducer,也就将全局的state加上postsByReddit,selectedReddit两个属性，每个属性都有自己的state
	var rootReducer = (0, _redux.combineReducers)({
	  postsByReddit: postsByReddit,
	  selectedReddit: selectedReddit
	});

	exports.default = rootReducer;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(93);

	var _reduxThunk = __webpack_require__(209);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(208);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(217);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)())(_redux.createStore);

	function configureStore(initialState) {
	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', function () {
	      var nextRootReducer = require('../reducers');
	      store.replaceReducer(nextRootReducer);
	    });
	  }

	  return store;
	}

/***/ }

});