import * as types from './feed.types'

export const addFeed = feed => ({ type: types.ADD_FEED, payload: feed })
export const removeFeed = feedName => ({ type: types.REMOVE_FEED, payload: feedName })
export const selectFeed = feedName => ({ type: types.SELECT_FEED, payload: feedName })