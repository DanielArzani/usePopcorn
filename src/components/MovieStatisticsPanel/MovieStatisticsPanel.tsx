import React from 'react';

import { MovieDetailsType } from '../../types/MovieDetailsType';

import { average } from '../../utils/calculateAverage';

import MovieStats from '../MovieStats';
import Stat from '../Stat';

type MovieStatisticsPanelProps = {
  watched: MovieDetailsType[];
};

/**
 * This component displays a panel that contains the statistics of the movies watched by the user.
 * @param watched The list of watched movies
 */
function MovieStatisticsPanel({ watched }: MovieStatisticsPanelProps) {
  // Calculate average IMDb rating, user rating, and runtime of watched movies
  // By mapping through the watched movies array and passing the values to the average function
  const avgImdbRating = Math.round(
    average(watched.map((movie) => parseFloat(movie.imdbRating)))
  );

  const avgUserRating = Math.round(
    average(
      watched.map((movie) => parseFloat(movie.userRating?.toString() || '0'))
    )
  );

  const avgRuntime = Math.round(
    average(watched.map((movie) => parseInt(movie.Runtime, 10)))
  );

  const numOfWatchedMovies = watched.length;

  // These values should always be a number, never NaN thus if they end up falsy then they will be converted to 0
  const statProps = {
    imdbRating: avgImdbRating || 0,
    runTime: avgRuntime || 0,
    userRating: avgUserRating,
  };

  return (
    <div className='rounded-lg bg-[#343A3F] py-4 px-8'>
      <h3 className='text-lg font-bold'>Movies You Watched</h3>

      <div className='flex flex-wrap gap-6'>
        <PanelStat numOfWatchedMovies={numOfWatchedMovies} />
        <MovieStats statProps={statProps} />
      </div>
    </div>
  );
}

type PanelStatProps = {
  numOfWatchedMovies: number;
};

/**
 * The statistics for the MoveStatisticsPanel component
 * @param numOfWatchedMovies The total number of movies that have been marked as watched
 */
function PanelStat({ numOfWatchedMovies }: PanelStatProps) {
  return (
    <Stat>
      #️⃣
      <span> {numOfWatchedMovies} </span>
      <span className='sr-only'>Number of movies you've watched</span>
      movies
    </Stat>
  );
}

export default MovieStatisticsPanel;
