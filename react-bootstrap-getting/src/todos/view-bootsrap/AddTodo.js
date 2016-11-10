import React, { findDOMNode, Component, PropTypes } from 'react';
import {FormGroup, ControlLabel, HelpBlock,FormControl ,Panel,
    Button,Checkbox,Radio ,Glyphicon,InputGroup,Col,Form} from 'react-bootstrap'

import TodoDetail from './TodoDetail'

export default class AddTodo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {onAddClick} = this.props;
        return (
             <TodoDetail onAddClick={onAddClick}
                            formName="添加详细"
                            btnName="确定"
             />
        );
    }

}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired,

}