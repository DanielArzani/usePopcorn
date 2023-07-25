import React from 'react';
import Movie from '../Movie';

import { MovieType } from '../../types/MovieType';

type ListOfMoviesProps = {
  moviesArray: MovieType[];
};

function ListOfMovies({ moviesArray }: ListOfMoviesProps) {
  return (
    <div>
      <ul className='flex flex-col'>
        {moviesArray.map((movie) => (
          <Movie key={movie.imdbID} movie={movie}></Movie>
        ))}
      </ul>
    </div>
  );
}

export default ListOfMovies;
