import React from 'react';

import ListOfMovies from '../ListOfMovies';
import ToggleButton from '../ToggleButton';

import { tempMovieData } from '../../data/movieData';

/**
 * SearchQuery component for the usePopcorn app.
 * It contains a ToggleButton for showing/hiding the movies list and a ListOfMovies component that displays the movie list.
 * It is responsible for showing the list of unwatched movies (derived from the "not-watched" type passed to the ListOfMovies component).
 * @component
 * @returns A div containing a ToggleButton component and a ListOfMovies component.
 */
function SearchQuery() {
  return (
    <div className='search-query-grid basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <ToggleButton />
      {/* ListOfMovies component displaying unwatched movies */}
      <ListOfMovies moviesArray={tempMovieData} type='not-watched' />
    </div>
  );
}

export default SearchQuery;
