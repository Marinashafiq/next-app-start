import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './combineReducers';
import rootSaga from './rootSaga'
// ======== Compose redux dev tool with applyMiddleware ========
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;// create the saga middleware

const saga = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

// Run the saga
saga.run(rootSaga);

export default store;