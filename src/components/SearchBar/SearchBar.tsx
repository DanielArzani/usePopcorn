import React, { useState } from 'react';

type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * SearchBar component for usePopcorn app.
 * This component provides a user interface for the user to search for movies.
 * The search query is tracked in a local state variable called "query".
 * @component
 * @returns A div containing a label and input element for search functionality.
 */
function SearchBar({ query, setQuery }: SearchBarProps) {
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
