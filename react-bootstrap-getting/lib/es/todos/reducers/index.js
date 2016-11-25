'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reducers = require('../framework/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = require('./visibilityFilter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

var _addTodoVerfiy = require('./addTodoVerfiy');

var _addTodoVerfiy2 = _interopRequireDefault(_addTodoVerfiy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var todoApp = (0, _redux.combineReducers)((0, _extends3['default'])({}, _reducers2['default'], {
    visibilityFilter: _visibilityFilter2['default'],
    addTodoVerfiy: _addTodoVerfiy2['default'],
    todos: _todos2['default']
}));
//应用
exports['default'] = todoApp;