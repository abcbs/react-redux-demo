'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Home',
    render: function render() {
        console.log("test");
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'React Router Tutorial'
            ),
            _react2.default.createElement(
                'ul',
                { role: 'nav' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/main' },
                        'main'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/toolbar' },
                        'ToolBar'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/autocomplete' },
                        'autocomplete'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/avatar' },
                        'avatar'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/badge' },
                        'badge'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/bainBaseTheme' },
                        'bainBaseTheme'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/drawer' },
                        'drawer'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/drawer' },
                        'drawer'
                    )
                )
            ),
            this.props.children
        );
    }
});