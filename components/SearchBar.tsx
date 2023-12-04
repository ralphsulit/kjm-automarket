'use client'

// React imports
import { useState } from 'react';

// Components
import { SearchManufacturer } from "./"

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  const handleSearch = () => {

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='search__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar