import React from 'react';

import Movie, { MovieTitle } from '../Movie';

import { MovieType } from '../../types/MovieType';

import { MoviePoster } from '../Movie';
import { MovieTitleAndYear } from '../Movie';
import { MovieStats } from '../Movie';

type ListOfMoviesProps = {
  moviesArray: MovieType[]; // Array of movie data
  type: 'not-watched' | 'watched'; // type of movies to display
  selectedMovieId: string;
  onSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * ListOfMovies component displays a list of movies. Depending on the 'type' prop,
 * it either shows not-watched or watched movies.
 * @param {ListOfMoviesProps} { moviesArray, type }
 * @returns
 */
function ListOfMovies({
  moviesArray,
  type,
  selectedMovieId,
  onSelectedMovie,
}: ListOfMoviesProps) {
  // If type is 'not-watched', return a list of not-watched movies
  if (type === 'not-watched') {
    return (
      <div>
        {/* Loop over the moviesArray and render Movie component with MoviePoster and MovieTitleAndYear for each movie */}
        <ul className='ml-4 flex flex-col'>
          {moviesArray.map((movie) => (
            <Movie
              key={movie.imdbID}
              selectedMovieId={selectedMovieId}
              onSelectedMovie={onSelectedMovie}
              movieId={movie.imdbID}
            >
              <MoviePoster poster={movie.Poster} title={movie.Title} />
              <MovieTitleAndYear title={movie.Title} year={movie.Year} />
            </Movie>
          ))}
        </ul>
      </div>
    );
  }

  // If type is 'watched', return a list of watched movies
  if (type === 'watched') {
    return (
      <div>
        {/* Loop over the moviesArray and render Movie component with MoviePoster, MovieTitle, and MovieStats for each movie */}
        <ul className='ml-4 flex flex-col'>
          {moviesArray.map((movie) => (
            <Movie
              key={movie.imdbID}
              selectedMovieId={selectedMovieId}
              onSelectedMovie={onSelectedMovie}
              movieId={movie.imdbID}
            >
              <MoviePoster poster={movie.Poster} title={movie.Title} />
              <div className='flex flex-col justify-center'>
                <MovieTitle title={movie.Title} />
                <MovieStats
                  hasNumOfWatchedMovies={false}
                  statProps={{
                    imbdRating: movie.imdbRating,
                    runTime: movie.runtime,
                    userRating: movie.userRating,
                  }}
                />
              </div>
            </Movie>
          ))}
        </ul>
      </div>
    );
  }

  // If 'type' prop is neither 'not-watched' nor 'watched', throw an error
  throw new Error('Something went wrong!');
}

export default ListOfMovies;
