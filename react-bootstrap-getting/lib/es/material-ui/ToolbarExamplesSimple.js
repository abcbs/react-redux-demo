'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = require('material-ui/Toolbar');

var _colors = require('material-ui/styles/colors');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

var muiTheme = (0, _getMuiTheme2['default'])({
  palette: {
    accent1Color: _colors.deepOrange500
  },
  prepareStyles: {
    textAlign: 'center',
    paddingTop: 200
  }
});

var ToolbarExamplesSimple = function (_React$Component) {
  (0, _inherits3['default'])(ToolbarExamplesSimple, _React$Component);
  (0, _createClass3['default'])(ToolbarExamplesSimple, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: muiTheme
      };
    }
  }]);

  function ToolbarExamplesSimple(props) {
    (0, _classCallCheck3['default'])(this, ToolbarExamplesSimple);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ToolbarExamplesSimple.__proto__ || (0, _getPrototypeOf2['default'])(ToolbarExamplesSimple)).call(this, props));

    _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    };

    _this.state = {
      value: 3
    };
    return _this;
  }

  (0, _createClass3['default'])(ToolbarExamplesSimple, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _Toolbar.Toolbar,
        null,
        _react2['default'].createElement(
          _Toolbar.ToolbarGroup,
          { firstChild: true },
          _react2['default'].createElement(
            _DropDownMenu2['default'],
            { value: this.state.value, onChange: this.handleChange },
            _react2['default'].createElement(_MenuItem2['default'], { value: 1, primaryText: 'All Broadcasts' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 2, primaryText: 'All Voice' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 3, primaryText: 'All Text' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 4, primaryText: 'Complete Voice' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 5, primaryText: 'Complete Text' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 6, primaryText: 'Active Voice' }),
            _react2['default'].createElement(_MenuItem2['default'], { value: 7, primaryText: 'Active Text' })
          )
        ),
        _react2['default'].createElement(
          _Toolbar.ToolbarGroup,
          null,
          _react2['default'].createElement(_Toolbar.ToolbarTitle, { text: 'Options' }),
          _react2['default'].createElement(_FontIcon2['default'], { className: 'muidocs-icon-custom-sort' }),
          _react2['default'].createElement(_Toolbar.ToolbarSeparator, null),
          _react2['default'].createElement(_RaisedButton2['default'], { label: 'Create Broadcast', primary: true }),
          _react2['default'].createElement(
            _IconMenu2['default'],
            {
              iconButtonElement: _react2['default'].createElement(
                _IconButton2['default'],
                { touch: true },
                _react2['default'].createElement(_expandMore2['default'], null)
              )
            },
            _react2['default'].createElement(_MenuItem2['default'], { primaryText: 'Download' }),
            _react2['default'].createElement(_MenuItem2['default'], { primaryText: 'More Info' })
          )
        )
      );
    }
  }]);
  return ToolbarExamplesSimple;
}(_react2['default'].Component);

exports['default'] = ToolbarExamplesSimple;


ToolbarExamplesSimple.childContextTypes = {
  muiTheme: _react2['default'].PropTypes.object.isRequired
};