import React from 'react';

import Stat from '../Stat';

type MovieStatsProps = {
  statProps: {
    imdbRating: number;
    runTime: number;
    userRating: number;
  };
};

/**
 * The statistics for the queried movies.
 * @param statProps The imdbRating, runTime, userRating and the numberOfWatchedMovies
 */
function MovieStats({ statProps }: MovieStatsProps) {
  const { imdbRating, runTime, userRating } = statProps;

  return (
    <div className='flex flex-wrap gap-6'>
      <Stat>
        ⭐️
        <span> {imdbRating} </span>
        <span className='sr-only'>IMBD Rating</span>
      </Stat>

      <Stat>
        🌟
        <span> {userRating} </span>
        <span className='sr-only'>User Rating</span>
      </Stat>

      <Stat>
        ⏳<span> {runTime} </span>
        min
        <span className='sr-only'>Movie Runtime</span>
      </Stat>
    </div>
  );
}

export default MovieStats;
