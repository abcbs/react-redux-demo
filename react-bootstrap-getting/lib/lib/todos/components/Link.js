'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterLink = require('../routeres/FilterLink');

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var active = _ref.active;
  var linkName = _ref.linkName;
  var children = _ref.children;
  var onClick = _ref.onClick;

  if (active) {
    return _react2.default.createElement(
      'span',
      null,
      children
    );
  }
  return _react2.default.createElement(_FilterLink2.default, { filter: linkName, onClick: onClick, children: children })
  /**
  <a href="#"
     onClick={
       (e)=> {
        e.preventDefault();
        if(onClick){
          onClick()
          }
      }
      }
     >
    {children}
  </a>
   **/
  ;
};

Link.propTypes = {
  active: _react.PropTypes.bool.isRequired,
  linkName: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func.isRequired
};

exports.default = Link;