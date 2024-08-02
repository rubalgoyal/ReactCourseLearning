import './index.css';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import {Provider} from './context/books'; //modification opart of context

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(   //modification as part  pf context
    <Provider >
        <App />
    </Provider>
    
);