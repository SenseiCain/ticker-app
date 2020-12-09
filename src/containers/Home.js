import React from 'react';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import TickerList from '../components/TickerList';
import NewsList from '../components/NewsList';

const Home = ({ trending, statusTrending, news, statusNews }) => {

    return (
        <div className="pt-5 container">
            <div className="d-md-none pb-4">
                <Logo />
                <SearchBar />
            </div>
            
            <TickerList title="Trending" tickers={trending} status={statusTrending}/>
            <NewsList news={news} status={statusNews}/>
        </div>
    )
}

export default Home;