import React, { useState } from 'react';

/**
 * SearchBar component for searching movies.
 * @component
 */
function SearchBar() {
  const [query, setQuery] = useState<string>('');

  return (
    <div className='w-[300px]'>
      <label htmlFor='search-input' className='sr-only'>
        Search Movies
      </label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-[100%] rounded-lg border-2 border-solid border-[#ccc] bg-[#7950f2] p-2'
        type='text'
        id='search-input'
        placeholder='Search Movies...'
      />
    </div>
  );
}

export default SearchBar;
