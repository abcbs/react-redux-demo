'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var addTodoVerfiy = function addTodoVerfiy() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODO_VERFIY':
            return action;
        default:
            return state;
    }
};

exports.default = addTodoVerfiy;