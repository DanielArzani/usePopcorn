import React, { useEffect, useState } from 'react';

import Stack from '../Stack';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import MovieCard from '../MovieCard';
import Center from '../Center';

import { MovieType } from '../../types/MovieType';
import { MovieDetailsType } from '../../types/MovieDetailsType';
import { Loading } from '../../types/LoadingTypes';

import { KEY } from '../../apiKey/key';
import { FailureState, LoadingState } from '../LoadingStates';

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

type MovieDetailsProps = {
  movies: MovieType[];
  selectedMovieId: string;
  onSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
  setWatched: React.Dispatch<React.SetStateAction<MovieType[]>>;
  watched: MovieType[];
};

/**
 * Displays extra details of a movie along with a star rating component
 * @param movies An array of movies of MovieType
 * @param selectedMovieId The specific movie in which to get the details of
 * @param onSelectedMovieId The setter function for storing the id of the selected movie, only here in order to pass down as a prop
 */
function MovieDetails({
  movies,
  selectedMovieId,
  onSelectedMovieId,
  watched,
  setWatched,
}: MovieDetailsProps) {
  const [movieDetailsData, setMovieDetailsData] =
    useState<MovieDetailsType>(defaultMovieDetails);
  const [isLoading, setIsLoading] = useState<Loading>('nothing');

  useEffect(() => {
    // GET movie from OMBD API
    const url = `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`;

    (async () => {
      setIsLoading('loading');
      try {
        const res = await fetch(url);
        const data = await res.json();

        setMovieDetailsData(data);
        setIsLoading('success');
      } catch (error) {
        console.error(error);
        setIsLoading('failure');
      }
    })();
  }, [selectedMovieId]);

  return (
    <>
      {isLoading === 'nothing' && null}
      {isLoading === 'loading' && <LoadingState />}
      {isLoading === 'failure' && <FailureState />}
      {isLoading === 'success' && (
        <Stack space='3rem'>
          {/* TODO: Pass in movieDetailsData and de-structure fields instead of passing in so many props */}
          <MovieCard
            imdbRating={
              movieDetailsData.imdbRating !== undefined
                ? movieDetailsData.imdbRating
                : '0'
            }
            Title={movieDetailsData.Title}
            Year={movieDetailsData.Year}
            Poster={movieDetailsData.Poster}
            Genre={movieDetailsData.Genre}
            Plot={movieDetailsData.Plot}
            Released={movieDetailsData.Released}
            Runtime={movieDetailsData.Runtime}
            imdbID={movieDetailsData.imdbID}
            onSelectedMovieId={onSelectedMovieId}
          />

          <Center maxWidth='max-w-350'>
            <Stack space='3rem'>
              <StarRating
                numOfStars={10}
                watched={watched}
                setWatched={setWatched}
                movieDetailsData={movieDetailsData}
                movies={movies}
                selectedMovieId={selectedMovieId}
              />
              <MovieDescription Plot={movieDetailsData.Plot} />
            </Stack>
          </Center>
        </Stack>
      )}
    </>
  );
}

export default MovieDetails;
