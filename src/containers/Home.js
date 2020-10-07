import React, { useState } from 'react';

import { useFetchTrending } from '../hooks/useFetchTrending';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';

const Home = () => {
    const { trending, status } = useFetchTrending();

    return (
        <div>
            <Logo />
            <SearchBar />
            <TickerList tickers={trending} />
        </div>
    )
}

export default Home;