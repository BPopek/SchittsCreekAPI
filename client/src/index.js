import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { QuoteProvider } from './Components/QuoteProvider'

ReactDOM.render(
  <QuoteProvider>
    <Router>
      <App />
    </Router>
  </QuoteProvider>,
  document.getElementById('root')
  );

