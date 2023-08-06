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
  selectedMovieId: string;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
  movieRating: number;
};

/**
 * The list of movies that have been marked as watched by the user
 * @param movies A list of movies which take the MovieDetailType instead of the MovieType because a great deal of more fields are required
 * @param selectedMovieId The movie ID to be used to reset the selectedMovieID back to an empty string
 * @param setSelectedMovieId The setter function for the selectedMovieId. This will allow us to get a movies unique imdbID after click it
 * @param movieRating The user rating of the currently selected movie
 */
function ListOfWatchedMovies({
  movies,
  selectedMovieId,
  setSelectedMovieId,
  movieRating,
}: ListOfWatchedMoviesProps) {
  return (
    <div className='mt-2'>
      <ul className='ml-4 flex flex-col gap-4'>
        {movies.map((movie) => {
          const listItemProps: ListItemProps = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            statProps: {
              runTime: Number(movie.Runtime),
              imdbRating: Number(movie.imdbRating),
              userRating: movieRating,
            },
          };

          return (
            <li
              className='cursor-pointer border-b border-[#343a40] py-4 hover:bg-[#343a40]'
              key={movie.imdbID}
              onClick={() => {
                if (selectedMovieId === movie.imdbID) {
                  setSelectedMovieId('');
                } else {
                  setSelectedMovieId(movie.imdbID);
                }
              }}
            >
              <WatchedMovieListItem ListItemProps={listItemProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfWatchedMovies;
