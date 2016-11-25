import { combineReducers } from 'redux'
import reducers from '../../abc-framework/reducers'
//应用
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addTodoVerfiy from './addTodoVerfiy'
const todoApp = combineReducers({
    ...reducers,
    visibilityFilter,
    addTodoVerfiy,
    todos
});

export default todoApp
