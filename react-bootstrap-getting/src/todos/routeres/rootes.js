import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
import AppRaw from '../containers/AppRaw';
import NotFoundPage from '../frames/NotFoundPage'
import IntroductionPage from '../frames/IntroductionPage'
import HomePage from '../frames/HomePage'
const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory} path="/" component={App}
        >
            <IndexRoute component={App} />
            <Route  path="/:filter" component={App} />
            <Route  path="/home/pages" component={HomePage} />
            <Route  path="/introduction/pages" component={IntroductionPage} />
            <Route  path="*" component={NotFoundPage} />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
