'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../../todomvc/css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AbcContainer = function (_Component) {
    (0, _inherits3['default'])(AbcContainer, _Component);

    function AbcContainer() {
        (0, _classCallCheck3['default'])(this, AbcContainer);
        return (0, _possibleConstructorReturn3['default'])(this, (AbcContainer.__proto__ || (0, _getPrototypeOf2['default'])(AbcContainer)).apply(this, arguments));
    }

    (0, _createClass3['default'])(AbcContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var isMovedTop = _props.isMovedTop;
            var isContainer = _props.isContainer;
            var others = (0, _objectWithoutProperties3['default'])(_props, ['children', 'isMovedTop', 'isContainer']);

            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: (0, _classnames2['default'])({
                        'container': this.props.isContainer,
                        'marginPageTop': this.props.isMovedTop
                    })
                }),
                _react.Children.only(children)
            );
        }
    }]);
    return AbcContainer;
}(_react.Component);

exports['default'] = AbcContainer;


AbcContainer.propTypes = {
    children: _react.PropTypes.element.isRequired,
    isMovedTop: _react.PropTypes.bool.isRequired,
    isContainer: _react.PropTypes.bool.isRequired
};

AbcContainer.defaultProps = {
    isMovedTop: true,
    isContainer: true
};

AbcContainer.childContextTypes = {};