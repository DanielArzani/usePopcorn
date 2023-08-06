import { useEffect, useState } from 'react';

import getMovies from '../../utils/getMovies';

import { MovieType } from '../../types/MovieType';
import { Loading } from '../../types/LoadingTypes';

import Navbar from '../Navbar';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import Grid from '../Grid';
import Stack from '../Stack';
import MoviesBox from '../MoviesBox';
import MovieStatisticsPanel from '../MovieStatisticsPanel';
import MovieDetails from '../MovieDetails';
import { FailureState, LoadingState, SuccessState } from '../LoadingStates';

import { KEY } from '../../apiKey/key';
import ListOfMovies from '../ListOfMovies';

/**
 * Main component for the usePopcorn app.
 * Displays a list of movies and their details, along with statistics about watched movies.
 */
export default function App() {
  const [query, setQuery] = useState<string>(''); // Holds the search query
  const [movies, setMovies] = useState<MovieType[]>([]); // Holds the list of all movies
  const [watched, setWatched] = useState<MovieType[]>([]); // Holds the list of watched movies

  const [loading, setLoading] = useState<Loading>('nothing');

  const [selectedMovieId, setSelectedMovieId] = useState('');

  useEffect(() => {
    if (query === '') setLoading('nothing');

    // No movies will show up with only 2 letters so no point is querying for them at that point
    if (query.length >= 3) {
      if (query !== '') {
        // Only perform the API call when query is not an empty string
        setLoading('loading'); // Set loading to true at the start of an API call

        // GET movies from OMBD API
        const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

        const moviesResultsPromise = getMovies(url);

        (async () => {
          const data = await moviesResultsPromise;
          if (data !== undefined) {
            setLoading('success');
            setMovies(data.Search);
          } else {
            setLoading('failure');
          }
        })();
      }
    }
  }, [query]);

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
            {/* if the user hasn't begin to search for anything, simply return nothing */}
            {loading === 'nothing' && null}
            {loading === 'loading' && <LoadingState />}
            {loading === 'success' && (
              <SuccessState
                moviesArray={movies}
                selectedMovieId={selectedMovieId}
                onSelectedMovie={setSelectedMovieId}
              />
            )}
            {loading === 'failure' && <FailureState />}
          </MoviesBox>

          <MoviesBox>
            {selectedMovieId === '' && (
              <>
                <MovieStatisticsPanel watched={watched} />

                <ListOfMovies
                  type='watched'
                  moviesArray={watched}
                  selectedMovieId={selectedMovieId}
                  onSelectedMovie={setSelectedMovieId}
                />
              </>
            )}

            {selectedMovieId !== '' && (
              <MovieDetails
                movies={movies}
                selectedMovieId={selectedMovieId}
                onSelectedMovieId={setSelectedMovieId}
                watched={watched}
                setWatched={setWatched}
              />
            )}
          </MoviesBox>
        </Grid>
      </main>
    </Stack>
  );
}
