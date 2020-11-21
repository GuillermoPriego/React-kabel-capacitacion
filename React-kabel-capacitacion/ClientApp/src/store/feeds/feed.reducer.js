import * as types from './feed.types'
const initialState = {
    selected: null, feeds: [
        { name: "Madrid en EL PAÍS", url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/espana/subsection/madrid" },
        { name: "Microsoft Azure Blog", url: "https://azure.microsoft.com/en-us/blog/feed/" },
        { name: "España // elmundo", url: "https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml" }
    ]
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FEED:
            {
                console.log(action.payload)
                const newFeeds = [...state.feeds, action.payload];
                return { ...state, feeds: newFeeds };
            }
        case types.REMOVE_FEED:
            const selectedFeed = state.selected === action.payload ? null : state.selected;
            const newFeeds = state.feeds.filter(f => f.name !== action.payload);
            return { ...state, selected: selectedFeed, feeds: newFeeds };
        case types.SELECT_FEED:
            return { ...state, selected: action.payload };
        default:
            return { ...state };
    }
}

export default feedReducer;