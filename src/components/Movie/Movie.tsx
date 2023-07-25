import React from 'react';

type MovieProps = { children: React.ReactNode };

function Movie({ children }: MovieProps) {
  return (
    <li className='flex gap-2 border-b border-[#343a40] py-4'>{children}</li>
  );
}

type MoviePosterProps = {
  poster: string;
  title: string;
};

export function MoviePoster({ poster, title }: MoviePosterProps) {
  return (
    <div className='max-w-[50px]'>
      <img className='h-[100%] w-[100%]' src={`${poster}`} alt={`${title}`} />
    </div>
  );
}

type MovieTitleProps = {
  title: string;
  year: string;
};

export function MovieTitleAndYear({ title, year }: MovieTitleProps) {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='mb-2 font-bold'>{title}</h2>
      <p>
        <span className='text-xl'>🗓️</span> {year}
      </p>
    </div>
  );
}

type MovieStatsProps = {};
export function MovieStats() {
  return <>Move Stats</>;
}

export default Movie;
