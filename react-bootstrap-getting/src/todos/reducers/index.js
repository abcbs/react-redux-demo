import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addTodoVerfiy from './addTodoVerfiy'
const todoApp = combineReducers({
    visibilityFilter,
    addTodoVerfiy,
    todos
});

export default todoApp
