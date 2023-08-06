import { useEffect, useState } from 'react';

import getMovies from '../../utils/getMovies';

import { MovieType } from '../../types/MovieType';

import Navbar from '../Navbar';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';
import ListOfMovies from '../ListOfMovies';
import Grid from '../Grid';
import Stack from '../Stack';
import MoviesBox from '../MoviesBox';
import MovieStatisticsPanel from '../MovieStatisticsPanel';
import MovieDetails from '../MovieDetails';

// The API key
const KEY = '9664ed15';

/**
 * Main component for the usePopcorn app.
 * Displays a list of movies and their details, along with statistics about watched movies.
 */
export default function App() {
  const [query, setQuery] = useState<string>(''); // Holds the search query
  const [movies, setMovies] = useState<MovieType[]>([]); // Holds the list of all movies
  const [watched, setWatched] = useState<MovieType[]>([]); // Holds the list of watched movies

  type Loading = 'success' | 'failure' | 'loading' | 'nothing';
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
              <MovieStatisticsPanel watched={watched} />
            )}

            {selectedMovieId !== '' && (
              <MovieDetails
                movies={movies}
                selectedMovieId={selectedMovieId}
                onSelectedMovieId={setSelectedMovieId}
              />
            )}

            {/* <ListOfMovies
              type='watched'
              moviesArray={watched}
              selectedMovieId={selectedMovieId}
              onSelectedMovie={setSelectedMovieId}
            /> */}
          </MoviesBox>
        </Grid>
      </main>
    </Stack>
  );
}

function LoadingState() {
  return <p>Loading...</p>;
}

function FailureState() {
  return <p>Failed to load</p>;
}

type SuccessStateProps = {
  moviesArray: MovieType[];
  selectedMovieId: string;
  onSelectedMovie: React.Dispatch<React.SetStateAction<string>>;
};
function SuccessState({
  moviesArray,
  selectedMovieId,
  onSelectedMovie,
}: SuccessStateProps) {
  if (moviesArray.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <ListOfMovies
      type='not-watched'
      moviesArray={moviesArray}
      selectedMovieId={selectedMovieId}
      onSelectedMovie={onSelectedMovie}
    />
  );
}
