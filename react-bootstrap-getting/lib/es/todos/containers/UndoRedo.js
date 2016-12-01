'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxUndo = require('redux-undo');

var _reactRedux = require('react-redux');

var _UndoRedo = require('../view-bootsrap/UndoRedo');

var _UndoRedo2 = _interopRequireDefault(_UndoRedo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var todo = state.todos || state['default'].todos;
  return {
    canUndo: todo.past.length > 0,
    canRedo: todo.future.length > 0
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onUndo: function onUndo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    onRedo: function onRedo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    }
  };
};

var UndoRedoUtil = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UndoRedo2['default']);

exports['default'] = UndoRedoUtil;