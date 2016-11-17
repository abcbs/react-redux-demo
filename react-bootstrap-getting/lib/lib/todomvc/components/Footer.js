'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FILTER_TITLES;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoFilters = require('../constants/TodoFilters');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FILTER_TITLES = (_FILTER_TITLES = {}, _defineProperty(_FILTER_TITLES, _TodoFilters.SHOW_ALL, 'All'), _defineProperty(_FILTER_TITLES, _TodoFilters.SHOW_ACTIVE, 'Active'), _defineProperty(_FILTER_TITLES, _TodoFilters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'renderTodoCount',
    value: function renderTodoCount() {
      var activeCount = this.props.activeCount;

      var itemWord = activeCount === 1 ? 'item' : 'items';

      return _react2.default.createElement(
        'span',
        { className: 'todo-count' },
        _react2.default.createElement(
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
        _react2.default.createElement(
          _reactRouter.Link,
          {
            to: filter === 'all' ? '' : filter,
            className: (0, _classnames2.default)({ selected: filter === selectedFilter }),
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
        return _react2.default.createElement(
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

      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        this.renderTodoCount(),
        _react2.default.createElement(
          'ul',
          { className: 'filters' },
          [_TodoFilters.SHOW_ALL, _TodoFilters.SHOW_ACTIVE, _TodoFilters.SHOW_COMPLETED].map(function (filter) {
            return _react2.default.createElement(
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

exports.default = Footer;