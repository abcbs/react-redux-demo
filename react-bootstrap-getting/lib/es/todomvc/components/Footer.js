'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _FILTER_TITLES;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoFilters = require('../constants/TodoFilters');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3['default'])(_FILTER_TITLES, _TodoFilters.SHOW_ALL, 'All'), (0, _defineProperty3['default'])(_FILTER_TITLES, _TodoFilters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3['default'])(_FILTER_TITLES, _TodoFilters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

var Footer = function (_Component) {
  (0, _inherits3['default'])(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3['default'])(this, Footer);
    return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || (0, _getPrototypeOf2['default'])(Footer)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Footer, [{
    key: 'renderTodoCount',
    value: function renderTodoCount() {
      var activeCount = this.props.activeCount;

      var itemWord = activeCount === 1 ? 'item' : 'items';

      return _react2['default'].createElement(
        'span',
        { className: 'todo-count' },
        _react2['default'].createElement(
          'strong',
          null,
          activeCount || 'No'
        ),
        ' ',
        itemWord,
        ' left'
      );
    }
  }, {
    key: 'renderFilterLink',
    value: function renderFilterLink(filter) {
      var title = FILTER_TITLES[filter];
      var _props = this.props;
      var selectedFilter = _props.filter;
      var onShow = _props.onShow;


      return (
        /**
        <a className={classnames({ selected: filter === selectedFilter })}
           style={{ cursor: 'pointer' }}
           onClick={() => onShow(filter)}>
          {title}
        </a>**/
        _react2['default'].createElement(
          _reactRouter.Link,
          {
            to: filter === 'all' ? '' : filter,
            className: (0, _classnames2['default'])({ selected: filter === selectedFilter }),
            style: { cursor: 'pointer' },
            onClick: function onClick() {
              return onShow(filter);
            } },
          title
        )
      );
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      var _props2 = this.props;
      var completedCount = _props2.completedCount;
      var onClearCompleted = _props2.onClearCompleted;

      if (completedCount > 0) {
        return _react2['default'].createElement(
          'button',
          { className: 'clear-completed',
            onClick: onClearCompleted },
          'Clear completed'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        'footer',
        { className: 'footer' },
        this.renderTodoCount(),
        _react2['default'].createElement(
          'ul',
          { className: 'filters' },
          [_TodoFilters.SHOW_ALL, _TodoFilters.SHOW_ACTIVE, _TodoFilters.SHOW_COMPLETED].map(function (filter) {
            return _react2['default'].createElement(
              'li',
              { key: filter },
              _this2.renderFilterLink(filter)
            );
          })
        ),
        this.renderClearButton()
      );
    }
  }]);
  return Footer;
}(_react.Component);

Footer.propTypes = {
  completedCount: _react.PropTypes.number.isRequired,
  activeCount: _react.PropTypes.number.isRequired,
  filter: _react.PropTypes.string.isRequired,
  onClearCompleted: _react.PropTypes.func.isRequired,
  onShow: _react.PropTypes.func.isRequired
};

exports['default'] = Footer;