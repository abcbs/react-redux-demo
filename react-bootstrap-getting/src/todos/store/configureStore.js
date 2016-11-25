import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from '../framework/middleware/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

export default function configureStore(history, client, data) {
    // Sync dispatched route actions to the history
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = [createMiddleware(client), reduxRouterMiddleware, thunk];

    let finalCreateStore;
    // if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    //     const { persistState } = require('redux-devtools');
    //     const DevTools = require('../framework/devtools/DevTools');
    //     finalCreateStore = compose(
    //         applyMiddleware(...middleware),
    //         window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    //         persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    //     )(_createStore);
    // } else {
    //     finalCreateStore = applyMiddleware(...middleware)(_createStore);
    // }
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const reducer = require('../reducers').default;
    if (data) {
        data.pagination = Immutable.fromJS(data.pagination);
    }
    const store = finalCreateStore(reducer, data);

    // if (__DEVELOPMENT__ && module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         store.replaceReducer(require('../reducers'));
    //     });
    // }

    return store;
}