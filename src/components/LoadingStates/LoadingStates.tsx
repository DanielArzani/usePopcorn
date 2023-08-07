import React from 'react';

import { MovieType } from '../../types/MovieType';

export function LoadingState() {
  return (
    <div className='flex h-full items-center justify-center'>
      <p className='animate-pulse text-xl font-semibold text-blue-500'>
        Loading...
      </p>
    </div>
  );
}

export function FailureState() {
  return (
    <div className='flex h-full items-center justify-center'>
      <p className='text-xl font-semibold text-red-500'>Failed to load</p>
    </div>
  );
}

type SuccessStateProps = {
  moviesArray: MovieType[];
  children: React.ReactNode;
};

export function SuccessState({ moviesArray, children }: SuccessStateProps) {
  if (moviesArray.length === 0) {
    return (
      <div className='flex h-full items-center justify-center'>
        <p className='text-xl font-semibold text-gray-500'>No movies found</p>
      </div>
    );
  }

  return <>{children}</>;
}
