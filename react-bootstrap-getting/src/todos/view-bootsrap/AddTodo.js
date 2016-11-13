import React, { findDOMNode, Component, PropTypes } from 'react';

import TodoDetail from './TodoDetail'
import TodoEvent from '../view-bootsrap/TodoEvent'

//使用事件监听方式实现组件中的消息传递
var EventEmitter = require('events').EventEmitter;
var enentEmitter=new EventEmitter;
export default class AddTodo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {todos ,onAddClick} = this.props;
        return (
            <div>
                <TodoDetail  onAddClick={onAddClick}
                            formName="添加详细"
                            enentEmitter={enentEmitter}

                />
                <TodoEvent  onAddClick={onAddClick} onAddBtnName="确定" enentEmitter={enentEmitter}/>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired,

}