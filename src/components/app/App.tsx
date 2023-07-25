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
  // State for the search query and movie lists
  // const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<MovieType[]>(tempMovieData);
  const [watched, setWatched] = useState<MovieType[]>(tempWatchedData);

  // State for toggling movie lists
  const [isOpen1, setIsOpen1] = useState<boolean>(true);
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

  // Calculate average IMDb rating, user rating, and runtime of watched movies
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <header>
        <Navbar>
          <Logo />
          <SearchBar />
          <SearchResults />
        </Navbar>
      </header>

      <main>
        <div className='flex max-h-[calc(100vh-8rem)] flex-1 justify-center gap-5 px-6 py-6'>
          <SearchQuery />
          <WatchedMovies />
        </div>
      </main>
    </>
  );
}
