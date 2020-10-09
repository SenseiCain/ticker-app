import React, { useState } from 'react';


import { QueryProvider } from './context/query-context';
import Home from './containers/Home';
import './App.css';

function App() {

  return (
    <QueryProvider>
      <Home/>
    </QueryProvider>
  );
}

export default App;
