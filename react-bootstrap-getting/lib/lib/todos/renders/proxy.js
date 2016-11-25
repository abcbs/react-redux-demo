'use strict';

require('colors');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _ip = require('ip');

var _ip2 = _interopRequireDefault(_ip);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _Render = require('./Render');

var _Render2 = _interopRequireDefault(_Render);

var _logger = require('../framework/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var development = process.env.NODE_ENV !== 'production';
//压缩

var port = process.env.PORT || 3000;

var app = (0, _express2.default)();
var repoRoot = _path2.default.resolve(__dirname, '../../');

// which prevents the need for extensions
// app.set('view engine', 'jade');

// set views for error and 404 pages
// app.set('views', repoRoot + '/build');
var dist = _path2.default.join(repoRoot, '/dist');
var external = _path2.default.join(repoRoot, '/external');

var build = _path2.default.join(repoRoot, '/build');

app.use((0, _compression2.default)());
(0, _logger2.default)("dist,", dist);
(0, _logger2.default)("external,", external);

app.use('/dist', _express2.default.static(dist));
app.use('/external', _express2.default.static(external));
app.use('/build', _express2.default.static(build));

app.use(_Render2.default);
app.use(function (err, req, res, next) {
    // log it
    if (!module.parent) console.error(err.stack);
    // error page
    if (err) {
        console.error(err);
    }

    res.status(500).end('Server Error or Loading');
});

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==>browser.", port, port);
    }
});