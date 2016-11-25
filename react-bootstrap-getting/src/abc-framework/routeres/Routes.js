import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import App from '../../todos/containers/App';
import NotFoundPage from '../ui/AbcNotFoundPage'
import IntroductionPage from '../../todos/frames/IntroductionPage'
import HomePage from '../../todos/frames/HomePage'
import AbcMainPage from '../ui/AbcMainPage'

export default (
    <Route path="/" component={AbcMainPage}>
        <IndexRoute component={App}/>
        <Route  path="/app/:filter" component={App} />
        <Route  path="/home" component={HomePage} />
        <Route  path="/introduct" component={IntroductionPage} />
        <Route  path="*" component={NotFoundPage} />
    </Route>
);