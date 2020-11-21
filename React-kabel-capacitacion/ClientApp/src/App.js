import * as React from 'react'
import { ReactQueryDevtools } from "react-query-devtools";
import { Route, Switch } from 'react-router-dom';
import FeedForm from './components/feeds/FeedForm';
import FeedList from './components/feeds/FeedList';
import Layout from './components/Layout';
import DetailedPostView from './components/views/DetailedPostView';
import GridPostView from './components/views/GridPostView';
import './styles/app.css'

const App = () => {
    return (
        <Layout>
            <div className="md:flex md:gap-5">
                <div className="md:flex-initial">
                    <FeedList />
                    <div className="my-3">
                        <FeedForm />
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" component={GridPostView} />
                        <Route exact path="/feed" component={DetailedPostView} />
                        <Route component={() => <h4>No existe lo que buscas</h4>} />
                    </Switch>
                </div>
            </div>
        </Layout>
    );
}

export default App;
