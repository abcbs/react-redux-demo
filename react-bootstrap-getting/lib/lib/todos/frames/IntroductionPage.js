'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

// import Preloading      from '../../abc-ui/preloading'
// import Snackbar        from '../../abc-ui/snackbar'

// import 'bootstrap/less/theme.less'
// import 'bootstrap/less/bootstrap.less';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbcContainer = require('../../abc-framework/ui/AbcContainer');

var _AbcContainer2 = _interopRequireDefault(_AbcContainer);

var _AbcPage = require('../../abc-framework/ui/AbcPage');

var _AbcPage2 = _interopRequireDefault(_AbcPage);

var _index = require('../../abc-framework/react-isomorphic-render/index.es6');

var _redux = require('../../abc-framework/react-isomorphic-render/redux');

var _reactRedux = require('react-redux');

var _redux2 = require('redux');

var _reactBootstrap = require('react-bootstrap');

var _spinner = require('../../abc-ui/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

require('../../../resource/styles/abc-components/styles/style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// fetches the list of users from the server
function fetchUsers() {
    // console.log("http,",http);
    return {
        promise: function promise(http) {
            return http.get('/api/users/current').then(function (ids) {
                return console.log("idx,", ids);
            });
        },
        events: ['GET_USERS_PENDING', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE']
    };
}
//
// @preload(({ dispatch }) => dispatch(fetchUsers))
var IntroductionPage = (_dec = (0, _reactRedux.connect)(function (state) {
    //.default.authentication.authentication
    var authn = state.authentication || state.default.authentication;
    var users = authn.authentication.user;
    return;
    {
        users: users;
    }
}, function (dispatch) {
    return (0, _redux2.bindActionCreators)({ fetchUsers: fetchUsers }, dispatch);
}), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(IntroductionPage, _Component);

    function IntroductionPage() {
        _classCallCheck(this, IntroductionPage);

        return _possibleConstructorReturn(this, (IntroductionPage.__proto__ || Object.getPrototypeOf(IntroductionPage)).apply(this, arguments));
    }

    _createClass(IntroductionPage, [{
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("e,", e.target.value);
            this.props.fetchUsers();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _AbcPage2.default,
                { title: '\u5C55\u793A\u4E92\u52A8', subTitle: '\u6B22\u8FCE\u5149\u4E34' },
                _react2.default.createElement(
                    _AbcContainer2.default,
                    null,
                    _react2.default.createElement(
                        'span',
                        { style: { position: 'absolute', display: 'inline-block' } },
                        _react2.default.createElement(_spinner2.default, null),
                        'Hello,\u5546\u54C1\u4ECB\u7ECD,Hello,\u5546\u54C1\u4ECB\u7ECD',
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { onClick: this.handleClick.bind(this)
                                },
                                'Refresh'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'deleteUsers',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var count;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this.props.deleteUsers();

                            case 3:
                                count = _context.sent;

                                alert('Deleted ' + count + ' users');
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                alert(_context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function deleteUsers() {
                return _ref.apply(this, arguments);
            }

            return deleteUsers;
        }()
    }]);

    return IntroductionPage;
}(_react.Component), _class2.propTypes = {
    users: _react.PropTypes.array.isRequired,
    fetchUsers: _react.PropTypes.func.isRequired
}, _temp)) || _class);
exports.default = IntroductionPage;