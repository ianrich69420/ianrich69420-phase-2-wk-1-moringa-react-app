import React from 'react';

function SearchBar({ search, onSearch }) {
    return (
        <form>
            <input type="text" placeholder="Search Transaction By Description..." size="50" value={search} onChange={e => onSearch(e.target.value)}/>
        </form>
    )
}

export default SearchBar