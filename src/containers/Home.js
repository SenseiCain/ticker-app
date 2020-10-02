import React, { useState } from 'react';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';

const Home = () => {
    return (
        <div>
            <Logo />
            <SearchBar />
            <TickerList />
        </div>
    )
}

export default Home;