var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');
var app = new (require('express'))();
var port = 3000;
var client=require('./src/todos/renders/renders');
var compiler = webpack(config.default);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.default.output.publicPath }));

app.use(webpackHotMiddleware(compiler));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// });

app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use('/external', express.static(path.join(__dirname, './external')));

app.use('/',client);
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
