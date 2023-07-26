import React from 'react';
import MovieCard from '../MovieCard';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';

function ChosenMovie() {
  return (
    <>
      <MovieCard />
      <StarRating />
      <MovieDescription />
    </>
  );
}

export default ChosenMovie;
