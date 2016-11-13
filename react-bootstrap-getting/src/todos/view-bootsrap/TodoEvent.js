import React , { PropTypes } from 'react'

import {ButtonGroup, Button,ButtonToolbar} from 'react-bootstrap'
import UndoRedoUtil from './UndoRedo'
let onAdd;
let sendData;
let TodoEvent = ({ onAddClick, onAddBtnName,enentEmitter }) => {
    //监听事件
    if(enentEmitter){
        enentEmitter.on('todos:adding', function(option,data) {
            console.log(option.type,option.description,data);
            sendData=data;
        });
    }
    if(onAddClick){
        onAdd=onAddClick;
    }
    return (
        <div className="container">
            <ButtonToolbar style={{ position: 'relative',float:'left', left:'10px'}}>
                <Button type="button" bsStyle="success"
                        onClick={handleClick}>
                    {onAddBtnName}
                </Button>
            </ButtonToolbar>
        </div>
)
};

function handleClick (e) {
    if (sendData) {
        onAdd(sendData);
    }
}

TodoEvent.propTypes = {
    onAddClick: PropTypes.func,
    onAddBtnName:PropTypes.string.isRequired,
};

export default TodoEvent