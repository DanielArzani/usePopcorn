import { useState } from 'react';

import { tempMovieData } from '../../data/movieData';
import { tempWatchedData } from '../../data/watchedMovieData';

import { MovieType } from '../../types/MovieType';

import Navbar from '../Navbar';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import SearchQuery from '../SearchQuery';
import WatchedMovies from '../WatchedMovies';
import Box from '../Box';
import ListOfMovies from '../ListOfMovies';
import Grid from '../Grid';
import MovieStatisticsPanel from '../MovieStatisticsPanel';
import Stack from '../Stack';
import MoviesBox from '../MoviesBox';

/**
 * Main component for the usePopcorn app.
 * Displays a list of movies and their details, along with statistics about watched movies.
 */
export default function App() {
  const [query, setQuery] = useState<string>(''); // Holds the search query
  const [movies, setMovies] = useState<MovieType[]>(tempMovieData); // Holds the list of all movies
  const [watched, setWatched] = useState<MovieType[]>(tempWatchedData); // Holds the list of watched movies

  return (
    <Stack space='2'>
      <header>
        <Navbar>
          <Logo />
          <SearchBar query={query} setQuery={setQuery} />
          <SearchResults movies={movies} />
        </Navbar>
      </header>

      <main>
        <Grid>
          <MoviesBox>
            <ListOfMovies type='not-watched' moviesArray={movies} />
          </MoviesBox>

          <MoviesBox>
            <MovieStatisticsPanel watched={watched} />
            <ListOfMovies type='watched' moviesArray={watched} />
          </MoviesBox>
        </Grid>
      </main>
    </Stack>
  );
}
