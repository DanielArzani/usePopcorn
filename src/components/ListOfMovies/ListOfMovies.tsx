import React from 'react';
import Movie from '../Movie';

function ListOfMovies() {
  return (
    <div className='flex flex-col'>
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

export default ListOfMovies;
