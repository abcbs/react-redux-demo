'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//应用


var _redux = require('redux');

var _reducers = require('../framework/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _todos = require('./todos');

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = require('./visibilityFilter');

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

var _addTodoVerfiy = require('./addTodoVerfiy');

var _addTodoVerfiy2 = _interopRequireDefault(_addTodoVerfiy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoApp = (0, _redux.combineReducers)(_extends({}, _reducers2.default, {
    visibilityFilter: _visibilityFilter2.default,
    addTodoVerfiy: _addTodoVerfiy2.default,
    todos: _todos2.default
}));

exports.default = todoApp;