import React , { PropTypes } from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoRedo from '../view-bootsrap/UndoRedo'

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
};

const UndoRedoUtil = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export default UndoRedoUtil
