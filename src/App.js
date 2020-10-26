import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { trendingData, newsData } from './data';
import { QueryProvider } from './context/query-context';
import { useFetchTrending } from './hooks/useFetchTrending';
import { useFetchNews } from './hooks/useFetchNews';

import NavBar from './components/NavBar';
import Home from './containers/Home';
import CompanyPage from './containers/CompanyPage';

function App() {

  // DEV
  const trending = trendingData;
  const news = newsData;

  // PRODUCTION
  // const { trending, statusTrending } = useFetchTrending();
  // const { news, statusNews } = useFetchNews();

  return (
    <QueryProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home trending={trending} news={news}/>
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
