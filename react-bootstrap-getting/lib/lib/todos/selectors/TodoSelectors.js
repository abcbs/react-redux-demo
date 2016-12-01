'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keywordFilterSelector = exports.visibleTodosSelector = undefined;

var _reselect = require('reselect');

var _actions = require('../actions');

function selectTodos(todos, filter) {
    switch (filter) {
        case _actions.VisibilityFilters.SHOW_ALL:
            return todos || [];
        case _actions.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(function (todo) {
                return todo.completed;
            });
        case _actions.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(function (todo) {
                return !todo.completed;
            });
    }
}
//visibilityFilterSelector和todosSelector是input-selector。
// 因为他们并不转换数据，所以被创建成普通的非记忆的selector函数。
var visibilityFilterSelector = function visibilityFilterSelector(state) {
    //const stateParent=state.todos.present;
    return state.visibilityFilter || state.default.visibilityFilter;
};
var todosSelector = function todosSelector(state) {
    //const stateParent=state.todos.present;
    var todos = state.todos || state.default.todos;
    return todos.present;
};

//visibleTodosSelector是一个可记忆的selector。
// 他接收visibilityFilterSelector和todosSelector为input-selector，
// 还有一个转换函数来计算过滤的todos列表。
var visibleTodosSelector = exports.visibleTodosSelector = (0, _reselect.createSelector)([visibilityFilterSelector, todosSelector], function (visibilityFilter, todos) {
    return { //必须要通过state.todos.present操作state，而不是原来的state.todos
        visibleTodos: selectTodos(todos, visibilityFilter),
        visibilityFilter: visibilityFilter

    };
});

//可记忆的selector自身可以作为其它可记忆的selector的input-selector。
// 下面的visibleTodosSelector被当作另一个selector的input-selector，
// 来进一步通过关键字（keyword）过滤todos。
var keywordSelector = function keywordSelector(state) {
    return state.keyword;
};
var keywordFilterSelector = exports.keywordFilterSelector = (0, _reselect.createSelector)([visibleTodosSelector, keywordSelector], function (visibleTodos, keyword) {
    return visibleTodos.filter(function (todo) {
        return todo.indexOf(keyword) > -1;
    });
});