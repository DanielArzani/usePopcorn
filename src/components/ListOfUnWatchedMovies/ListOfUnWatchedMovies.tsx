import React from 'react';

import { MovieType } from '../../types/MovieType';
import UnWatchedMovieListItem from '../UnWatchedMovieListItem';

type ListOfUnWatchedMoviesProps = {
  movies: MovieType[];
  selectedMovieId: string;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
  onCloseMovie(): void;
};

/**
 * The list of movies that appear from the search query
 * @param movies The state which should hold the list of movies
 * @param selectedMovieId The movie ID to be used to reset the selectedMovieID back to an empty string
 * @param setSelectedMovieId The setter function for the selectedMovieId. This will allow us to get a movies unique imdbID after click it
 * @param onCloseMovie The event handler that will close the MovieDetails Component
 */
function ListOfUnWatchedMovies({
  movies,
  selectedMovieId,
  setSelectedMovieId,
  onCloseMovie,
}: ListOfUnWatchedMoviesProps) {
  return (
    <div>
      <ul className='ml-4 flex flex-col'>
        {movies.map((movie) => {
          const listItemProps = {
            imdbID: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
          };

          return (
            <li
              key={movie.imdbID}
              onClick={() => {
                if (selectedMovieId === movie.imdbID) {
                  onCloseMovie();
                } else {
                  setSelectedMovieId(movie.imdbID);
                }
              }}
              className='cursor-pointer border-b border-[#343a40] py-4 hover:bg-[#343a40]'
            >
              <button>
                <UnWatchedMovieListItem ListItemProps={listItemProps} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfUnWatchedMovies;
