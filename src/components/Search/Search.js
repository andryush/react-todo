import React from 'react';
import './Search.css';

const Search = ({onSearchChange, value}) => {

    return <input 
            className="form-control SearchInput" 
            type="text" 
            placeholder="Type to search"
            value={value}
            onChange={(e) => onSearchChange(e.target.value)}/>
}
export default Search;