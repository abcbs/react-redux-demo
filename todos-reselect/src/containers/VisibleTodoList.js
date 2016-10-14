
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

import { getVisibleTodos } from '../selectors'

const mapStateToProps = (state) => {
  return {
    //todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: getVisibleTodos(state)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
/**
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import  makeGetVisibleTodos  from '../selectors/todoSelectors'

const makeMapStateToProps = () => {
  const getVisibleTodos = makeGetVisibleTodos();
  const mapStateToProps = (state, props) => {
    return {
      todos: getVisibleTodos(state, props)
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
 **/