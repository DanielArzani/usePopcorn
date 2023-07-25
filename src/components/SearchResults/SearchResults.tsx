import React from 'react';

/**
 * SearchResults component for the usePopcorn app.
 * This component provides a user interface to display the number of search results.
 * @component
 * @returns A div containing text with the number of search results.
 */
function SearchResults() {
  return (
    <div className='text-xl'>
      Found <span className='font-bold'>0</span> results
    </div>
  );
}

export default SearchResults;
