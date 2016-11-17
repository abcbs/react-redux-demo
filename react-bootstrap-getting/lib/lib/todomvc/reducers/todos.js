'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

var _createReducer;

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _reduxAct = require('redux-act');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

exports.default = (0, _reduxAct.createReducer)((_createReducer = {}, _defineProperty(_createReducer, addTodo, function (state, text) {
  return [{
    id: state.reduce(function (maxId, todo) {
      return Math.max(todo.id, maxId);
    }, -1) + 1,
    completed: false,
    text: text
  }].concat(_toConsumableArray(state));
}), _defineProperty(_createReducer, deleteTodo, function (state, id) {
  return state.filter(function (todo) {
    return todo.id !== id;
  });
}), _defineProperty(_createReducer, editTodo, function (state, _ref) {
  var id = _ref.id;
  var text = _ref.text;
  return state.map(function (todo) {
    return todo.id === id ? (0, _simpleAssign2.default)({}, todo, { text: text }) : todo;
  });
}), _defineProperty(_createReducer, completeTodo, function (state, id) {
  return state.map(function (todo) {
    return todo.id === id ? (0, _simpleAssign2.default)({}, todo, { completed: !todo.completed }) : todo;
  });
}), _defineProperty(_createReducer, completeAll, function (state) {
  var areAllMarked = state.every(function (todo) {
    return todo.completed;
  });
  return state.map(function (todo) {
    return (0, _simpleAssign2.default)({}, todo, {
      completed: !areAllMarked
    });
  });
}), _defineProperty(_createReducer, clearCompleted, function (state) {
  return state.filter(function (todo) {
    return todo.completed === false;
  });
}), _createReducer), initialState);