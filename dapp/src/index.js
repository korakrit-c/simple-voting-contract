import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import App from './App';
import Header from './components/Header'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
