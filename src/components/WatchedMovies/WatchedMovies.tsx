import React from 'react';

import ListOfMovies from '../ListOfMovies';

import { tempWatchedData } from '../../data/watchedMovieData';

import MovieStatisticsPanel from '../MovieStatisticsPanel';

import ToggleButton from '../ToggleButton';

/**
 * WatchedMovies component for the usePopcorn app.
 * This component provides a user interface to display the watched movies list, a toggle button to hide/show the list,
 * and a statistics panel to show data about the watched movies.
 * @component
 * @returns A div containing the watched movies list, toggle button, and statistics panel.
 */
function WatchedMovies() {
  return (
    <div className='relative basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <div className='absolute top-0 right-0'>
        <ToggleButton />
      </div>

      <MovieStatisticsPanel />

      {/* Component showing list of watched movies. Passing in the type of the list ('watched') and the movies data */}
      <ListOfMovies type='watched' moviesArray={tempWatchedData} />
    </div>
  );
}

export default WatchedMovies;
