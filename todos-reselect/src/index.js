import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


//const store = createStore(reducer);
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

function fetchSecretSauce() {
    return fetch('https://www.google.com/search?q=secret+sauce');
}

function makeASandwich(forPerson, secretSauce) {
    return {
        type: 'MAKE_SANDWICH',
        forPerson,
        secretSauce
    };
}
function apologize(fromPerson, toPerson, error) {
    return {
        type: 'APOLOGIZE',
        fromPerson,
        toPerson,
        error
    };
}

function withdrawMoney(amount) {
    return {
        type: 'WITHDRAW',
        amount
    };
}
store.dispatch(withdrawMoney(100));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


