import React from 'react';
import ListOfMovies from '../ListOfMovies';

import { tempWatchedData } from '../../data/watchedMovieData';
import MovieStatisticsPanel from '../MovieStatisticsPanel';
import ToggleButton from '../ToggleButton';

function WatchedMovies() {
  return (
    <div className='basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <ToggleButton />
      <MovieStatisticsPanel />
      <ListOfMovies type='watched' moviesArray={tempWatchedData} />
    </div>
  );
}

export default WatchedMovies;
