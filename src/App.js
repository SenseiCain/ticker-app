import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import { QueryProvider } from './context/query-context';
import { useFetchTrending } from './hooks/useFetchTrending';
import Home from './containers/Home';
import CompanyPage from './containers/CompanyPage';

import { trendingData } from './data';

function App() {
  // DEV
  const trending = trendingData;

  // PRODUCTION
  // const { trending, statusTrending } = useFetchTrending();

  return (
    <QueryProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home trending={trending}/>
          </Route>
          <Route 
            path="/:ticker"
            render={(props) => <CompanyPage {...props}/>}/>
        </Switch>
      </Router>
    </QueryProvider>
  );
}

export default App;
