import React from 'react';
import { MovieStats } from '../Movie/Movie';

type MovieStatisticsPanelProps = {
  avgStats: {
    avgImdbRating: number;
    avgUserRating: number;
    avgRuntime: number;
    numOfWatchedMovies: number;
  };
};

/**
 * MovieStatisticsPanel component for usePopcorn app.
 * This component displays a panel that contains the statistics of the movies watched by the user.
 * @component
 * @returns A div containing the title and a MovieStats component
 */
function MovieStatisticsPanel({ avgStats }: MovieStatisticsPanelProps) {
  const { avgImdbRating, avgRuntime, avgUserRating, numOfWatchedMovies } =
    avgStats;

  return (
    <div className='rounded-lg bg-[#343A3F] py-4 px-8'>
      <h3 className='text-lg font-bold'>Movies You Watched</h3>

      <MovieStats
        statProps={{
          imbdRating: avgImdbRating,
          runTime: avgRuntime,
          userRating: avgUserRating,
          numOfWatchedMovies: numOfWatchedMovies,
        }}
        hasNumOfWatchedMovies={true} // Displaying the number of watched movies
      />
    </div>
  );
}

export default MovieStatisticsPanel;
