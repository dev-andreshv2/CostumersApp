import {createStore, compose , applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers'


//const reducers =state => state;
//export const store =createStore(reducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  ;


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store =createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)) ) ;