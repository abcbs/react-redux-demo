'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _redux = require('redux');

var _actions = require('../actions');

var _logger = require('../../abc-framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        // case ADD_TODO:
        //     return  action;
        case _actions.ADD_TODO:
            return [].concat(_toConsumableArray(state), [{
                text: action.text,
                completed: false
            }]);
        // case SUBMMIT_TODO:
        //     info("action.text",action.text);
        //     return [//在Redux中加入数据
        //         ...state,
        //         {
        //             text: action.text,
        //             completed: false
        //         }
        //     ]
        case _actions.COMPLETE_TODO:
            return [].concat(_toConsumableArray(state.slice(0, action.index)), [(0, _simpleAssign2.default)({}, state[action.index], {
                completed: true
            })], _toConsumableArray(state.slice(action.index + 1)));
        default:
            return state;
    }
}
var undoableTodos = (0, _reduxUndo2.default)(reducer);
// const undoableTodos  =undoable(reducer, function filterActions(action, currentState, previousState) {
//     return action.type === ADD_TODO_VERFIY; // only add to history if action is SOME_ACTION
// });
// const undoableTodos=undoable(reducer, { filter: excludeAction(ADD_TODO_VERFIY,SET_VISIBILITY_FILTER) })


exports.default = undoableTodos;