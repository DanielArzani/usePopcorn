import React from 'react';

import { MovieDetailsType } from '../../types/MovieDetailsType';
import WatchedMovieListItem from '../WatchedMovieListItem';

type ListItemProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  statProps: {
    runTime: number;
    imdbRating: number;
    userRating: number;
  };
};

type ListOfWatchedMoviesProps = {
  movies: MovieDetailsType[];
};

/**
 * The list of movies that have been marked as watched by the user
 * @param movies A list of movies which take the MovieDetailType instead of the MovieType because a great deal of more fields are required
 */
function ListOfWatchedMovies({ movies }: ListOfWatchedMoviesProps) {
  return (
    <div className='mt-4'>
      <ul className='ml-4 flex flex-col gap-4'>
        {movies.map((movie) => {
          const listItemProps: ListItemProps = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            statProps: {
              runTime: Number(movie.Runtime),
              imdbRating: Number(movie.imdbRating),
              userRating: Number(movie.userRating),
            },
          };

          return (
            <li key={movie.imdbID}>
              <WatchedMovieListItem ListItemProps={listItemProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfWatchedMovies;