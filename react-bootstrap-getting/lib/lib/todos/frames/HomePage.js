'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbcContainer = require('../../abc-framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _AbcPage = require('../../abc-framework/ui/AbcPage');

var _AbcPage2 = _interopRequireDefault(_AbcPage);

var _abcBootstrap = require('../../abc-bootstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

require('bootstrap/less/theme.less');

require('bootstrap/less/bootstrap.less');

var _reactIntl = require('react-intl');

var _internationalize = require('../../abc-framework/international/internationalize');

var _internationalize2 = _interopRequireDefault(_internationalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fetchUsers() {
    // console.log("http,",http);
    return {
        promise: function promise(http) {
            return http.get('/api/users/current').then(function (ids) {
                return console.log("ids,", ids);
            });
        },
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    };
}

var messages = (0, _reactIntl.defineMessages)({
    title: {
        id: 'home.title',
        description: '首页配置',
        defaultMessage: '首页'
    },
    subTitle: {
        id: 'home.subTitle',
        description: '首页子标题',
        defaultMessage: '欢迎光临'
    }
});

var HomePage = (_dec = (0, _reactRedux.connect)(function (state) {
    //.default.authentication.authentication
    var authn = state.authentication || state.default.authentication;
    var users = authn.authentication.user;
    return;
    {
        users: users;
    }
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({ fetchUsers: fetchUsers }, dispatch);
}), _dec2 = (0, _internationalize2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("e,", e.target.value);
            this.props.fetchUsers();
        }
    }, {
        key: 'render',
        value: function render() {
            //var root=$&&$("root");
            //label-primary-bg
            var translate = this.props.translate;

            var title = translate(messages.title);
            return _react2.default.createElement(
                _AbcPage2.default,
                { title: translate(messages.title),
                    router: 'home',
                    subTitle: translate(messages.subTitle) },
                _react2.default.createElement(
                    _AbcContainer2.default,
                    null,
                    _react2.default.createElement(
                        'span',
                        { style: { position: 'absolute', display: 'inline-block' } },
                        _react2.default.createElement(_abcBootstrap.Checkbox, { onClick: this.handleClick.bind(this) }),
                        _react2.default.createElement('input', { type: 'checkbox' }),
                        _react2.default.createElement('input', { type: 'checkbox' }),
                        _react2.default.createElement('input', { type: 'checkbox' }),
                        _react2.default.createElement(
                            _abcBootstrap.Label,
                            { bsStyle: 'abc', bsSize: 'bg' },
                            'test'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _abcBootstrap.Button,
                                { type: 'button', bsStyle: 'default', style: { display: 'inline' } },
                                '\u786E\u5B9A'
                            ),
                            _react2.default.createElement(
                                _abcBootstrap.Badge,
                                { bsStyle: 'info', bsSize: 'abc' },
                                '4'
                            )
                        ),
                        _react2.default.createElement(
                            _abcBootstrap.ButtonToolbar,
                            { style: { position: 'relative' } },
                            'Messages',
                            _react2.default.createElement(
                                _abcBootstrap.Badge,
                                { bsStyle: 'abc' },
                                '17'
                            )
                        ),
                        _react2.default.createElement(
                            _abcBootstrap.Button,
                            { onClick: this.handleClick.bind(this) },
                            'Refresh'
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component), _class2.propTypes = {
    users: _react.PropTypes.array.isRequired,
    fetchUsers: _react.PropTypes.func.isRequired
}, _temp)) || _class) || _class);
exports.default = HomePage;