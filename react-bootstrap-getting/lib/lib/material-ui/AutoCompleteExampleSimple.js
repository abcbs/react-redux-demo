'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoComplete = require('material-ui/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _colors = require('material-ui/styles/colors');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200
    }
};

var muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        accent1Color: _colors.deepOrange500
    },
    prepareStyles: {
        textAlign: 'center',
        paddingTop: 200
    }
});

var AutoCompleteExampleSimple = function (_React$Component) {
    _inherits(AutoCompleteExampleSimple, _React$Component);

    function AutoCompleteExampleSimple(props, context) {
        _classCallCheck(this, AutoCompleteExampleSimple);

        var _this = _possibleConstructorReturn(this, (AutoCompleteExampleSimple.__proto__ || Object.getPrototypeOf(AutoCompleteExampleSimple)).call(this, props, context));

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

    _createClass(AutoCompleteExampleSimple, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: muiTheme
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AutoComplete2.default, {
                    hintText: 'Type anything',
                    dataSource: this.state.dataSource,
                    onUpdateInput: this.handleUpdateInput,
                    muiTheme: muiTheme,
                    prepareStyles: styles.container
                }),
                _react2.default.createElement(_AutoComplete2.default, {
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
}(_react2.default.Component);

exports.default = AutoCompleteExampleSimple;

AutoCompleteExampleSimple.childContextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};