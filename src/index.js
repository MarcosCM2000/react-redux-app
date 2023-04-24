import React from 'react';
import ReactDOM from 'react-dom/client';
// Import provider
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// Import store
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
