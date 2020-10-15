import React, { useState, useContext } from 'react';

import { useFetchNews } from '../hooks/useFetchNews';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';
import NewsList from '../components/NewsList';

const Home = ({ trending }) => {
    const { news, statusNews } = useFetchNews();

    return (
        <div>
            <Logo />
            <SearchBar />
            <TickerList title="Trending" tickers={trending} />
            <NewsList news={news} />
        </div>
    )
}

export default Home;