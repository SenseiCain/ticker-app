import React, { useState } from 'react';

import { useFetchMovers } from '../hooks/useFetchMovers';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';

const Home = () => {
    const { movers, status } = useFetchMovers();
    console.log(movers)

    return (
        <div>
            <Logo />
            <SearchBar />
            <TickerList />
        </div>
    )
}

export default Home;