import React from 'react';

import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div className="navbar bg-light container d-none d-md-block">
            <div className="row">
            <div className="col-9">
                TickerApp
            </div>
            <div className="col-3">
                <SearchBar />
            </div>
            </div>
            
        </div>
    )
}

export default NavBar;