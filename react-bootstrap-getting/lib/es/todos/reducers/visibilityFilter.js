'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;


var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
    var action = arguments[1];

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

exports['default'] = visibilityFilter;