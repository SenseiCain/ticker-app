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
        <div className="pt-5 container">
            <div className="d-md-none pb-4">
                <Logo />
                <SearchBar />
            </div>
            
            <TickerList title="Trending" tickers={trending} />
            <NewsList news={news} />
        </div>
    )
}

export default Home;