import React from 'react';

import { MovieType } from '../../types/MovieType';

type MovieProps = { movie: MovieType };

function Movie({ movie }: MovieProps) {
  return (
    <li className='flex gap-2 border-b border-[#343a40] py-4'>
      <div className='max-w-[50px]'>
        <MoviePoster poster={movie.Poster} title={movie.Title} />
      </div>
      <div className='flex flex-col justify-center'>
        <MovieTitle title={movie.Title} />
        <MovieYear year={movie.Year} />
      </div>
    </li>
  );
}

type MoviePosterProps = {
  poster: string;
  title: string;
};
function MoviePoster({ poster, title }: MoviePosterProps) {
  return (
    <>
      <img className='h-[100%] w-[100%]' src={`${poster}`} alt={`${title}`} />
    </>
  );
}

type MovieTitleProps = {
  title: string;
};
function MovieTitle({ title }: MovieTitleProps) {
  return <h2 className='mb-2 font-bold'>{title}</h2>;
}

type MovieYearProps = {
  year: string;
};
function MovieYear({ year }: MovieYearProps) {
  return (
    <p>
      <span className='text-xl'>🗓️</span> {year}
    </p>
  );
}

type MovieStatsProps = {};
function MovieStats() {}

export default Movie;
