import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import CSS (optional)
import App from './App';  // Import the main App component

// Rendering the main App component inside the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
