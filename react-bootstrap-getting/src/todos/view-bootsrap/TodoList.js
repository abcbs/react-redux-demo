import React, { findDOMNode, Component, PropTypes } from 'react';
import {ListGroupItem, ListGroup,Panel} from 'react-bootstrap'

export default class TodoList extends Component {
    render() {
        return (

        <ListGroup>
            {this.props.todos.map((todo, index) =>
            /**
                <ListGroupItem
                    key={index}
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none',
                        cursor: this.props.completed ? 'default' : 'pointer'}}
                    onClick={() => this.props.onTodoClick(index)} >
                    {todo}
                </ListGroupItem>
                **/
                <ListGroupItem onClick={
                () => this.props.onTodoClick(index)}
                               key={index}
                 bsStyle="info"
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