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

var _AbcContainer = require('../framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _AbcPage = require('../framework/ui/AbcPage');

var _AbcPage2 = _interopRequireDefault(_AbcPage);

var _abcBootstrap = require('../abc-bootstrap');

require('bootstrap/less/theme.less');

require('bootstrap/less/bootstrap.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var HomePage = function (_React$Component) {
    (0, _inherits3['default'])(HomePage, _React$Component);

    function HomePage() {
        (0, _classCallCheck3['default'])(this, HomePage);
        return (0, _possibleConstructorReturn3['default'])(this, (HomePage.__proto__ || (0, _getPrototypeOf2['default'])(HomePage)).apply(this, arguments));
    }

    (0, _createClass3['default'])(HomePage, [{
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("e,", e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var root = $("root");
            //label-primary-bg
            return _react2['default'].createElement(
                _AbcPage2['default'],
                { title: '\u9996\u9875', router: 'home', subTitle: '\u6B22\u8FCE\u5149\u4E34' },
                _react2['default'].createElement(
                    _AbcContainer2['default'],
                    null,
                    _react2['default'].createElement(
                        'div',
                        null,
                        _react2['default'].createElement(_abcBootstrap.Checkbox, { onClick: this.handleClick.bind(this) }),
                        _react2['default'].createElement(
                            _abcBootstrap.Label,
                            { bsStyle: 'abc', bsSize: 'bg' },
                            'test'
                        ),
                        _react2['default'].createElement(
                            _abcBootstrap.ButtonToolbar,
                            { style: { position: 'relative', display: 'inline-block' } },
                            _react2['default'].createElement(
                                _abcBootstrap.Button,
                                { type: 'button', bsStyle: 'default', style: { position: 'relative' } },
                                '\u786E\u5B9A'
                            ),
                            _react2['default'].createElement(
                                _abcBootstrap.Badge,
                                { bsStyle: 'info', bsSize: 'abc' },
                                '4'
                            )
                        ),
                        _react2['default'].createElement(
                            _abcBootstrap.ButtonToolbar,
                            { style: { position: 'relative' } },
                            'Messages',
                            _react2['default'].createElement(
                                _abcBootstrap.Badge,
                                { bsStyle: 'abc' },
                                '17'
                            )
                        )
                    )
                )
            );
        }
    }]);
    return HomePage;
}(_react2['default'].Component);

exports['default'] = HomePage;