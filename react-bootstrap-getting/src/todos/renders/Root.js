import React from 'react';

const Root = React.createClass({
  statics: {
    /**
     * Get the list of pages that are renderable
     *
     * @returns {Array}
     */
    getPages() {
      return [
        'index.html',
        'introduction.html',
        'getting-started.html',
        'components.html',
        'support.html'
      ];
    }
  },
  //上下文方式访问
  childContextTypes: {
    metadata: React.PropTypes.object
  },
  //上下文方式
  getChildContext() {
    return {metadata: Root.propData};
  },

  render() {
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    let browserInitScriptObj = {
      __html:
        `window.ASSET_BASE_URL = ${JSON.stringify(Root.assetBaseUrl)};
        window.PROP_DATA = ${JSON.stringify(Root.propData)};
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
      __html: `<title>ABC-Endpoint</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${Root.assetBaseUrl}/assets/bundle.css" rel="stylesheet">
        <link rel="stylesheet" href="${Root.assetBaseUrl}/external/home.css">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
        <![endif]-->`

    };

    return (
      <html>
        <head dangerouslySetInnerHTML={head} />

        <body>
          {this.props.children}

          <div class="pos images">
            <span class="top a1" >Hello Beijing</span>
            <span class="top a2">Hello China</span>
            <span class="top a3">Hello World</span>
          </div>
          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={`${Root.assetBaseUrl}/external/requirejs/require.js`} />
          <script src={`${Root.assetBaseUrl}/external/requirejs.config.js`} />

        </body>
      </html>
    );
  }
});


export default Root;
