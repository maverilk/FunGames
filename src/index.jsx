import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/footer/Footer';
import './styles/styles.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);