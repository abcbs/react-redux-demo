'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _simpleAssign3 = require('simple-assign');

var _simpleAssign4 = _interopRequireDefault(_simpleAssign3);

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _redux = require('redux');

var _actions = require('../actions');

var _logger = require('../../abc-framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        // case ADD_TODO:
        //     return  action;
        case _actions.ADD_TODO:
            return [].concat((0, _toConsumableArray3['default'])(state), [{ //添加的数据为text
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
            return [].concat((0, _toConsumableArray3['default'])(state.slice(0, action.index)), [//索引之前的数据
            (0, _simpleAssign2['default'])({}, state[action.index], {
                completed: true //完成的标记
            })], (0, _toConsumableArray3['default'])(state.slice(action.index + 1)));
        default:
            return state;
    }
}
var undoableTodos = (0, _reduxUndo2['default'])(reducer);
// const undoableTodos  =undoable(reducer, function filterActions(action, currentState, previousState) {
//     return action.type === ADD_TODO_VERFIY; // only add to history if action is SOME_ACTION
// });
// const undoableTodos=undoable(reducer, { filter: excludeAction(ADD_TODO_VERFIY,SET_VISIBILITY_FILTER) })


exports['default'] = undoableTodos;