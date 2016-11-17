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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _colors = require('material-ui/styles/colors');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
}; /**
    * In this file, we create a React component
    * which incorporates components provided by Material-UI.
    */


var muiTheme = (0, _getMuiTheme2['default'])({
  palette: {
    accent1Color: _colors.deepOrange500
  }
});

var Main = function (_Component) {
  (0, _inherits3['default'])(Main, _Component);

  function Main(props, context) {
    (0, _classCallCheck3['default'])(this, Main);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Main.__proto__ || (0, _getPrototypeOf2['default'])(Main)).call(this, props, context));

    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.handleTouchTap = _this.handleTouchTap.bind(_this);

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3['default'])(Main, [{
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      this.setState({
        open: false
      });
    }
  }, {
    key: 'handleTouchTap',
    value: function handleTouchTap() {
      this.setState({
        open: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var standardActions = _react2['default'].createElement(_FlatButton2['default'], {
        label: 'Ok',
        primary: true,
        onTouchTap: this.handleRequestClose
      });

      return _react2['default'].createElement(
        _MuiThemeProvider2['default'],
        { muiTheme: muiTheme },
        _react2['default'].createElement(
          'div',
          { style: styles.container },
          _react2['default'].createElement(
            _Dialog2['default'],
            {
              open: this.state.open,
              title: 'Super Secret Password',
              actions: standardActions,
              onRequestClose: this.handleRequestClose
            },
            '1-2-3-4-5'
          ),
          _react2['default'].createElement(
            'h1',
            null,
            'Material-UI'
          ),
          _react2['default'].createElement(
            'h2',
            null,
            'example project'
          ),
          _react2['default'].createElement(_RaisedButton2['default'], {
            label: 'Super Secret Password',
            secondary: true,
            onTouchTap: this.handleTouchTap
          })
        )
      );
    }
  }]);
  return Main;
}(_react.Component);

exports['default'] = Main;