import React from 'react';

import { MovieType } from '../../types/MovieType';

export function LoadingState() {
  return <p>Loading...</p>;
}

export function FailureState() {
  return <p>Failed to load</p>;
}

type SuccessStateProps = {
  moviesArray: MovieType[];
  children: React.ReactNode;
};
export function SuccessState({ moviesArray, children }: SuccessStateProps) {
  if (moviesArray.length === 0) {
    return <p>No movies found</p>;
  }

  return <>{children}</>;
}
