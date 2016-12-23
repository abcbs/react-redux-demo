'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

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

var _redux2 = require('../../abc-framework/react-isomorphic-render/redux');

var _AbcPageContainer = require('../../abc-framework/ui/AbcPageContainer');

var _AbcPageContainer2 = _interopRequireDefault(_AbcPageContainer);

var _reactRouter = require('react-router');

var _reduxRouter = require('redux-router');

var _errorInfo = require('../../abc-framework/ui/errorInfo');

var _errorInfo2 = _interopRequireDefault(_errorInfo);

var _ModuleURL = require('../../abc-framework/routeres/ModuleURL');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fetchUsers() {
    return {
        promise: function promise(http) {
            return http.get(_ModuleURL.user_manager_url).then(function (ids) {
                return console.log("ids,", ids);
            }, function (err) {
                console.log("没有网络，或者网络过慢，请稍等再试,", err);
                (0, _errorInfo2.default)(" 没有网络，或者网络过慢，请稍等再试");
                throw new Error("Final,NO Net");
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
    // const authn=state.authentication||state.default.authentication;
    // const users=authn.user;
    var authn = state.authentication || state.default.authentication;
    var users = authn.authentication.user;
    return;
    {
        users: users;
    }
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({ fetchUsers: fetchUsers,
        push: _reduxRouter.push }, dispatch);
}), _dec2 = (0, _redux2.preload)(function (_ref) {
    var dispatch = _ref.dispatch;
    return dispatch(fetchUsers());
}), _dec3 = (0, _internationalize2.default)(), _dec4 = (0, _AbcPageContainer2.default)({ title: messages.title, subTitle: messages.subTitle }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("e,", e.target.value);
            //this.props.fetchUsers();
            // this.centex("/app")
            _reactRouter.browserHistory.push("/app");
            // goto('/app')
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                null,
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
                    'form',
                    { onSubmit: this.handleClick.bind(this) },
                    _react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
                    _react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Go'
                    )
                ),
                _react2.default.createElement(
                    _abcBootstrap.Button,
                    { onClick: this.handleClick.bind(this) },
                    'Refresh'
                )
            );
        }
        //
        // render() {
        //     //var root=$&&$("root");
        //     //label-primary-bg
        //     const { translate } = this.props;
        //     const title=translate(messages.title);
        //     return (
        //         <AbcPage title={translate(messages.title)}
        //                  router="home"
        //                  subTitle={translate(messages.subTitle)} >
        //             <AbcContainer>
        //                     <span style={{ position: 'absolute' ,display:'inline-block'}}>
        //                         <Checkbox onClick={this.handleClick.bind(this)}></Checkbox>
        //                         <input type="checkbox"/>
        //                         <input type="checkbox"/>
        //                         <input type="checkbox"/>
        //                         <Label bsStyle="abc" bsSize="bg">test</Label>
        //                         {
        //                             // this.props.translate("home.title")
        //                         }
        //                         <span>
        //                          <Button type="button" bsStyle="default" style={{display:'inline'}}>
        //                          确定
        //                         </Button><Badge bsStyle="info" bsSize="abc">4</Badge>
        //                             </span>
        //                         <ButtonToolbar style={{ position: 'relative'}}>
        //                             Messages<Badge bsStyle="abc">17</Badge>
        //                             </ButtonToolbar>
        //
        //                          <Button onClick={
        //                                 this.handleClick.bind(this)}>Refresh</Button>
        //                         </span>
        //             </AbcContainer>
        //
        //         </AbcPage>
        //     );
        // }

    }]);

    return HomePage;
}(_react2.default.Component), _class2.propTypes = {
    users: _react.PropTypes.array,
    fetchUsers: _react.PropTypes.func,
    loading: _react.PropTypes.bool,
    loaded: _react.PropTypes.bool,
    loading_error: _react.PropTypes.object
}, _class2.contextTypes = {
    intl: _react.PropTypes.object
}, _temp)) || _class) || _class) || _class) || _class);
exports.default = HomePage;