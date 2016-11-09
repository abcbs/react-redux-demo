import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
//import AddTodo from '../components/AddTodo'
//import TodoList from '../components/TodoList'
//import Footer from '../components/Footer'
import { bindActionCreators } from 'redux'
import AddTodo from '../view-bootsrap/AddTodo'
import TodoList from '../view-bootsrap/TodoList'
import Footer from '../view-bootsrap/Footer'
import Header from '../view-bootsrap/Header'
import FormExample from '../view-bootsrap/FormExample'
import {ListGroupItem, ListGroup,Panel} from 'react-bootstrap'
import {visibleTodosSelector} from '../selectors/TodoSelectors'
import UndoRedoUtil from './UndoRedo'
//

class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter ,
            addTodoAction,completeTodoAction,setVisibilityFilterAtion} = this.props;
        return (
            <div style={{margin:20+'px'}}>
                <Header/>
                <FormExample />
                <AddTodo
                    onAddClick={addTodoAction} />
                <UndoRedoUtil/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={completeTodoAction} />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={setVisibilityFilterAtion} />

            </div>
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
    ]).isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        addTodoAction:bindActionCreators(addTodo, dispatch),
        completeTodoAction:bindActionCreators(completeTodo, dispatch),
        setVisibilityFilterAtion:bindActionCreators(setVisibilityFilter, dispatch)
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(visibleTodosSelector,mapDispatchToProps)(App)