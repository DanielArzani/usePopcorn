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

import useMovies from '../../hooks/useMovies';
import useLocalStorageState from '../../hooks/useLocalStorageState';

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

  // Fetching the movie data on search query and setting loading states
  const [movies, loading] = useMovies(query, KEY);

  const [watched, setWatched] = useLocalStorageState<MovieDetailsType[]>(
    [],
    'watchedMovies'
  );

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
  };

  /**
   * Closes the MovieDetails component
   */
  function onCloseMovie() {
    setSelectedMovieId('');
  }

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
                  onCloseMovie={onCloseMovie}
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
                  onCloseMovie={onCloseMovie}
                  setSelectedMovieId={setSelectedMovieId}
                  onDeleteMovie={handleDeleteMovie}
                />
              </>
            )}

            {selectedMovieId !== '' && (
              <MovieDetails
                selectedMovieId={selectedMovieId}
                onCloseMovie={onCloseMovie}
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
