'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbcPageFooter = require('./AbcPageFooter');

var _AbcPageFooter2 = _interopRequireDefault(_AbcPageFooter);

var _AbcPageHeader = require('./AbcPageHeader');

var _AbcPageHeader2 = _interopRequireDefault(_AbcPageHeader);

var _AbcNotFoundPage = require('./AbcNotFoundPage');

var _AbcNotFoundPage2 = _interopRequireDefault(_AbcNotFoundPage);

var _AbcNavMain = require('./AbcNavMain');

var _AbcNavMain2 = _interopRequireDefault(_AbcNavMain);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AbcPage = function (_Component) {
    (0, _inherits3['default'])(AbcPage, _Component);
    (0, _createClass3['default'])(AbcPage, [{
        key: 'getChildContext',
        value: function getChildContext() {}
    }]);

    function AbcPage(props, context) {
        (0, _classCallCheck3['default'])(this, AbcPage);
        return (0, _possibleConstructorReturn3['default'])(this, (AbcPage.__proto__ || (0, _getPrototypeOf2['default'])(AbcPage)).call(this, props, context));
    }

    (0, _createClass3['default'])(AbcPage, [{
        key: 'rederChildren',
        value: function rederChildren(children) {
            if (_react2['default'].Children.count(children) === 1) {
                return _react.Children.only(children);
            } else {
                return _react2['default'].createElement(_AbcNotFoundPage2['default'], { subTitle: '\u591A\u4E2A\u5B50\u5143\u7D20\u76EE\u524D\u4E0D\u652F\u6301' });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var router = _props.router;
            var title = _props.title;
            var subTitle = _props.subTitle;
            var theme = _props.theme;
            var other = (0, _objectWithoutProperties3['default'])(_props, ['children', 'router', 'title', 'subTitle', 'theme']);

            return _react2['default'].createElement(
                'span',
                other,
                _react2['default'].createElement(_AbcNavMain2['default'], { activePage: router }),
                _react2['default'].createElement(_AbcPageHeader2['default'], { title: title, subTitle: subTitle }),
                this.rederChildren(children),
                _react2['default'].createElement(_AbcPageFooter2['default'], null)
            );
        }
    }]);
    return AbcPage;
}(_react.Component);

exports['default'] = AbcPage;

AbcPage.defaultProps = {
    router: 'app',
    title: "ABC",
    theme: "marginPageTop"
};

AbcPage.propTypes = {
    router: _react.PropTypes.string.isRequired,
    title: _react.PropTypes.string.isRequired,
    subTitle: _react.PropTypes.string,
    theme: _react.PropTypes.string,
    children: _react.PropTypes.element.isRequired
};
AbcPage.childContextTypes = {};