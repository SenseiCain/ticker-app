import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import { QueryProvider } from './context/query-context';
import Home from './containers/Home';

function App() {

  return (
    <QueryProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </QueryProvider>
  );
}

export default App;
