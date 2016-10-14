webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(62);

	var _redux = __webpack_require__(37);

	var _reactRedux = __webpack_require__(22);

	var _componentsApp = __webpack_require__(98);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _reducers = __webpack_require__(106);

	var _reducers2 = _interopRequireDefault(_reducers);

	var store = (0, _redux.createStore)(_reducers2['default']);

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_componentsApp2['default'], null)
	), document.getElementById('root'));

/***/ },

/***/ 38:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var nextTodoId = 0;
	var addTodo = function addTodo(text) {
	  return {
	    type: 'ADD_TODO',
	    id: nextTodoId++,
	    text: text
	  };
	};

	exports.addTodo = addTodo;
	var setVisibilityFilter = function setVisibilityFilter(filter) {
	  return {
	    type: 'SET_VISIBILITY_FILTER',
	    filter: filter
	  };
	};

	exports.setVisibilityFilter = setVisibilityFilter;
	var toggleTodo = function toggleTodo(id) {
	  return {
	    type: 'TOGGLE_TODO',
	    id: id
	  };
	};
	exports.toggleTodo = toggleTodo;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _Footer = __webpack_require__(99);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _containersAddTodo = __webpack_require__(103);

	var _containersAddTodo2 = _interopRequireDefault(_containersAddTodo);

	var _containersVisibleTodoList = __webpack_require__(105);

	var _containersVisibleTodoList2 = _interopRequireDefault(_containersVisibleTodoList);

	var App = function App() {
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(_containersAddTodo2['default'], null),
	    _react2['default'].createElement(_containersVisibleTodoList2['default'], null),
	    _react2['default'].createElement(_Footer2['default'], null)
	  );
	};

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _containersFilterLink = __webpack_require__(104);

	var _containersFilterLink2 = _interopRequireDefault(_containersFilterLink);

	var Footer = function Footer() {
	  return _react2['default'].createElement(
	    'p',
	    null,
	    'Show:',
	    " ",
	    _react2['default'].createElement(
	      _containersFilterLink2['default'],
	      { filter: 'SHOW_ALL' },
	      'All'
	    ),
	    ", ",
	    _react2['default'].createElement(
	      _containersFilterLink2['default'],
	      { filter: 'SHOW_ACTIVE' },
	      'Active'
	    ),
	    ", ",
	    _react2['default'].createElement(
	      _containersFilterLink2['default'],
	      { filter: 'SHOW_COMPLETED' },
	      'Completed'
	    )
	  );
	};

	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var Link = function Link(_ref) {
	  var active = _ref.active;
	  var children = _ref.children;
	  var onClick = _ref.onClick;

	  if (active) {
	    return _react2["default"].createElement(
	      "span",
	      null,
	      children
	    );
	  }

	  return _react2["default"].createElement(
	    "a",
	    { href: "#",
	      onClick: function (e) {
	        e.preventDefault();
	        onClick();
	      }
	    },
	    children
	  );
	};

	Link.propTypes = {
	  active: _react.PropTypes.bool.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  onClick: _react.PropTypes.func.isRequired
	};

	exports["default"] = Link;
	module.exports = exports["default"];

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var Todo = function Todo(_ref) {
	  var onClick = _ref.onClick;
	  var completed = _ref.completed;
	  var text = _ref.text;
	  return _react2['default'].createElement(
	    'li',
	    {
	      onClick: onClick,
	      style: {
	        textDecoration: completed ? 'line-through' : 'none'
	      }
	    },
	    text
	  );
	};

	Todo.propTypes = {
	  onClick: _react.PropTypes.func.isRequired,
	  completed: _react.PropTypes.bool.isRequired,
	  text: _react.PropTypes.string.isRequired
	};

	exports['default'] = Todo;
	module.exports = exports['default'];

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _Todo = __webpack_require__(101);

	var _Todo2 = _interopRequireDefault(_Todo);

	var TodoList = function TodoList(_ref) {
	  var todos = _ref.todos;
	  var onTodoClick = _ref.onTodoClick;
	  return _react2['default'].createElement(
	    'ul',
	    null,
	    todos.map(function (todo) {
	      return _react2['default'].createElement(_Todo2['default'], _extends({
	        key: todo.id
	      }, todo, {
	        onClick: function () {
	          return onTodoClick(todo.id);
	        }
	      }));
	    })
	  );
	};

	TodoList.propTypes = {
	  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    id: _react.PropTypes.number.isRequired,
	    completed: _react.PropTypes.bool.isRequired,
	    text: _react.PropTypes.string.isRequired
	  }).isRequired).isRequired,
	  onTodoClick: _react.PropTypes.func.isRequired
	};

	exports['default'] = TodoList;
	module.exports = exports['default'];

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(22);

	var _actions = __webpack_require__(38);

	var AddTodo = function AddTodo(_ref) {
	  var dispatch = _ref.dispatch;

	  var input = undefined;

	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(
	      'form',
	      { onSubmit: function (e) {
	          e.preventDefault();
	          if (!input.value.trim()) {
	            return;
	          }
	          dispatch((0, _actions.addTodo)(input.value));
	          input.value = '';
	        } },
	      _react2['default'].createElement('input', { ref: function (node) {
	          input = node;
	        } }),
	      _react2['default'].createElement(
	        'button',
	        { type: 'submit' },
	        'Add Todo'
	      )
	    )
	  );
	};
	AddTodo = (0, _reactRedux.connect)()(AddTodo);

	exports['default'] = AddTodo;
	module.exports = exports['default'];

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRedux = __webpack_require__(22);

	var _actions = __webpack_require__(38);

	var _componentsLink = __webpack_require__(100);

	var _componentsLink2 = _interopRequireDefault(_componentsLink);

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    active: ownProps.filter === state.visibilityFilter
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onClick: function onClick() {
	      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
	    }
	  };
	};

	var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsLink2['default']);

	exports['default'] = FilterLink;
	module.exports = exports['default'];

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRedux = __webpack_require__(22);

	var _actions = __webpack_require__(38);

	var _componentsTodoList = __webpack_require__(102);

	var _componentsTodoList2 = _interopRequireDefault(_componentsTodoList);

	var getVisibleTodos = function getVisibleTodos(todos, filter) {
	  switch (filter) {
	    case 'SHOW_ALL':
	      return todos;
	    case 'SHOW_COMPLETED':
	      return todos.filter(function (t) {
	        return t.completed;
	      });
	    case 'SHOW_ACTIVE':
	      return todos.filter(function (t) {
	        return !t.completed;
	      });
	    default:
	      throw new Error('Unknown filter: ' + filter);
	  }
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    todos: getVisibleTodos(state.todos, state.visibilityFilter)
	  };
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    onTodoClick: function onTodoClick(id) {
	      dispatch((0, _actions.toggleTodo)(id));
	    }
	  };
	};

	var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_componentsTodoList2['default']);

	exports['default'] = VisibleTodoList;
	module.exports = exports['default'];

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(37);

	var _todos = __webpack_require__(107);

	var _todos2 = _interopRequireDefault(_todos);

	var _visibilityFilter = __webpack_require__(108);

	var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

	var todoApp = (0, _redux.combineReducers)({
	  todos: _todos2['default'],
	  visibilityFilter: _visibilityFilter2['default']
	});

	exports['default'] = todoApp;
	module.exports = exports['default'];

/***/ },

/***/ 107:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var todo = function todo(state, action) {
	  switch (action.type) {
	    case 'ADD_TODO':
	      return {
	        id: action.id,
	        text: action.text,
	        completed: false
	      };
	    case 'TOGGLE_TODO':
	      if (state.id !== action.id) {
	        return state;
	      }

	      return _extends({}, state, {
	        completed: !state.completed
	      });
	    default:
	      return state;
	  }
	};

	var todos = function todos(state, action) {
	  if (state === undefined) state = [];

	  switch (action.type) {
	    case 'ADD_TODO':
	      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
	    case 'TOGGLE_TODO':
	      return state.map(function (t) {
	        return todo(t, action);
	      });
	    default:
	      return state;
	  }
	};

	exports['default'] = todos;
	module.exports = exports['default'];

/***/ },

/***/ 108:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var visibilityFilter = function visibilityFilter(state, action) {
	  if (state === undefined) state = 'SHOW_ALL';

	  switch (action.type) {
	    case 'SET_VISIBILITY_FILTER':
	      return action.filter;
	    default:
	      return state;
	  }
	};

	exports['default'] = visibilityFilter;
	module.exports = exports['default'];

/***/ }

});