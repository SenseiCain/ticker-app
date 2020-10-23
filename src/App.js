import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { trendingData } from './data';
import { QueryProvider } from './context/query-context';
import { useFetchTrending } from './hooks/useFetchTrending';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import CompanyPage from './containers/CompanyPage';

function App() {
  // DEV
  const trending = trendingData;

  // PRODUCTION
  // const { trending, statusTrending } = useFetchTrending();

  return (
    <QueryProvider>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home 
              trending={trending}/>
          </Route>
          <Route 
            path="/:ticker"
            render={(props) => <CompanyPage {...props} trending={trending} className="container" />}/>
        </Switch>
      </Router>
    </QueryProvider>
  );
}

export default App;
