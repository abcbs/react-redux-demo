import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';


export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };


  render() {
    const {assets, component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    // const head = Helmet.rewind();
      let browserInitScriptObj = {
          __html: `
    
        // console noop shim for IE8/9
        (function (w) {
          var noop = function () {};
          if (!w.console) {
            w.console = {};
            ['log', 'info', 'warn', 'error'].forEach(function (method) {
              w.console[method] = noop;
            });
         }
        }(window));`
      };

      let head = {
          __html: `
        <title>ABC-Endpoint</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Material-UI Example</title>
        <meta name="description" content="ABC-End-UI Example">
        <!-- Use minimum-scale=1 to enable GPU rasterization -->
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
        >
        <!--
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
        -->
        <link rel="stylesheet" href="/build/css/app.css" />
        <!--<link rel="stylesheet" href="/external/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.css" />-->
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv-printshiv.min.js"></script>
    
        <![endif]-->
        <link rel="stylesheet" href="/external/home.css">
            {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}
        `
      };
      let background = {
          __html: `
            <div class="pos images">
              <span class="top a1" >Hello Beijing</span>
              <span class="top a2">Hello China</span>
              <span class="top a3">Hello World</span>
          </div>
        `
      };

      return (
          <html>
          <head dangerouslySetInnerHTML={head} />
          <body>
      
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
            
          <div dangerouslySetInnerHTML={background} />
          <div id="root" dangerouslySetInnerHTML={{__html: content}}/>
          {/* Flux store data will be reloaded into the store on the client */}
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${serialize(store.getState())};`}} charSet="UTF-8"/>
          {/* javascripts */}
          <script src="/external/requirejs/require.js"></script>
          <script src="/external/requirejs.config.js"></script>

          </body>
          </html>
      );
  }
}