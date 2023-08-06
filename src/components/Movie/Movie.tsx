// Importing React for JSX syntax
import React from 'react';
import Stat from '../Stat';

// Type definition for the children prop in the Movie component
type MovieProps = {
  children: React.ReactNode;
  selectedMovieId: string;
  onSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
  movieId: string;
};
function Movie({
  children,
  selectedMovieId,
  onSelectedMovie,
  movieId,
}: MovieProps) {
  const handleSelectedMovie = () => {
    onSelectedMovie(movieId);
  };

  return (
    <li
      onClick={handleSelectedMovie}
      className='flex cursor-pointer gap-4 border-b border-[#343a40] py-4 hover:bg-[#343a40]'
    >
      {children}
    </li>
  );
}

// Type definition for the props in the MoviePoster sub-component
type MoviePosterProps = {
  poster: string; // URL to the poster image
  title: string; // Title of the movie
};
export function MoviePoster({ poster, title }: MoviePosterProps) {
  return (
    <div className='max-w-[50px]'>
      <img className='h-[100%] w-[100%]' src={`${poster}`} alt={`${title}`} />
    </div>
  );
}

// Type definition for the props in the MovieTitleAndYear sub component
type MovieTitleAndYearProps = {
  title: string; // Title of the movie
  year: string; // Year of release of the movie
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

// Type definition for the props in the MovieTitle subcomponent
type MovieTitleProps = {
  title: string; // Title of the movie
};
export function MovieTitle({ title }: MovieTitleProps) {
  return <h2 className='mb-2 font-bold'>{title}</h2>;
}

// Type definition for the props in the MovieStats subcomponent
type MovieStatsProps = {
  hasNumOfWatchedMovies: boolean; // True if the number of watched movies should be displayed, false otherwise
  statProps: {
    imbdRating?: number;
    runTime?: number;
    userRating?: number;
    numOfWatchedMovies?: number;
  };
};
export function MovieStats({
  hasNumOfWatchedMovies,
  statProps,
}: MovieStatsProps) {
  const { imbdRating, runTime, userRating, numOfWatchedMovies } = statProps;

  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {hasNumOfWatchedMovies && (
        <Stat>
          #️⃣
          <span> {numOfWatchedMovies} </span>
          <span className='sr-only'>Number of movies you've watched</span>
          movies
        </Stat>
      )}

      <Stat>
        ⭐️
        <span> {imbdRating ? imbdRating : 0} </span>
        <span className='sr-only'>IMBD Rating</span>
      </Stat>

      <Stat>
        🌟
        <span> {userRating ? userRating : 0} </span>
        <span className='sr-only'>User Rating</span>
      </Stat>

      <Stat>
        ⏳<span> {runTime ? runTime : 0} </span>
        min
        <span className='sr-only'>Movie Runtime</span>
      </Stat>
    </div>
  );
}

// Exporting Movie component
export default Movie;
