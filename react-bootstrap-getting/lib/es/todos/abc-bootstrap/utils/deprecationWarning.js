'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get3 = require('babel-runtime/helpers/get');

var _get4 = _interopRequireDefault(_get3);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports._resetWarned = _resetWarned;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message = void 0;

  if ((typeof oldname === 'undefined' ? 'undefined' : (0, _typeof3['default'])(oldname)) === 'object') {
    message = oldname.message;
  } else {
    message = oldname + ' is deprecated. Use ' + newname + ' instead.';

    if (link) {
      message += '\nYou can read more about it at ' + link;
    }
  }

  if (warned[message]) {
    return;
  }

  process.env.NODE_ENV !== "production" ? process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(false, message) : void 0 : void 0;
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (_Component) {
    (0, _inherits3['default'])(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      (0, _classCallCheck3['default'])(this, DeprecatedComponent);
      return (0, _possibleConstructorReturn3['default'])(this, (DeprecatedComponent.__proto__ || (0, _getPrototypeOf2['default'])(DeprecatedComponent)).apply(this, arguments));
    }

    (0, _createClass3['default'])(DeprecatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        deprecationWarning.apply(undefined, args);

        if ((0, _get4['default'])(DeprecatedComponent.prototype.__proto__ || (0, _getPrototypeOf2['default'])(DeprecatedComponent.prototype), 'componentWillMount', this)) {
          var _get2;

          for (var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            methodArgs[_key2] = arguments[_key2];
          }

          (_get2 = (0, _get4['default'])(DeprecatedComponent.prototype.__proto__ || (0, _getPrototypeOf2['default'])(DeprecatedComponent.prototype), 'componentWillMount', this)).call.apply(_get2, [this].concat(methodArgs));
        }
      }
    }]);
    return DeprecatedComponent;
  }(Component);
};

exports['default'] = deprecationWarning;
function _resetWarned() {
  warned = {};
}