import React, { useState } from 'react';
import './App.css';

import { QueryProvider } from './context/query-context';
import Home from './containers/Home';

function App() {

  return (
    <QueryProvider>
      <Home/>
    </QueryProvider>
  );
}

export default App;
