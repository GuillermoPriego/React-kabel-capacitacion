import { createStore, compose, applyMiddleware } from 'redux';
import feedReducer from './feeds/feed.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const localStorageUpdater = store => next => action => {
    const result = next(action);
    const nextState = store.getState();

    localStorage.setItem("feeds", JSON.stringify(nextState));

    return result;
};

const store = createStore(
    feedReducer,
    composeEnhancers(applyMiddleware(localStorageUpdater, logger))
);

export default store;