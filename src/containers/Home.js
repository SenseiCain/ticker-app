import React from 'react';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';
import NewsList from '../components/NewsList';

const Home = ({ trending, news }) => {

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