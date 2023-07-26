// Importing React for JSX syntax
import React from 'react';

// Type definition for the children prop in the Movie component
type MovieProps = { children: React.ReactNode };

/**
 * The Movie component is a list item that houses all the data for a single movie.
 * @component
 * @param {React.ReactNode} children - The child components of Movie, which will typically be MoviePoster, MovieTitle, etc.
 * @returns A list item containing all the data for a single movie.
 */
function Movie({ children }: MovieProps) {
  return (
    <li className='flex gap-4 border-b border-[#343a40] py-4'>{children}</li>
  );
}

// Type definition for the props in the MoviePoster subcomponent
type MoviePosterProps = {
  poster: string; // URL to the poster image
  title: string; // Title of the movie
};

/**
 * The MoviePoster component is a subcomponent of Movie that displays the poster of the movie.
 * @param {MoviePosterProps} { poster, title }
 * @returns An image element with the poster of the movie.
 */
export function MoviePoster({ poster, title }: MoviePosterProps) {
  return (
    <div className='max-w-[50px]'>
      <img className='h-[100%] w-[100%]' src={`${poster}`} alt={`${title}`} />
    </div>
  );
}

// Type definition for the props in the MovieTitleAndYear subcomponent
type MovieTitleAndYearProps = {
  title: string; // Title of the movie
  year: string; // Year of release of the movie
};

/**
 * The MovieTitleAndYear component is a subcomponent of Movie that displays the title and year of the movie.
 * @param {MovieTitleAndYearProps} { title, year }
 * @returns A div containing the title and year of the movie.
 */
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

/**
 * The MovieTitle component is a subcomponent of Movie that displays the title of the movie.
 * @param {MovieTitleProps} { title }
 * @returns An h2 element with the title of the movie.
 */
export function MovieTitle({ title }: MovieTitleProps) {
  return <h2 className='mb-2 font-bold'>{title}</h2>;
}

// Type definition for the props in the MovieStats subcomponent
type MovieStatsProps = {
  hasNumOfWatchedMovies: boolean; // True if the number of watched movies should be displayed, false otherwise
  statProps: {
    imbdRating: number;
    runTime: number;
    userRating: number;
    numOfWatchedMovies: number;
  };
};

/**
 * The MovieStats component is a subcomponent of Movie that displays the stats of the movie.
 * @param {MovieStatsProps} { hasNumOfWatchedMovies, statProps }
 * @returns A div containing the stats of the movie.
 */
export function MovieStats({
  hasNumOfWatchedMovies,
  statProps,
}: MovieStatsProps) {
  const { imbdRating, runTime, userRating, numOfWatchedMovies } = statProps;

  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {hasNumOfWatchedMovies && (
        <p className='font-semibold'>
          #️⃣
          <span> {numOfWatchedMovies} </span>
          <span className='sr-only'>Number of movies you've watched</span>
          movies
        </p>
      )}
      <p className='font-semibold'>
        ⭐️
        <span> {imbdRating} </span>
        <span className='sr-only'>IMBD Rating</span>
      </p>
      <p className='font-semibold'>
        🌟
        <span> {userRating} </span>
        <span className='sr-only'>User Rating</span>
      </p>
      <p className='font-semibold'>
        ⏳<span> {runTime} </span>
        min
        <span className='sr-only'>Movie Runtime</span>
      </p>
    </div>
  );
}

// Exporting Movie component
export default Movie;
