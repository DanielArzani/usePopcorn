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
  onDeleteMovie: (e: React.MouseEvent, imdbID: string) => void;
  onCloseMovie(): void;
};

/**
 * The list of movies that have been marked as watched by the user
 * @param movies A list of movies which take the MovieDetailType instead of the MovieType because a great deal of more fields are required
 * @param selectedMovieId The movie ID to be used to reset the selectedMovieID back to an empty string
 * @param setSelectedMovieId The setter function for the selectedMovieId. This will allow us to get a movies unique imdbID after click it
 * @param onDeleteMovie The callback to delete a movie from the watched movies list. It is here to be passed down as a prop
 * @param onCloseMovie The event handler that will close the MovieDetails Component
 */
function ListOfWatchedMovies({
  movies,
  selectedMovieId,
  setSelectedMovieId,
  onDeleteMovie,
  onCloseMovie,
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
              runTime: parseInt(movie.Runtime, 10),
              imdbRating: Number(movie.imdbRating),
              userRating: movie.userRating || 0, // Use the userRating from the movie object
            },
          };

          return (
            <li
              className='cursor-pointer border-b border-[#343a40] py-4 hover:bg-[#343a40]'
              key={movie.imdbID}
              onClick={() => {
                if (selectedMovieId === movie.imdbID) {
                  onCloseMovie();
                } else {
                  setSelectedMovieId(movie.imdbID);
                }
              }}
            >
              <button>
                <WatchedMovieListItem
                  ListItemProps={listItemProps}
                  onDeleteMovie={onDeleteMovie}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfWatchedMovies;
