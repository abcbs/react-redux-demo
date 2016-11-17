'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNavigation = function (_React$Component) {
  _inherits(HeaderNavigation, _React$Component);

  function HeaderNavigation() {
    _classCallCheck(this, HeaderNavigation);

    return _possibleConstructorReturn(this, (HeaderNavigation.__proto__ || Object.getPrototypeOf(HeaderNavigation)).apply(this, arguments));
  }

  _createClass(HeaderNavigation, [{
    key: 'render',
    value: function render() {
      var brand = _react2.default.createElement(
        'a',
        { href: '#' },
        'Project Name'
      );
      return (
        //const navbarInstance = (
        _react2.default.createElement(
          _Navbar2.default,
          { inverse: true },
          _react2.default.createElement(
            _Navbar2.default.Header,
            null,
            _react2.default.createElement(
              _Navbar2.default.Brand,
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'React-Bootstrap'
              )
            ),
            _react2.default.createElement(_Navbar2.default.Toggle, null)
          ),
          _react2.default.createElement(
            _Navbar2.default.Collapse,
            null,
            _react2.default.createElement(
              _Nav2.default,
              null,
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 1, href: '#' },
                'Link'
              ),
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 2, href: '#' },
                'Link'
              ),
              _react2.default.createElement(
                _NavDropdown2.default,
                { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 3.1 },
                  'Action'
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 3.2 },
                  'Another action'
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 3.3 },
                  'Something else here'
                ),
                _react2.default.createElement(_MenuItem2.default, { divider: true }),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { eventKey: 3.3 },
                  'Separated link'
                )
              )
            ),
            _react2.default.createElement(
              _Nav2.default,
              { pullRight: true },
              _react2.default.createElement(
                _NavItem2.default,
                { eventKey: 1, href: '#' },
                'Link Right'
              ),
              _react2.default.createElement(
                _NavItem2.default,
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
}(_react2.default.Component);

exports.default = HeaderNavigation;