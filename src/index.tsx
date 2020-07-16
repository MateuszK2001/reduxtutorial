import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, Store, applyMiddleware, Middleware, compose} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import thunk from 'redux-thunk';
import Actions from './store/actions/actionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   CTR: counterReducer,
   DATA:  resultReducer
});


const actionTypeEnumToString = (action: any): any => typeof action.type === 'number' && Actions[action.type] ? ({
  type: Actions[action.type],
  payload: action.payload,
}) : action;
const composeEnhancers = composeWithDevTools({ actionSanitizer: actionTypeEnumToString });



const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

