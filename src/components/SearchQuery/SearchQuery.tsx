import React from 'react';
import ListOfMovies from '../ListOfMovies';
import ToggleButton from '../ToggleButton';

import { tempMovieData } from '../../data/movieData';

function SearchQuery() {
  return (
    <div className='search-query-grid basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <ToggleButton />
      <ListOfMovies moviesArray={tempMovieData} />
    </div>
  );
}

export default SearchQuery;
