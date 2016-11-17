'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavDropdown = require('react-bootstrap/lib/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var HeaderNavigation = function (_React$Component) {
  (0, _inherits3['default'])(HeaderNavigation, _React$Component);

  function HeaderNavigation() {
    (0, _classCallCheck3['default'])(this, HeaderNavigation);
    return (0, _possibleConstructorReturn3['default'])(this, (HeaderNavigation.__proto__ || (0, _getPrototypeOf2['default'])(HeaderNavigation)).apply(this, arguments));
  }

  (0, _createClass3['default'])(HeaderNavigation, [{
    key: 'render',
    value: function render() {
      var brand = _react2['default'].createElement(
        'a',
        { href: '#' },
        'Project Name'
      );
      return (
        //const navbarInstance = (
        _react2['default'].createElement(
          _Navbar2['default'],
          { inverse: true },
          _react2['default'].createElement(
            _Navbar2['default'].Header,
            null,
            _react2['default'].createElement(
              _Navbar2['default'].Brand,
              null,
              _react2['default'].createElement(
                'a',
                { href: '#' },
                'React-Bootstrap'
              )
            ),
            _react2['default'].createElement(_Navbar2['default'].Toggle, null)
          ),
          _react2['default'].createElement(
            _Navbar2['default'].Collapse,
            null,
            _react2['default'].createElement(
              _Nav2['default'],
              null,
              _react2['default'].createElement(
                _NavItem2['default'],
                { eventKey: 1, href: '#' },
                'Link'
              ),
              _react2['default'].createElement(
                _NavItem2['default'],
                { eventKey: 2, href: '#' },
                'Link'
              ),
              _react2['default'].createElement(
                _NavDropdown2['default'],
                { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
                _react2['default'].createElement(
                  _MenuItem2['default'],
                  { eventKey: 3.1 },
                  'Action'
                ),
                _react2['default'].createElement(
                  _MenuItem2['default'],
                  { eventKey: 3.2 },
                  'Another action'
                ),
                _react2['default'].createElement(
                  _MenuItem2['default'],
                  { eventKey: 3.3 },
                  'Something else here'
                ),
                _react2['default'].createElement(_MenuItem2['default'], { divider: true }),
                _react2['default'].createElement(
                  _MenuItem2['default'],
                  { eventKey: 3.3 },
                  'Separated link'
                )
              )
            ),
            _react2['default'].createElement(
              _Nav2['default'],
              { pullRight: true },
              _react2['default'].createElement(
                _NavItem2['default'],
                { eventKey: 1, href: '#' },
                'Link Right'
              ),
              _react2['default'].createElement(
                _NavItem2['default'],
                { eventKey: 2, href: '#' },
                'Link Right'
              )
            )
          )
        )
      );
    }
  }]);
  return HeaderNavigation;
}(_react2['default'].Component);

exports['default'] = HeaderNavigation;