import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { Provider } from 'react-redux';
import store from './store';
// global styles
import '../src/styles/global.css'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={baseUrl}>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    rootElement);

registerServiceWorker();

