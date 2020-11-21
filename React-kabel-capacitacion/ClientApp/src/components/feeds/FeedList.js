import { DashIcon } from "@primer/octicons-react";
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeFeed, selectFeed } from '../../store/feeds/feed.actions';

const FeedList = ({ feeds, selected, selectFeed, removeFeed, history }) => {
    if (!feeds || !feeds.length) return "No hay feeds";

    const onItemClick = (feedName) => {
        selectFeed(feedName);
        history.push("/");
    };

    return (
        <ul className="grid grid-flow-row gap-2">
            {feeds.map(feed =>
                (
                    <li key={feed.name} className={`flex justify-between p-2 rounded-l cursor-pointer ${feed.name === selected ? `border-l-4 border-blue-400` : ``}`} >
                        <span onClick={() => onItemClick(feed.name)}>{feed.name}</span>
                        <span className="text-red-400" style={{ width: '25px', height: '25px' }} role="button" onClick={() => removeFeed(feed.name)}><DashIcon size={24} /></span>
                    </li>
                )
            )}
        </ul>
    );
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    selectFeed: feedName => dispatch(selectFeed(feedName)),
    removeFeed: feedName => dispatch(removeFeed(feedName))
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FeedList));