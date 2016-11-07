import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../reducers/todos'

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        {
          //设置属性值
          //
          }
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

//组件的属性可以接受任意值，字符串、对象、函数等等都可以。
//有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。
App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//将state.todos绑定到props的todos
function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
