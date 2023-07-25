import React from 'react';
import { MovieStats } from '../Movie/Movie';

function MovieStatisticsPanel() {
  return (
    <div className='rounded-lg bg-[#343A3F] py-4 px-8'>
      <h3 className='text-lg font-bold'>Movies You Watched</h3>
      <MovieStats
        statProps={{
          imbdRating: 0,
          runTime: 0,
          userRating: 0,
        }}
        hasNumOfWatchedMovies={true}
      />
    </div>
  );
}

export default MovieStatisticsPanel;
