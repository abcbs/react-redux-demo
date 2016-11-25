import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter,
    VisibilityFilters,addTodoVerfiy ,ADD_TODO,SUBMMIT_TODO,submmitTodo} from '../actions'
//import AddTodo from '../components/AddTodo'
//import TodoList from '../components/TodoList'
//import Footer from '../components/Footer'
import { bindActionCreators } from 'redux'
import AddTodo from '../view-bootsrap/AddTodo'
import TodoList from '../view-bootsrap/TodoList'
import Footer from '../view-bootsrap/Footer'

import {visibleTodosSelector} from '../selectors/TodoSelectors'
import AbcPage from '../../abc-framework/ui/AbcPage'
import UndoRedoUtil from './UndoRedo'
//

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter ,
            addTodoAction,verfiedResult,addTodoVerfiyAction,
            completeTodoAction,setVisibilityFilterAtion,
            submitResult,submmitTodoAction
        } = this.props;
        return (
            <AbcPage title="新增产品" router="app">
                <span>
                <AddTodo
                    onAddClick={addTodoAction} 
                    onAddTodoVerfiy={addTodoVerfiyAction}
                    verfiedResult={verfiedResult}
                    submitResult={submitResult}
                    submmitTodo={submmitTodoAction}
                    />
                 <UndoRedoUtil/>
                
                 <TodoList
                        todos={visibleTodos}
                        onTodoClick={completeTodoAction} />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={setVisibilityFilterAtion} />
                 </span>
            </AbcPage>
        )
    }


}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired,
    // verfiedResult:PropTypes.string,
    // submitResult:PropTypes.string
};

const getVisibleTodos = (state, filter) => {

    let todos=state.todos;
    switch (filter) {
        case 'SHOW_ALL':
            return state
        case 'SHOW_COMPLETED':
            return state.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return state.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

/**
 * 提交之后
 * @param state
 * @returns {*}
 */
const getFormInfo = (actions,state) => {
     let action=actions&&actions.splice&&actions.splice(-1,1);
     let todo=action[0];
     if(!action[0]||!todo){
         return '';
     }else{
         let act=todo.action;
         if(todo.text&&state.visibilityFilter){
             actions.push(todo)
         }
         return todo.text||act.text;
     }
}
const getTodoVerfiy = (todos) => {
    return todos.addTodoVerfiy;
}

function mapStateToProps(state,ownProps) {
    var visibleTodos=visibleTodosSelector;
    return {
        verfiedResult:getTodoVerfiy(state),
        visibilityFilter:state.visibilityFilter,
        submitResult:getFormInfo( state.todos.present,state),
        todos:getVisibleTodos(state.todos.present, state.visibilityFilter)

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoAction:bindActionCreators(addTodo, dispatch),
        completeTodoAction:bindActionCreators(completeTodo, dispatch),
        setVisibilityFilterAtion:bindActionCreators(setVisibilityFilter, dispatch),
        //submmitTodoAction:bindActionCreators(submmitTodo, dispatch)
        //addTodoVerfiyAction:bindActionCreators(addTodoVerfiy, dispatch),
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(visibleTodosSelector,mapDispatchToProps)(App)