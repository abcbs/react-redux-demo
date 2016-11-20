/* eslint no-console: 0 */

import 'colors';
import express from 'express';
import httpProxy from 'http-proxy';
import ip from 'ip';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import metadata from './generate-metadata';

const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;

const app = express();

if (development) {//开发方式
  const proxy = httpProxy.createProxyServer();
  //获取配置端口,端口在命名行设置
  const webpackPort = process.env.WEBPACK_DEV_PORT;

  const target = `http://${ip.address()}:${webpackPort}`;
  Root.assetBaseUrl = target;

  app.get('/assets/*', (req, res) => {
    proxy.web(req, res, { target });
  });

  proxy.on('error', e => {
    console.log('Could not connect to webpack proxy'.red);
    console.log(e.toString().red);
  });

  console.log('Prop data generation started:'.green);
  //
  metadata().then(props => {
    console.log('Prop data generation finished:'.green);
    Root.propData = props;
    //
    app.use(function renderApp(req, res) {
      res.header('Access-Control-Allow-Origin', target);
      res.header('Access-Control-Allow-Headers', 'X-Requested-With');
      //获取数据可以调用action，routes在服务器端的处理参考react-router server rendering，
      // 在服务器端用一个match方法将拿到的request url匹配到我们之前定义的routes，解析成和客户端一致的props对象传递给组件。
      const location = req.url;
      match({routes, location}, (error, redirectLocation, renderProps) => {
        const html = ReactDOMServer.renderToString(
          <RouterContext {...renderProps} />
        );
        res.send('<!doctype html>' + html);
      });
    });
  });
} else {
  app.use(express.static(path.join(__dirname, '../docs-built')));
}

app.listen(port, () => {
  console.log(`Server started at:`);
  console.log(`- http://localhost:${port}`);
  console.log(`- http://${ip.address()}:${port}`);
});
