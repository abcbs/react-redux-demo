import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../actions'

import undoable from 'redux-undo'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [//在Redux中加入数据
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
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
const undoableTodos = undoable(todos);

export default undoableTodos
