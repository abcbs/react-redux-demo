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
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
               <meta charset="utf-8"/>
               <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
               <title>Material-UI Example</title>
               <meta name="description" content="ABC-End-UI Example"/>
               <meta  name="viewport"
                       content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
                />

                <link rel="stylesheet" href="/build/css/app.css" />

                 <link rel="stylesheet" href="/external/home.css"/>

                {assets&&assets.styles&&Object.keys(assets.styles).map((style, key) =>
                    <link href={assets.styles[style]} key={key} media="screen, projection"
                          rel="stylesheet" type="text/css" charSet="UTF-8"/>
                )}

        </head>
            <body>
           {/* rendered React page */}
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
