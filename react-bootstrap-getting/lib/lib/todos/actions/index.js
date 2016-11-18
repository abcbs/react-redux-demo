'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
exports.addTodoVerfiy = addTodoVerfiy;
exports.submmitTodo = submmitTodo;
/*
 * action 类型
 */

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var SUBMMIT_TODO = exports.SUBMMIT_TODO = 'SUBMMIT_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var ADD_TODO_VERFIY = exports.ADD_TODO_VERFIY = 'ADD_TODO_VERFIY';
/*
 * 其它的常量
 */
var VisibilityFilters = exports.VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  ADD_TODO_VERFIY: 'ADD_TODO_VERFIY'
};

/*
 * action 创建函数
 */
function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function completeTodo(index) {
  return { type: COMPLETE_TODO, index: index };
}

function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter };
}

function addTodoVerfiy(text) {
  return { type: ADD_TODO_VERFIY, text: text };
}

/*
 * action 创建函数
 */
function submmitTodo(text) {
  return { type: SUBMMIT_TODO, text: text };
}