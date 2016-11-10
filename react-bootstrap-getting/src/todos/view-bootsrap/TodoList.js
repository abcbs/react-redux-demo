import React, { findDOMNode, Component,PropTypes  } from 'react';
import {ListGroupItem, ListGroup,Panel,HelpBlock} from 'react-bootstrap'
import '../../todomvc/css/index.css'
export default class TodoList extends Component {
    
    handleTodo=
            (index) => this.props.onTodoClick(index);

    render() {
        return (
        <ListGroup className="todo-list" componentClass="ul">

            {this.props.todos.map((todo, index) =>
                 // <li>
                <ListGroupItem
                    bsClass ="list-group-item"
                    onClick={//this.handleTodo.bind(this)
                        () => this.props.onTodoClick(index)
                        }
                               key={index}
                     // bsStyle="info"
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: todo.completed ? 'default' : 'pointer',
                        background :"none",
                        border:"none"
                      }
                    }
                >
                    {todo.text}
                  </ListGroupItem>
                   // <label>{todo.text}</label>
                 // </li>
                //
                //          <label>{todo.text}</label>
                // </li>
            )}
        </ListGroup>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
     todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired

    //todos: PropTypes.array.isRequired,
}