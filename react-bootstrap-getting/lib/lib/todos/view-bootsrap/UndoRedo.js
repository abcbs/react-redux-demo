'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndoRedo = function UndoRedo(_ref) {
    var canUndo = _ref.canUndo;
    var canRedo = _ref.canRedo;
    var onUndo = _ref.onUndo;
    var onRedo = _ref.onRedo;
    return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
            _reactBootstrap.ButtonToolbar,
            { style: { position: 'relative',
                    float: 'left', right: '-70px', top: '-33px' } },
            _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: onUndo, disabled: !canUndo },
                '\u64A4\u9500'
            ),
            _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: onRedo, disabled: !canRedo },
                '\u6062\u590D'
            )
        )
    );
};

UndoRedo.propTypes = {
    onUndo: _react.PropTypes.func.isRequired,
    onRedo: _react.PropTypes.func.isRequired,
    canUndo: _react.PropTypes.bool.isRequired,
    canRedo: _react.PropTypes.bool.isRequired
};

exports.default = UndoRedo;