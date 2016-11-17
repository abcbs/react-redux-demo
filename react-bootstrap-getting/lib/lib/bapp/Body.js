'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Jumbotron2.default,
          null,
          _react2.default.createElement(
            _Grid2.default,
            null,
            _react2.default.createElement(
              'h1',
              null,
              'Hello, world!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.'
            ),
            _react2.default.createElement(_LearnMore2.default, null)
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          null,
          _react2.default.createElement(
            _Row2.default,
            null,
            _react2.default.createElement(
              _Col2.default,
              { md: 4 },
              _react2.default.createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Adipisicing ratione incidunt eaque expedita rerum porro inventore. Nihil sit ipsam iure officiis sit eos at quibusdam natus dignissimos natus dolore! Vel doloremque ipsa alias nihil harum laborum necessitatibus rerum?'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'View details \xBB'
                )
              )
            ),
            _react2.default.createElement(
              _Col2.default,
              { md: 4 },
              _react2.default.createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Sit quia nemo quis enim provident porro eaque accusamus tenetur provident aliquid commodi? Velit nesciunt maiores obcaecati totam praesentium sint vitae exercitationem quaerat maxime iusto et! Consequatur aspernatur sit impedit.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  null,
                  'View details \xBB'
                )
              )
            ),
            _react2.default.createElement(
              _Col2.default,
              { md: 4 },
              _react2.default.createElement(
                'h2',
                null,
                'Heading'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Dolor aliquid dolores perferendis repellendus cum! Quam maiores blanditiis cupiditate voluptatibus voluptas aliquid nisi placeat tempora. Rem debitis accusamus pariatur officia corrupti. Architecto fuga reiciendis quos rem hic? Suscipit dignissimos.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  _Button2.default,
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
}(_react2.default.Component);

exports.default = Body;