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

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

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

var AutoCompleteExampleSimple = function (_React$Component) {
    (0, _inherits3['default'])(AutoCompleteExampleSimple, _React$Component);

    function AutoCompleteExampleSimple(props, context) {
        (0, _classCallCheck3['default'])(this, AutoCompleteExampleSimple);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AutoCompleteExampleSimple.__proto__ || (0, _getPrototypeOf2['default'])(AutoCompleteExampleSimple)).call(this, props, context));

        _this.handleUpdateInput = function (value) {
            _this.setState({
                dataSource: [value, value + value, value + value + value]
            });
        };

        _this.state = {
            dataSource: []
        };
        return _this;
    }

    (0, _createClass3['default'])(AutoCompleteExampleSimple, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: muiTheme
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_AutoComplete2['default'], {
                    hintText: 'Type anything',
                    dataSource: this.state.dataSource,
                    onUpdateInput: this.handleUpdateInput,
                    muiTheme: muiTheme,
                    prepareStyles: styles.container
                }),
                _react2['default'].createElement(_AutoComplete2['default'], {
                    hintText: 'Type anything',
                    dataSource: this.state.dataSource,
                    onUpdateInput: this.handleUpdateInput,
                    floatingLabelText: 'Full width',
                    fullWidth: true,
                    muiTheme: muiTheme,
                    prepareStyles: styles.container
                })
            );
        }
    }]);
    return AutoCompleteExampleSimple;
}(_react2['default'].Component);

exports['default'] = AutoCompleteExampleSimple;

AutoCompleteExampleSimple.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object.isRequired
};