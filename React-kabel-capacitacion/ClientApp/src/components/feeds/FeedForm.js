import * as React from 'react'
import { queryCache } from 'react-query';
import { connect } from 'react-redux';
import * as Parser from 'rss-parser';
import { addFeed } from '../../store/feeds/feed.actions';

const FeedForm = ({ addFeed }) => {
    const [feedUrl, setFeedUrl] = React.useState("");
    const [error, setError] = React.useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const parser = new Parser();
            const res = await parser.parseURL(`https://cors-anywhere.herokuapp.com/${feedUrl}`);
            queryCache.setQueryData(["feed", feedUrl], res);
            setError(null)
            addFeed({ name: res.title, url: feedUrl });
        }
        catch (err) {
            console.error(err);
            setError("Error fetching the url")
        }
        finally {
            setFeedUrl("")
        }
    }

    return (
        <>
            <form className="flex" onSubmit={handleSubmit}>
                <input className="flex-grow p-2 border" type="text" placeholder="https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/espana/subsection/madrid" onChange={e => setFeedUrl(e.target.value)} value={feedUrl} />
                <button disabled={!feedUrl} className="bg-white border border-blue-400 p-2 px-3 text-blue-400" type="submit">+</button>
            </form>
            {error ? error : null}
            </>
    )
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    addFeed: feed => dispatch(addFeed(feed))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedForm);