import React, { useState } from 'react';

import { useFetchMovers } from '../hooks/useFetchMovers';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';

const Home = () => {
    const { movers, status } = useFetchMovers();

    return (
        <div>
            <Logo />
            <SearchBar />
            <TickerList tickers={movers} />
        </div>
    )
}

export default Home;