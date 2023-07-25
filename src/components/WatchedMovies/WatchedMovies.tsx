import React from 'react';
import MovieStatistics from '../MovieStatistics';

function WatchedMovies() {
  return (
    <div className='basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <MovieStatistics />
    </div>
  );
}

export default WatchedMovies;
