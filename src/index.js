import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Route} from "react-router-dom"


ReactDOM.render(
  <Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Route>,
  document.getElementById('root')
);

