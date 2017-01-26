'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AbcContainerWrape = require('../abc-framework/ui/AbcContainerWrape');

var _AbcContainerWrape2 = _interopRequireDefault(_AbcContainerWrape);

var _AbcContainerFramePage = require('../abc-framework/ui/AbcContainerFramePage');

var _AbcContainerFramePage2 = _interopRequireDefault(_AbcContainerFramePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Introduct = _react2.default.createClass({
    displayName: 'Introduct',
    render: function render() {
        return _react2.default.createElement(
            _AbcContainerFramePage2.default,
            { title: '\u5C55\u793A\u4E92\u52A8', subTitle: '\u6B22\u8FCE\u5149\u4E34' },
            _react2.default.createElement(
                _AbcContainerWrape2.default,
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Hello,\u5546\u54C1\u4ECB\u7ECD'
                )
            )
        );
    }
});

(0, _reactDom.render)(_react2.default.createElement(Introduct, null), document.getElementById('introduct'));