import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target: {value} }) => {
        setQuery(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery('');
    }

    return ( 
        <div id="searchbar">
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SearchBar;