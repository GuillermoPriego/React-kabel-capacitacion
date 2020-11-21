import { createStore } from 'redux'
import feedReducer from './feeds/feed.reducer'

const store = createStore(
    feedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;