import { useState } from 'react';

import { tempMovieData } from '../../data/movieData';
import { tempWatchedData } from '../../data/watchedMovieData';

import { average } from '../../utils/calculateAverage';

import { MovieType } from '../../types/MovieType';

import Navbar from '../Navbar';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import SearchQuery from '../SearchQuery';
import WatchedMovies from '../WatchedMovies';

/**
 * Main component for the usePopcorn app.
 * Displays a list of movies and their details, along with statistics about watched movies.
 */
export default function App() {
  const [query, setQuery] = useState<string>(''); // Holds the search query
  const [movies, setMovies] = useState<MovieType[]>(tempMovieData); // Holds the list of all movies
  const [watched, setWatched] = useState<MovieType[]>(tempWatchedData); // Holds the list of watched movies

  // State for toggling movie lists. These boolean states control the visibility
  // of the two movie lists
  const [isOpen1, setIsOpen1] = useState<boolean>(true); // Controls visibility of movie list 1
  const [isOpen2, setIsOpen2] = useState<boolean>(true); // Controls visibility of movie list 2

  // Calculate average IMDb rating, user rating, and runtime of watched movies
  // By mapping through the watched movies array and passing the values to the average function
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating)); // Average IMDb rating
  const avgUserRating = average(watched.map((movie) => movie.userRating)); // Average user rating
  const avgRuntime = average(watched.map((movie) => movie.runtime)); // Average movie runtime

  const avgStats = {
    avgImdbRating,
    avgUserRating,
    avgRuntime,
    numOfWatchedMovies: watched.length,
  };

  return (
    <>
      <header>
        <Navbar>
          <Logo />
          <SearchBar query={query} setQuery={setQuery} />
          <SearchResults movies={movies} />
        </Navbar>
      </header>

      <main>
        <div className='flex max-h-[calc(100vh-8rem)] flex-1 justify-center gap-5 px-6 py-6'>
          <SearchQuery isOpen={isOpen1} setIsOpen={setIsOpen1} />
          <WatchedMovies
            isOpen={isOpen2}
            setIsOpen={setIsOpen2}
            avgStats={avgStats}
          />
        </div>
      </main>
    </>
  );
}
