import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// ThemeProvider will wrap App to facilitate toggling dark and light modes
import ThemeProvider from './themes/ThemeProvider'; 
// CssBaseline from Material UI extends CSS to <body> tag
import CssBaseline from "@material-ui/core/CssBaseline";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> 
      <CssBaseline />
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

