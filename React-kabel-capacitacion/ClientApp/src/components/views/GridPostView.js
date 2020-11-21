import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import useFeed from '../../hooks/useFeed'

const GridPostView = ({ selected, feeds }) => {
    if (!selected || !feeds || !feeds.length) return "No hay feed seleccionada";

    const url = feeds.find(f => f.name === selected)?.url;
    return <FeedReader name={selected} url={url}/>
}

const mapStateToProps = state => (state)

export default connect(mapStateToProps)(GridPostView);

const FeedReader = ({ name, url }) => {
    
    const queryInfo = useFeed(url)
    if (queryInfo.isLoading) return "Loading..."
    if(queryInfo.isError) return "Error"
    return (
        <>
            <h2 className="text-2xl">{name}</h2>
            <section className="grid grid-flow-row gap-5 mt-5">
                {queryInfo.data.items.map((post, idx) => (
                    <article key={`${post.guid}-${idx}`} className="p-4 bg-white rounded shadow">
                        <h3 className="text-xl text-blue-400">{post.title}</h3>
                        <p className="mt-3">{post.content}</p>
                        <div className="text-right mt-3">
                            <Link className="hover:text-blue-700" to={{ pathname: "feed", state: { post } }}>Seguir leyendo</Link>
                        </div>
                    </article>
                )
                )}
                </section>
        </>
    )
}