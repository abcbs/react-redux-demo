'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _entries3 = require('lodash/entries');

var _entries4 = _interopRequireDefault(_entries3);

var _reactBootstrap = require('react-bootstrap');

var _NavLinks = require('../../routeres/NavLinks');

var _NavLinks2 = _interopRequireDefault(_NavLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

Object.entries = _entries2['default'] || _entries4['default'];

function Wrapper(_ref) {
    var children = _ref.children;

    return children;
}

var propTypes = {
    activePage: _react2['default'].PropTypes.string
};

function NavMain(_ref2) {
    var activePage = _ref2.activePage;

    return _react2['default'].createElement(
        _reactBootstrap.Navbar,
        { className: 'container',
            staticTop: true
        },
        _react2['default'].createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2['default'].createElement(
                _reactBootstrap.Navbar.Brand,
                null,
                _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'ABC-Endpoint'
                )
            ),
            _react2['default'].createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2['default'].createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2['default'].createElement(
                _reactBootstrap.Nav,
                null,
                (0, _entries2['default'])(_NavLinks2['default']).map(function (_ref3) {
                    var _ref4 = (0, _slicedToArray3['default'])(_ref3, 2);

                    var linkName = _ref4[0];
                    var _ref4$ = _ref4[1];
                    var path = _ref4$.path;
                    var title = _ref4$.title;
                    return _react2['default'].createElement(
                        Wrapper,
                        { key: linkName },
                        _react2['default'].createElement(
                            'li',
                            { className: linkName === activePage ? 'active' : null },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: path },
                                title
                            )
                        )
                    );
                })
            )
        )
    );
}

NavMain.propTypes = propTypes;

exports['default'] = NavMain;