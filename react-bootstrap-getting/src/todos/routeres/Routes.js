import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
import NotFoundPage from '../framework/ui/AbcNotFoundPage'
import IntroductionPage from '../frames/IntroductionPage'
import HomePage from '../frames/HomePage'
import AbcMainPage from '../framework/ui/AbcMainPage'

export default (
    <Route path="/" component={AbcMainPage}>
        <IndexRoute component={App}/>
        <Route  path="/app/:filter" component={App} />
        <Route  path="/home" component={HomePage} />
        <Route  path="/introduct" component={IntroductionPage} />
        <Route  path="*" component={NotFoundPage} />
    </Route>
);