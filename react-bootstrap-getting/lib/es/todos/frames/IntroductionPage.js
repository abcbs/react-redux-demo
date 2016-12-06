'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    var authn = state.authentication || state['default'].authentication;
    var users = authn.authentication.user;
    return;
    {
        users: users;
    }
}, function (dispatch) {
    return (0, _redux2.bindActionCreators)({ fetchUsers: fetchUsers }, dispatch);
}), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3['default'])(IntroductionPage, _Component);

    function IntroductionPage() {
        (0, _classCallCheck3['default'])(this, IntroductionPage);
        return (0, _possibleConstructorReturn3['default'])(this, (IntroductionPage.__proto__ || (0, _getPrototypeOf2['default'])(IntroductionPage)).apply(this, arguments));
    }

    (0, _createClass3['default'])(IntroductionPage, [{
        key: 'handleClick',
        value: function handleClick(e) {
            console.log("e,", e.target.value);
            this.props.fetchUsers();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _AbcPage2['default'],
                { title: '\u5C55\u793A\u4E92\u52A8', subTitle: '\u6B22\u8FCE\u5149\u4E34' },
                _react2['default'].createElement(
                    _AbcContainer2['default'],
                    null,
                    _react2['default'].createElement(
                        'span',
                        { style: { position: 'absolute', display: 'inline-block' } },
                        _react2['default'].createElement(_spinner2['default'], null),
                        'Hello,\u5546\u54C1\u4ECB\u7ECD,Hello,\u5546\u54C1\u4ECB\u7ECD',
                        _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
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
            var _ref = (0, _asyncToGenerator3['default'])(_regenerator2['default'].mark(function _callee() {
                var count;
                return _regenerator2['default'].wrap(function _callee$(_context) {
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
exports['default'] = IntroductionPage;