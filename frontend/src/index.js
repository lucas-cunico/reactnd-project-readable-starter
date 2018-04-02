import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
    reducer
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>,
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
