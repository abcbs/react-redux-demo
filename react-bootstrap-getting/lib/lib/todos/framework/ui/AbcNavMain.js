'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _entries = require('lodash/entries');

var _entries2 = _interopRequireDefault(_entries);

var _reactBootstrap = require('react-bootstrap');

var _NavLinks = require('../../routeres/NavLinks');

var _NavLinks2 = _interopRequireDefault(_NavLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.entries = Object.entries || _entries2.default;

function Wrapper(_ref) {
    var children = _ref.children;

    return children;
}

var propTypes = {
    activePage: _react2.default.PropTypes.string
};

function NavMain(_ref2) {
    var activePage = _ref2.activePage;

    return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { className: 'container',
            staticTop: true
        },
        _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            _react2.default.createElement(
                _reactBootstrap.Navbar.Brand,
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    'ABC-Endpoint'
                )
            ),
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
                _reactBootstrap.Nav,
                null,
                Object.entries(_NavLinks2.default).map(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2);

                    var linkName = _ref4[0];
                    var _ref4$ = _ref4[1];
                    var path = _ref4$.path;
                    var title = _ref4$.title;
                    return _react2.default.createElement(
                        Wrapper,
                        { key: linkName },
                        _react2.default.createElement(
                            'li',
                            { className: linkName === activePage ? 'active' : null },
                            _react2.default.createElement(
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

exports.default = NavMain;