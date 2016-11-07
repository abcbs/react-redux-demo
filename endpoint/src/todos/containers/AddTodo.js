import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        //当调用action创建函数时，一般会触发一个dispatch
        dispatch(addTodo(input.value));
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};
//或者如果你想省略`mapDispatchToProps`，你可以通过传递一个`dispatch`作为一个props：
//只注入dispatch，不监听store
AddTodo = connect()(AddTodo);

export default AddTodo
