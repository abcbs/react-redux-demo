'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _createReducer;

var _simpleAssign3 = require('simple-assign');

var _simpleAssign4 = _interopRequireDefault(_simpleAssign3);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _reduxAct = require('redux-act');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

var addTodo = exports.addTodo = (0, _reduxAct.createAction)('add todo');
var deleteTodo = exports.deleteTodo = (0, _reduxAct.createAction)('delete todo');
var editTodo = exports.editTodo = (0, _reduxAct.createAction)('edit todo', function (id, text) {
  return { id: id, text: text };
});
var completeTodo = exports.completeTodo = (0, _reduxAct.createAction)('complete todo');
var completeAll = exports.completeAll = (0, _reduxAct.createAction)('complete all');
var clearCompleted = exports.clearCompleted = (0, _reduxAct.createAction)('clear completed');

exports['default'] = (0, _reduxAct.createReducer)((_createReducer = {}, (0, _defineProperty3['default'])(_createReducer, addTodo, function (state, text) {
  return [{
    id: state.reduce(function (maxId, todo) {
      return Math.max(todo.id, maxId);
    }, -1) + 1,
    completed: false,
    text: text
  }].concat((0, _toConsumableArray3['default'])(state));
}), (0, _defineProperty3['default'])(_createReducer, deleteTodo, function (state, id) {
  return state.filter(function (todo) {
    return todo.id !== id;
  });
}), (0, _defineProperty3['default'])(_createReducer, editTodo, function (state, _ref) {
  var id = _ref.id;
  var text = _ref.text;
  return state.map(function (todo) {
    return todo.id === id ? (0, _simpleAssign2['default'])({}, todo, { text: text }) : todo;
  });
}), (0, _defineProperty3['default'])(_createReducer, completeTodo, function (state, id) {
  return state.map(function (todo) {
    return todo.id === id ? (0, _simpleAssign2['default'])({}, todo, { completed: !todo.completed }) : todo;
  });
}), (0, _defineProperty3['default'])(_createReducer, completeAll, function (state) {
  var areAllMarked = state.every(function (todo) {
    return todo.completed;
  });
  return state.map(function (todo) {
    return (0, _simpleAssign2['default'])({}, todo, {
      completed: !areAllMarked
    });
  });
}), (0, _defineProperty3['default'])(_createReducer, clearCompleted, function (state) {
  return state.filter(function (todo) {
    return todo.completed === false;
  });
}), _createReducer), initialState);