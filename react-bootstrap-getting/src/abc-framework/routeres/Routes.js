import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import authorization from '../authorize/authorize'
import AbcMainPage from '../ui/AbcMainPage'
//
import Not_found        from '../../abc-ui/errors/notfound'
import Unauthenticated  from '../../abc-ui/errors/unauthenticated'
import Unauthorized     from '../../abc-ui/errors/unauthorized'
import Generic_error    from '../../abc-ui/errors/generic'

import App from '../../todos/containers/App';
//测试页
import NotFoundPage from '../ui/AbcNotFoundPage'
import IntroductionPage from '../../todos/frames/IntroductionPage'
import HomePage from '../../todos/frames/HomePage'

const authorize = (component, is_authorized) => authorization(is_authorized)(component);

export default (//component={authorize(IntroductionPage)}
    <Route path="/" component={AbcMainPage}>
        <IndexRoute component={App}/>
        <Route  path="/app/:filter" component={App} />
        <Route  path="/home" component={HomePage} />
        <Route  path="/introduct" component={IntroductionPage} />
        <Route path="unauthenticated" status={401} component={Unauthenticated}/>
        <Route path="unauthorized"    status={403} component={Unauthorized}/>
        <Route path="error"           status={500} component={Generic_error}/>
        <Route  path="*" component={Not_found} />
    </Route>
);