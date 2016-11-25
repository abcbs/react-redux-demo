import { combineReducers } from 'redux'
//第三组件
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { pagination } from 'violet-paginator';
import {reducer as form} from 'redux-form';
//应用
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addTodoVerfiy from './addTodoVerfiy'
const todoApp = combineReducers({
    routing: routerReducer,
    pagination,
    form,
    visibilityFilter,
    addTodoVerfiy,
    todos
});

export default todoApp
