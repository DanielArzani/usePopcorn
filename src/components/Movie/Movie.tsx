import React from 'react';

type MovieProps = { children: React.ReactNode };

function Movie({ children }: MovieProps) {
  return (
    <li className='flex gap-4 border-b border-[#343a40] py-4'>{children}</li>
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

type MovieTitleAndYearProps = {
  title: string;
  year: string;
};

export function MovieTitleAndYear({ title, year }: MovieTitleAndYearProps) {
  return (
    <div className='flex flex-col justify-center'>
      <h2 className='mb-2 font-bold'>{title}</h2>
      <p>
        <span className='text-xl'>🗓️</span> {year}
      </p>
    </div>
  );
}

type MovieTitleProps = {
  title: string;
};

export function MovieTitle({ title }: MovieTitleProps) {
  return <h2 className='mb-2 font-bold'>{title}</h2>;
}

type MovieStatsProps = { hasNumOfWatchedMovies: boolean };

export function MovieStats({ hasNumOfWatchedMovies }: MovieStatsProps) {
  return (
    <div className='flex justify-between gap-4'>
      {hasNumOfWatchedMovies && (
        <p className='font-semibold'>
          #️⃣
          <span> 0 </span>
          <span className='sr-only'>Number of movies you've watched</span>
          movies
        </p>
      )}
      <p className='font-semibold'>
        ⭐️
        <span> 0.00 </span>
        <span className='sr-only'>IMBD Rating</span>
      </p>
      <p className='font-semibold'>
        🌟
        <span> 0.00 </span>
        <span className='sr-only'>User Rating</span>
      </p>
      <p className='font-semibold'>
        ⏳<span> 0 </span>
        min
        <span className='sr-only'>Movie Runtime</span>
      </p>
    </div>
  );
}

export default Movie;
