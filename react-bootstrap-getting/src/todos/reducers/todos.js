import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER ,ADD_TODO_VERFIY,SUBMMIT_TODO} from '../actions'
import info from '../framework/utils/logger'

import undoable,{excludeAction} from 'redux-undo'

function reducer(state = [], action) {
    switch (action.type) {
        // case ADD_TODO:
        //     return  action;
        case ADD_TODO:
            return [//在Redux中加入数据
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        // case SUBMMIT_TODO:
        //     info("action.text",action.text);
        //     return [//在Redux中加入数据
        //         ...state,
        //         {
        //             text: action.text,
        //             completed: false
        //         }
        //     ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}
const undoableTodos = undoable(reducer);
// const undoableTodos  =undoable(reducer, function filterActions(action, currentState, previousState) {
//     return action.type === ADD_TODO_VERFIY; // only add to history if action is SOME_ACTION
// });
// const undoableTodos=undoable(reducer, { filter: excludeAction(ADD_TODO_VERFIY,SET_VISIBILITY_FILTER) })


export default undoableTodos
