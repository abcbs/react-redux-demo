'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _AbcNotFoundPage = require('../framework/ui/AbcNotFoundPage');

var _AbcNotFoundPage2 = _interopRequireDefault(_AbcNotFoundPage);

var _IntroductionPage = require('../frames/IntroductionPage');

var _IntroductionPage2 = _interopRequireDefault(_IntroductionPage);

var _HomePage = require('../frames/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AbcNavMain = require('../framework/ui/AbcNavMain');

var _AbcNavMain2 = _interopRequireDefault(_AbcNavMain);

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _Rooter = require('./Rooter');

var _Rooter2 = _interopRequireDefault(_Rooter);

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Root = function Root(_ref) {
    var store = _ref.store;

    //const history = syncHistoryWithStore(browserHistory, store);
    //支持服务端渲染
    //  return (<Provider store={store}>
    //      <Router history={browserHistory}>
    //          <Route  path="/" component={NavMain} />
    //          <Route  path="/app/:filter" component={App} />
    //          <Route  path="/home" component={HomePage} />
    //          <Route  path="/introduct" component={IntroductionPage} />
    //          <Route  path="*" component={NotFoundPage} />
    //      </Router>
    //  </Provider>);
    return _react2['default'].createElement(
        _reactRedux.Provider,
        { store: store },
        _react2['default'].createElement(
            _reactRouter.Router,
            { history: _reactRouter.browserHistory },
            _Rooter2['default']
        )
    );
};
// import AppRaw from '../containers/AppRaw';


Root.propTypes = {
    store: _react.PropTypes.object.isRequired
};

exports['default'] = Root;