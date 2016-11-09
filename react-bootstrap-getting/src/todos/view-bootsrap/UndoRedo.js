import React , { PropTypes } from 'react'
import {ButtonGroup, Button,ButtonToolbar} from 'react-bootstrap'
let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <ButtonToolbar style={{ position: 'relative',float:'right', top:'-33px'}}>
        <Button onClick={onUndo} disabled={!canUndo}>
            撤销
        </Button>
        <Button onClick={onRedo} disabled={!canRedo}>
            恢复
        </Button>
    </ButtonToolbar>
);

UndoRedo.propTypes = {
    onUndo: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired,
    canUndo: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired
};

export default UndoRedo