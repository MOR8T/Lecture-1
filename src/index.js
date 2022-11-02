import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let elem = (
  <h1 className='H1'>Hello</h1>
);

let elem2 = React.createElement('h1',{className:'H2'},'Hello');


