import * as React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const DetailedPostView = ({ location, history: { goBack } }) => {
    if (!location?.state?.post) return <Redirect to="/" />;
    const { state: { post } } = location;
    return (
        <>
            <span className="cursor-pointer hover:text-blue-700" onClick={goBack}>Atras</span>
            <h2 className="text-2xl">{post.title}</h2>
            <hr className="my-2" />
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </>)
}

export default withRouter(DetailedPostView)