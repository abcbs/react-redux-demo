'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = require('./visibilityFilter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

var _addTodoVerfiy = require('./addTodoVerfiy');

var _addTodoVerfiy2 = _interopRequireDefault(_addTodoVerfiy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var todoApp = (0, _redux.combineReducers)({
    visibilityFilter: _visibilityFilter2['default'],
    addTodoVerfiy: _addTodoVerfiy2['default'],
    todos: _todos2['default']
});

exports['default'] = todoApp;