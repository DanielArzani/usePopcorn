import React from 'react';

import { MovieType } from '../../types/MovieType';

import ListOfMovies from '../ListOfMovies';

export function LoadingState() {
  return <p>Loading...</p>;
}

export function FailureState() {
  return <p>Failed to load</p>;
}

type SuccessStateProps = {
  moviesArray: MovieType[];
  selectedMovieId: string;
  onSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
};
export function SuccessState({
  moviesArray,
  selectedMovieId,
  onSelectedMovie,
}: SuccessStateProps) {
  if (moviesArray.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ListOfMovies
      type='not-watched'
      moviesArray={moviesArray}
      selectedMovieId={selectedMovieId}
      onSelectedMovie={onSelectedMovie}
    />
  );
}
