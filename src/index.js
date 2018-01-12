import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';   // https://www.npmjs.com/package/redux-promise

import './index.css';
import App from './components/App';
import reducers from "./reducers";


// What is "Middleware"?
//
// Middleware is a function that takes an action and depending on the action's type and payload.
// It could choose to let action pass through, manipulate, log, or stop the action
// before it reaches any reducer.

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
