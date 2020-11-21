import * as React from 'react'
import { Route, Switch } from 'react-router-dom';
import FeedForm from './components/feeds/FeedForm';
import FeedList from './components/feeds/FeedList';
import Layout from './components/Layout';
import DetailedPostView from './components/views/DetailedPostView';
import GridPostView from './components/views/GridPostView';
import NotFoundView from "./components/views/NotFoundView";
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
                <div className="w-full">
                    <Switch>
                        <Route exact path="/" component={GridPostView} />
                        <Route exact path="/feed" component={DetailedPostView} />
                        <Route component={NotFoundView} />
                    </Switch>
                </div>
            </div>
        </Layout>
    );
}

export default App;
