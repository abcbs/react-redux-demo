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

var _reactIntl = require('react-intl');

var _internationalize = require('../../abc-framework/international/internationalize');

var _internationalize2 = _interopRequireDefault(_internationalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    var authn = state.authentication || state['default'].authentication;
    var users = authn.authentication.user;
    return;
    {
        users: users;
    }
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({ fetchUsers: fetchUsers }, dispatch);
}), _dec2 = (0, _internationalize2['default'])(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
    (0, _inherits3['default'])(HomePage, _React$Component);

    function HomePage() {
        (0, _classCallCheck3['default'])(this, HomePage);
        return (0, _possibleConstructorReturn3['default'])(this, (HomePage.__proto__ || (0, _getPrototypeOf2['default'])(HomePage)).apply(this, arguments));
    }

    (0, _createClass3['default'])(HomePage, [{
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
            return _react2['default'].createElement(
                _AbcPage2['default'],
                { title: translate(messages.title),
                    router: 'home',
                    subTitle: translate(messages.subTitle) },
                _react2['default'].createElement(
                    _AbcContainer2['default'],
                    null,
                    _react2['default'].createElement(
                        'span',
                        { style: { position: 'absolute', display: 'inline-block' } },
                        _react2['default'].createElement(_abcBootstrap.Checkbox, { onClick: this.handleClick.bind(this) }),
                        _react2['default'].createElement('input', { type: 'checkbox' }),
                        _react2['default'].createElement('input', { type: 'checkbox' }),
                        _react2['default'].createElement('input', { type: 'checkbox' }),
                        _react2['default'].createElement(
                            _abcBootstrap.Label,
                            { bsStyle: 'abc', bsSize: 'bg' },
                            'test'
                        ),
                        _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement(
                                _abcBootstrap.Button,
                                { type: 'button', bsStyle: 'default', style: { display: 'inline' } },
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
                        ),
                        _react2['default'].createElement(
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
}(_react2['default'].Component), _class2.propTypes = {
    users: _react.PropTypes.array.isRequired,
    fetchUsers: _react.PropTypes.func.isRequired
}, _temp)) || _class) || _class);
exports['default'] = HomePage;