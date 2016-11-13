import React, { findDOMNode, Component,PropTypes  } from 'react';
import {ListGroupItem, ListGroup,ControlLabel,HelpBlock,Checkbox,FormGroup} from 'react-bootstrap'
import '../../todomvc/css/index.css'
import AbcContainer from '../frames/AbcContainer'
export default class TodoList extends Component {
    
    handleTodo=
            (index) => this.props.onTodoClick(index);

    render() {
        return (
          <AbcContainer isMovedTop={false}>
            <ListGroup className="todo-list" componentClass="ul" >

                {this.props.todos.map((todo, index) =>
                    <li>
                         <input type="checkbox" />
                        <label className="control-label">{todo.text}</label>
                    </li>
                    //
                    //          <label>{todo.text}</label>
                    // </li>
                )}
            </ListGroup>
        </AbcContainer>
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