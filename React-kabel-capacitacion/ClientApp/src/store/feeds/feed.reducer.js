import * as types from './feed.types';

const storedState = localStorage.getItem("feeds");

const initialState = storedState && JSON.parse(storedState) ? JSON.parse(storedState) : {
    selected: null, feeds: []
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FEED:
            {
                const existingFeed = state.feeds.find(f => f.name === action.payload.name);
                if (existingFeed) return { ...state };

                const newFeeds = [...state.feeds, action.payload];
                return { ...state, feeds: newFeeds };
            }
        case types.REMOVE_FEED: {
            const selectedFeed = state.selected === action.payload ? null : state.selected;

            const newFeeds = state.feeds.filter(f => f.name !== action.payload);
            return { ...state, selected: selectedFeed, feeds: newFeeds };
        }
        case types.SELECT_FEED:
            return { ...state, selected: action.payload };
        default:
            return { ...state };
    }
};

export default feedReducer;