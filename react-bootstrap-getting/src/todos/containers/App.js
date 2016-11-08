import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
    //原来的没有加工过的函数
    renderRaw() {
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                         console.log('add todo', text)
                } />
                <TodoList
                    todos={[{
                        text: 'Use Redux',
                        completed: true
                    }, {
                    text: 'Learn to connect it to React',
                         completed: false
                    }]}
                    onTodoClick={todo =>
                         console.log('todo clicked', todo)
                } />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter =>
                        console.log('filter change', filter)
                } />
            </div>
        );
    }

    render() {
        // Injected by connect() call:
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div>{
                    //在Redux=Store中没有注册Dispatch处理的Action，
                    // 默认为Redux原的dipatch
                 }
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                     } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                     } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                 } />
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
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps.filter)
        // previously was getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)