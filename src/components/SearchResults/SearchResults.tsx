import React from 'react';

import { MovieType } from '../../types/MovieType';

type SearchResultsProps = { movies: MovieType[] };

/**
 * SearchResults component for the usePopcorn app.
 * This component provides a user interface to display the number of search results.
 * @component
 * @returns A div containing text with the number of search results.
 */
function SearchResults({ movies }: SearchResultsProps) {
  return (
    <div className='text-xl'>
      Found <span className='font-bold'>{movies.length}</span> results
    </div>
  );
}

export default SearchResults;
