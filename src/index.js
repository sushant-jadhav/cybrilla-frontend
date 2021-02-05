import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import '../src/assets/style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {appPersistor, appStore} from '../src/redux/store';
import { createBrowserHistory } from "history";
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const history = createBrowserHistory();

ReactDOM.render(<Provider store={appStore} suppressHydrationWarning={true}>
    <PersistGate loading={<div>Loading.....</div>} persistor={appPersistor}>
        <Router history={history}>
            <App />
        </Router>
    </PersistGate>
</Provider>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
