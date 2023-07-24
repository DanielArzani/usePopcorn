import { useState } from 'react';

import { tempMovieData } from '../../data/movieData';
import { tempWatchedData } from '../../data/watchedMovieData';

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating?: number;
  userRating?: number;
  runtime?: number;
};

/**
 * Calculate the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average value of the numbers in the array.
 */
const average = (arr: (number | undefined)[]): number => {
  // Filter out any undefined elements from the array and assert it as an array of numbers
  const filteredArr = arr.filter(
    (value): value is number => typeof value === 'number'
  );
  // Calculate the average of the filtered array
  return filteredArr.reduce((acc, cur) => acc + cur, 0) / filteredArr.length;
};

/**
 * Main component for the usePopcorn app.
 * Displays a list of movies and their details, along with statistics about watched movies.
 */
export default function App() {
  // State for the search query and movie lists
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [watched, setWatched] = useState<Movie[]>(tempWatchedData);

  // State for toggling movie lists
  const [isOpen1, setIsOpen1] = useState<boolean>(true);
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

  // Calculate average IMDb rating, user rating, and runtime of watched movies
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      {/* Navigation Bar */}
      <nav className='nav-bar'>
        <div className='logo'>
          <span role='img'>🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className='search'
          type='text'
          placeholder='Search movies...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className='num-results'>
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>

      {/* Main Content */}
      <main className='main'>
        {/* Movie List */}
        <div className='box'>
          <button
            className='btn-toggle'
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? '–' : '+'}
          </button>
          {isOpen1 && (
            <ul className='list'>
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Watched Movies */}
        <div className='box'>
          <button
            className='btn-toggle'
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? '–' : '+'}
          </button>
          {isOpen2 && (
            <>
              <div className='summary'>
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className='list'>
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
