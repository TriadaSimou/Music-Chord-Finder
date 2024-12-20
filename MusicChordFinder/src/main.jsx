
/* The entry point of the app */

import React from 'react';
import ReactDOM from 'react-dom/client'; // Virtual DOM
import App from './App';

// Attaching the root component to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />  //creates an instance of App component
);