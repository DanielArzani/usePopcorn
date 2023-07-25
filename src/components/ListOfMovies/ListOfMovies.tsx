import React from 'react';
import Movie from '../Movie';

import { MovieType } from '../../types/MovieType';

import { MoviePoster } from '../Movie';
import { MovieTitleAndYear } from '../Movie';
import { MovieStats } from '../Movie';

type ListOfMoviesProps = {
  moviesArray: MovieType[];
  type: 'not-watched' | 'watched';
};

function ListOfMovies({ moviesArray, type }: ListOfMoviesProps) {
  if (type === 'not-watched') {
    return (
      <div>
        <ul className='flex flex-col'>
          {moviesArray.map((movie) => (
            <Movie key={movie.imdbID}>
              <MoviePoster poster={movie.Poster} title={movie.Title} />
              <MovieTitleAndYear title={movie.Title} year={movie.Year} />
            </Movie>
          ))}
        </ul>
      </div>
    );
  }

  if (type === 'watched') {
    return (
      <div>
        <ul className='flex flex-col'>
          {moviesArray.map((movie) => (
            <Movie key={movie.imdbID}>
              <MoviePoster poster={movie.Poster} title={movie.Title} />
              <MovieStats />
            </Movie>
          ))}
        </ul>
      </div>
    );
  }

  throw new Error('Something went wrong!');
}

export default ListOfMovies;
