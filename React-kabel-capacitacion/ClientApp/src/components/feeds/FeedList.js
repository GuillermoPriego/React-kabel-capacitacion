import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { selectFeed } from '../../store/feeds/feed.actions';

const FeedList = ({ feeds, selected, selectFeed, history }) => {
    if (!feeds || !feeds.length) return "No hay feeds";

    const onItemClick = (feedName) => {
        selectFeed(feedName);
        history.push("/");
    }

    return (
        <ul className="border bg-white list-none divide-y">
            {feeds.map(feed =>
                (
                    <li onClick={() => onItemClick(feed.name)} key={feed.name} className={`p-2 cursor-pointer ${feed.name === selected ? `bg-blue-400 text-white` : `bg-white`}`} >{feed.name}</li>
                )
            )}
        </ul>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    selectFeed: feedName => dispatch(selectFeed(feedName))
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FeedList));