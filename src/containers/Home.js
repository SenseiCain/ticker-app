import React, { useState, useContext } from 'react';

import { useFetchNews } from '../hooks/useFetchNews';
import { newsData } from '../data';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';
import NewsList from '../components/NewsList';

const Home = ({ trending }) => {
    // DEV
    const news = newsData;

    // PRODUCTION
    // const { news, statusNews } = useFetchNews();

    return (
        <div className="p-2">
            <Logo />
            <SearchBar />
            <TickerList title="Trending" tickers={trending} />
            <NewsList news={news} />
        </div>
    )
}

export default Home;