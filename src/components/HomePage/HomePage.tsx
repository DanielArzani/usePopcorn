import { useEffect, useState } from 'react';

import getMovies from '../../utils/getMovies';

import { MovieType } from '../../types/MovieType';
import { Loading } from '../../types/LoadingTypes';
import { MovieDetailsType } from '../../types/MovieDetailsType';

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
import ListOfUnWatchedMovies from '../ListOfUnWatchedMovies';
import ListOfWatchedMovies from '../ListOfWatchedMovies';

const defaultMovieDetails = {
  Genre: '',
  Plot: '',
  Poster: '',
  Released: '',
  Runtime: '',
  Title: '',
  Year: '',
  imdbID: '',
  imdbRating: '',
};

/**
 * The main container for the usePopcorn application. Holds all of the content within it
 */
function HomePage() {
  const [query, setQuery] = useState<string>(''); // Holds the search query
  const [movies, setMovies] = useState<MovieType[]>([]); // Holds the list of all movies
  // const [watched, setWatched] = useState<MovieDetailsType[]>([]); // Holds the list of watched movies

  // Load watched movies from local storage when the component mounts
  const [watched, setWatched] = useState<MovieDetailsType[]>(() => {
    const savedWatched = localStorage.getItem('watchedMovies');
    return savedWatched ? JSON.parse(savedWatched) : [];
  });

  const [loading, setLoading] = useState<Loading>('success');

  const [selectedMovieId, setSelectedMovieId] = useState('');

  const [movieDetailsData, setMovieDetailsData] =
    useState<MovieDetailsType>(defaultMovieDetails);

  // Deletes a movie from the watched movies list
  const handleDeleteMovie = (e: React.MouseEvent, imdbID: string) => {
    // This is to prevent the click event from propagating upwards to the list item
    e.stopPropagation();

    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== imdbID)
    );

    setSelectedMovieId('');
  };

  // Save watched movies to local storage whenever the watched state changes
  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }, [watched]);

  // Fetching the movie data on search query and setting loading states
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
              <SuccessState moviesArray={movies}>
                <ListOfUnWatchedMovies
                  movies={movies}
                  selectedMovieId={selectedMovieId}
                  setSelectedMovieId={setSelectedMovieId}
                />
              </SuccessState>
            )}
            {loading === 'failure' && <FailureState />}
          </MoviesBox>

          <MoviesBox>
            {selectedMovieId === '' && (
              <>
                <MovieStatisticsPanel watched={watched} />

                <ListOfWatchedMovies
                  movies={watched}
                  selectedMovieId={selectedMovieId}
                  setSelectedMovieId={setSelectedMovieId}
                  onDeleteMovie={handleDeleteMovie}
                />
              </>
            )}

            {selectedMovieId !== '' && (
              <MovieDetails
                selectedMovieId={selectedMovieId}
                setSelectedMovieId={setSelectedMovieId}
                movieDetailsData={movieDetailsData}
                setMovieDetailsData={setMovieDetailsData}
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

export default HomePage;
