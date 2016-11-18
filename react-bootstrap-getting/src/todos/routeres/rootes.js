import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
// import AppRaw from '../containers/AppRaw';
import NotFoundPage from '../framework/ui/AbcNotFoundPage'
import IntroductionPage from '../frames/IntroductionPage'
import HomePage from '../frames/HomePage'
import NAV_LINKS from './NavLinks'
import info from '../framework/utils/logger'
const Root = ({ store }) =>
{
    const navEntries=Object.entries(NAV_LINKS);
    const navKeys=Object.keys(NAV_LINKS);
    const navValues=Object.values(NAV_LINKS);
    info('navEntries,',navEntries);
    info("navKeys,",navKeys);
    info("navValues,",navValues);

    return (<Provider store={store}>
        <Router history={browserHistory} path="/" component={App}
        >
            <IndexRoute component={App} />
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
