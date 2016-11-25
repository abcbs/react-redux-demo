import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import { Router, browserHistory ,applyRouterMiddleware} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

import ApiClient from '../utils/ApiClient'
import configureStore from '../store/configureStore'
import routes from '../routeres/Routes'

const Client = ({ data }) =>
{

    const client = new ApiClient();
    // const _browserHistory = useScroll(() => browserHistory)();
    const store = configureStore(browserHistory, client, data);
    const history = syncHistoryWithStore(browserHistory, store);

    const component = (
        <Router  render={applyRouterMiddleware(useScroll())}
                 history={history}>
            {routes}
        </Router>
    );
    return (<Provider store={store} key="provider">
        {component}
    </Provider>);
}


export default Client;
