'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AbcContainer = require('../todos/framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _AbcPage = require('../todos/framework/ui/AbcPage');

var _AbcPage2 = _interopRequireDefault(_AbcPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Introduct = _react2.default.createClass({
    displayName: 'Introduct',
    render: function render() {
        return _react2.default.createElement(
            _AbcPage2.default,
            { title: '\u5C55\u793A\u4E92\u52A8', subTitle: '\u6B22\u8FCE\u5149\u4E34' },
            _react2.default.createElement(
                _AbcContainer2.default,
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