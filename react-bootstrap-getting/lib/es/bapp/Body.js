'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

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

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grid = require('react-bootstrap/lib/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Jumbotron = require('react-bootstrap/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _LearnMore = require('./LearnMore');

var _LearnMore2 = _interopRequireDefault(_LearnMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Body = function (_React$Component) {
  (0, _inherits3['default'])(Body, _React$Component);

  function Body() {
    (0, _classCallCheck3['default'])(this, Body);
    return (0, _possibleConstructorReturn3['default'])(this, (Body.__proto__ || (0, _getPrototypeOf2['default'])(Body)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Body, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _Jumbotron2['default'],
          null,
          _react2['default'].createElement(
            _Grid2['default'],
            null,
            _react2['default'].createElement(
              'h1',
              null,
              'Hello, world!'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.'
            ),
            _react2['default'].createElement(_LearnMore2['default'], null)
          )
        ),
        _react2['default'].createElement(
          _Grid2['default'],
          null,
          _react2['default'].createElement(
            _Row2['default'],
            null,
            _react2['default'].createElement(
              _Col2['default'],
              { md: 4 },
              _react2['default'].createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  _Button2['default'],
                  null,
                  'View details \xBB'
                )
              )
            ),
            _react2['default'].createElement(
              _Col2['default'],
              { md: 4 },
              _react2['default'].createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  _Button2['default'],
                  null,
                  'View details \xBB'
                )
              )
            ),
            _react2['default'].createElement(
              _Col2['default'],
              { md: 4 },
              _react2['default'].createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.'
              ),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  _Button2['default'],
                  null,
                  'View details \xBB'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Body;
}(_react2['default'].Component);

exports['default'] = Body;