import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import favicon from 'serve-favicon';
//压缩
import compression from 'compression';
import httpProxy from 'http-proxy';
import http from 'http';
import path from 'path';

//客户端组件
import createStore from './redux/create';
//客户端请求封装
import ApiClient from './helpers/ApiClient';
//create an express middleware to render your pages on the server
//html page markup
import Html from './helpers/Html';
import PrettyError from 'pretty-error';

//服务端与客户端一致性路由
import { match } from 'react-router';
//路由的状态管理
import { syncHistoryWithStore } from 'react-router-redux';
//异步装载
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
//路由历史在内存中的存储，主要用于服务端
import createHistory from 'react-router/lib/createMemoryHistory';

import {Provider} from 'react-redux';

//
import getRoutes from './routes';

const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort;
const pretty = new PrettyError();

//
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(Express.static(path.join(__dirname, '..', 'static')));

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/ws', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/ws'});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});
//
// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});

//will be used in express_application.use(...)
app.use((req, res) => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  //请求解析
  const client = new ApiClient(req);
  //请求历史存储
  const memoryHistory = createHistory(req.originalUrl);
  //初始化Redux
  const store = createStore(memoryHistory, client);
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(memoryHistory, store);
  // for react-router example of determining current page by URL take a look at this:
  // https://github.com/halt-hammerzeit/webapp/blob/master/code/server/webpage%20rendering.js
  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
      ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location: req.originalUrl },
    (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      //服务端
      // 1. load data
      loadOnServer({...renderProps, store, helpers: {client}}).then(() => {
        //2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps`
        const component = (
          <Provider store={store} key="provider">
            <ReduxAsyncConnect {...renderProps} />
          </Provider>
        );

        res.status(200);

        global.navigator = {userAgent: req.headers['user-agent']};
        //3. render the Redux initial data into the server markup
        // for react-router example of determining current page by URL take a look at this:
        // https://github.com/halt-hammerzeit/webapp/blob/master/code/server/webpage%20rendering.js
        //response.send('<!doctype html>\n' +
        //React.renderToString(<Html assets={webpack_isomorphic_tools.assets()} component={page_component} store={flux_store}/>))
        //}
        res.send('<!doctype html>\n' +
          ReactDOM.renderToString(
            <Html assets={webpackIsomorphicTools.assets()}
                  component={component} store={store}/>));
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
