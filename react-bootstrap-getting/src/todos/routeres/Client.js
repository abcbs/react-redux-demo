import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory,createBrowserHistory } from 'react-router';
import App from '../containers/App';
// import AppRaw from '../containers/AppRaw';
import NotFoundPage from '../framework/ui/AbcNotFoundPage'
import IntroductionPage from '../frames/IntroductionPage'
import HomePage from '../frames/HomePage'
import AbcNavMain from '../framework/ui/AbcNavMain'
import info from '../framework/utils/logger'
import routes from './Routes'
import { syncHistoryWithStore } from 'react-router-redux'

const Client = ({ store }) =>
{
    //const history = syncHistoryWithStore(browserHistory, store);
   //支持服务端渲染
   //  return (<Provider store={store}>
    //      <Router history={browserHistory}>
    //          <Route  path="/" component={NavMain} />
    //          <Route  path="/app/:filter" component={App} />
    //          <Route  path="/home" component={HomePage} />
    //          <Route  path="/introduct" component={IntroductionPage} />
    //          <Route  path="*" component={NotFoundPage} />
    //      </Router>
    //  </Provider>);
    return (<Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>);
}

Client.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Client;
