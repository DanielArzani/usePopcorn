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
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import MovieCard from '../MovieCard';
import Center from '../Center';
import MovieStatisticsPanel from '../MovieStatisticsPanel';

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

  type Loading = 'success' | 'failure' | 'loading';
  const [loading, setLoading] = useState<Loading>('loading');

  useEffect(() => {
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
            {loading === 'loading' && <LoadingState />}
            {loading === 'success' && <SuccessState moviesArray={movies} />}
            {loading === 'failure' && <FailureState />}
          </MoviesBox>

          <MoviesBox>
            <MovieStatisticsPanel watched={watched} />
            {/* <ListOfMovies type='watched' moviesArray={watched} /> */}
          </MoviesBox>

          {/* <MoviesBox>
            <Stack space='3rem'>
              <MovieCard />

              <Center maxWidth='max-w-350'>
                <Stack space='3rem'>
                  <StarRating numOfStars={10} />
                  <MovieDescription />
                </Stack>
              </Center>
            </Stack>
          </MoviesBox> */}
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
};
function SuccessState({ moviesArray }: SuccessStateProps) {
  if (moviesArray.length === 0) {
    return <p>No movies found</p>;
  }

  return <ListOfMovies type='not-watched' moviesArray={moviesArray} />;
}
