import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory as createHistory } from 'history';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
