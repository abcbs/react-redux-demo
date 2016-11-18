'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbcNavMain = require('./AbcNavMain');

var _AbcNavMain2 = _interopRequireDefault(_AbcNavMain);

var _AbcPageHeader = require('./AbcPageHeader');

var _AbcPageHeader2 = _interopRequireDefault(_AbcPageHeader);

var _AbcPageFooter = require('./AbcPageFooter');

var _AbcPageFooter2 = _interopRequireDefault(_AbcPageFooter);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = _react2.default.createClass({
    displayName: 'NotFoundPage',
    render: function render() {
        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_AbcNavMain2.default, { activePage: '' }),
            _react2.default.createElement(_AbcPageHeader2.default, {
                title: '404',
                subTitle: this.props.subTitle }),
            _react2.default.createElement(_AbcPageFooter2.default, null)
        );
    }
});

NotFoundPage.propTypes = {
    code: _react.PropTypes.string,
    subTitle: _react.PropTypes.string,
    message: _react.PropTypes.string
};

NotFoundPage.defaultProps = {
    subTitle: "ABC-Error"
};

exports.default = NotFoundPage;