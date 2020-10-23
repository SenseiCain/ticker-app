import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { QueryContext } from '../context/query-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
    const [query, setQuery] = useContext(QueryContext);
    const history = useHistory();

    const handleChange = ({ target: {value} }) => {
        setQuery(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/${query}`);
        setQuery('');
    }

    return ( 
            <form onSubmit={handleSubmit} >
                <div className="d-flex align-items-center">
                    <input 
                        className="form-control form-control-sm flex-1 mr-2" 
                        type="text" 
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={handleChange}/>
                    <FontAwesomeIcon icon={faSearch} className="text-primary"/>
                </div>
                
            </form>
    )
}

export default SearchBar;