import { useQuery } from "react-query";
import * as Parser from "rss-parser";

const useFeed = (feedUrl) => useQuery(["feed", feedUrl], () => {
    const parser = new Parser();
    return parser.parseURL(`https://cors-anywhere.herokuapp.com/${feedUrl}`);
});

export default useFeed;