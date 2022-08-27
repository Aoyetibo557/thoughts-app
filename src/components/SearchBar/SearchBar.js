import React from 'react';
import "./SearchBar.css";

function SearchBar({searchQuery, setSearchQuery, onSubmit}) {
  return (
    <div className='searchbar'>
        <form className='searchbar__form' action='/' autoComplete='off' onSubmit={onSubmit}>
            <input className='searchbar__input' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by location, content..." />
            <button className="button searchbar__btn " type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBar