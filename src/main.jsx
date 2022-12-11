import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase/config';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
