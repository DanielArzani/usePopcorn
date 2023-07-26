import React from 'react';

import { MovieType } from '../../types/MovieType';

import { average } from '../../utils/calculateAverage';

import { MovieStats } from '../Movie/Movie';

type MovieStatisticsPanelProps = {
  watched: MovieType[];
};

/**
 * MovieStatisticsPanel component for usePopcorn app.
 * This component displays a panel that contains the statistics of the movies watched by the user.
 * @component
 * @returns A div containing the title and a MovieStats component
 */
function MovieStatisticsPanel({ watched }: MovieStatisticsPanelProps) {
  // Calculate average IMDb rating, user rating, and runtime of watched movies
  // By mapping through the watched movies array and passing the values to the average function
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating)); // Average IMDb rating
  const avgUserRating = average(watched.map((movie) => movie.userRating)); // Average user rating
  const avgRuntime = average(watched.map((movie) => movie.runtime)); // Average movie runtime
  const numOfWatchedMovies = watched.length;

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
