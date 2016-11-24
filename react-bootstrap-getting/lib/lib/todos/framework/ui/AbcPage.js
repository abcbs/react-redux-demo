'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

require('../../../styles/css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbcPage = function (_Component) {
    _inherits(AbcPage, _Component);

    _createClass(AbcPage, [{
        key: 'getChildContext',
        value: function getChildContext() {}
    }]);

    function AbcPage(props, context) {
        _classCallCheck(this, AbcPage);

        return _possibleConstructorReturn(this, (AbcPage.__proto__ || Object.getPrototypeOf(AbcPage)).call(this, props, context));
    }

    _createClass(AbcPage, [{
        key: 'rederChildren',
        value: function rederChildren(children) {
            if (_react2.default.Children.count(children) === 1) {
                return _react.Children.only(children);
            } else {
                return _react2.default.createElement(_AbcNotFoundPage2.default, { subTitle: '\u591A\u4E2A\u5B50\u5143\u7D20\u76EE\u524D\u4E0D\u652F\u6301' });
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

            var other = _objectWithoutProperties(_props, ['children', 'router', 'title', 'subTitle', 'theme']);

            return _react2.default.createElement(
                'span',
                other,
                _react2.default.createElement(_AbcPageHeader2.default, { title: title, subTitle: subTitle }),
                this.rederChildren(children),
                _react2.default.createElement(_AbcPageFooter2.default, null)
            );
        }
    }]);

    return AbcPage;
}(_react.Component);

exports.default = AbcPage;

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