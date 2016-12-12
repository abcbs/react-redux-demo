'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _abcBootstrap = require('../../abc-bootstrap');

var _AbcSection = require('../../abc-framework/ui/AbcSection');

var _AbcSection2 = _interopRequireDefault(_AbcSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var UndoRedo = function UndoRedo(_ref) {
    var canUndo = _ref.canUndo;
    var canRedo = _ref.canRedo;
    var onUndo = _ref.onUndo;
    var onRedo = _ref.onRedo;
    return _react2['default'].createElement(
        _abcBootstrap.ButtonToolbar,
        { style: { position: 'relative',
                float: 'left', right: '-70px', top: '-0px' } },
        _react2['default'].createElement(
            _abcBootstrap.Button,
            { onClick: onUndo, disabled: !canUndo },
            '\u64A4\u9500'
        ),
        _react2['default'].createElement(
            _abcBootstrap.Button,
            { onClick: onRedo, disabled: !canRedo },
            '\u6062\u590D'
        )
    );
};
// @section()
// export default class UndoRedo extends React.Component{
//
//     render(){
//         return (<ButtonToolbar style={{ position: 'relative',
//             float:'left', right:'-70px', top:'-0px'}}>
//                 <Button onClick={onUndo} disabled={!canUndo}>
//                     撤销
//                 </Button>
//                 <Button onClick={onRedo} disabled={!canRedo}>
//                     恢复
//                 </Button>
//             </ButtonToolbar>
//         )
//     }
// }
//
UndoRedo.propTypes = {
    onUndo: _react.PropTypes.func.isRequired,
    onRedo: _react.PropTypes.func.isRequired,
    canUndo: _react.PropTypes.bool.isRequired,
    canRedo: _react.PropTypes.bool.isRequired
};

var _UndoRedo = (0, _AbcSection2['default'])()(UndoRedo);

exports['default'] = _UndoRedo;