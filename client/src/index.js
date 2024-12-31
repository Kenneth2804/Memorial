import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.js';
import { LanguageProvider } from './context/LanguageContext.js'; // Importa el proveedor de idioma
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';

/* axios.defaults.baseURL = process.env.REACT_APP_API || 'https://7j816tnb-3001.usw3.devtunnels.ms/'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
