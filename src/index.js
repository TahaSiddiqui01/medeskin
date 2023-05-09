import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
// require('dotenv').config()

// axios.defaults.baseURL = 'https://blog-basic-site.herokuapp.com/api'
// axios.defaults.baseURL = 'http://localhost:4000/api'
axios.defaults.baseURL = 'https://medeskin.ai/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);