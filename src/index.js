import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// CssBaseline from Material UI extends CSS to <body> tag
import CssBaseline from "@material-ui/core/CssBaseline";


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

