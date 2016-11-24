import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory,createBrowserHistory } from 'react-router';
import App from '../containers/App';
// import AppRaw from '../containers/AppRaw';
import NotFoundPage from '../framework/ui/AbcNotFoundPage'
import IntroductionPage from '../frames/IntroductionPage'
import HomePage from '../frames/HomePage'
import info from '../framework/utils/logger'
import routes from './Rooter'
import { syncHistoryWithStore } from 'react-router-redux'

const Root = ({ store }) =>
{
    //const history = syncHistoryWithStore(browserHistory, store);
   //支持服务端渲染
    return (<Provider store={store}>
        <Router history={browserHistory}>
            <Route  path="/" component={App} />
            <Route  path="/app/:filter" component={App} />
            <Route  path="/home" component={HomePage} />
            <Route  path="/introduct" component={IntroductionPage} />
            <Route  path="*" component={NotFoundPage} />
        </Router>
    </Provider>);
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
