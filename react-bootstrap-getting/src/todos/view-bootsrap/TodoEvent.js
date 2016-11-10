import React , { PropTypes } from 'react'
import {ButtonGroup, Button,ButtonToolbar} from 'react-bootstrap'
let TodoEvent = ({ onAddClick, onAddBtnName }) => (
    <ButtonToolbar style={{ position: 'relative',float:'left', left:'10px'}}>
        <Button type="button" bsStyle="success"
                onClick={e =>onAddClick(e)}>
            {onAddBtnName}
        </Button>
    </ButtonToolbar>
);

TodoEvent.propTypes = {
    onAddClick: PropTypes.func,
    onAddBtnName:PropTypes.string.isRequired
};

export default TodoEvent