import React, { useEffect, useState } from 'react';

import Stack from '../Stack';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import MovieCard from '../MovieCard';
import Center from '../Center';

import { MovieType } from '../../types/MovieType';

import { KEY } from '../../apiKey/key';

type MovieDetails = {
  Genre: string;
  Plot: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
};

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
}: MovieDetailsProps) {
  const [movieDetailsData, setMovieDetailsData] =
    useState<MovieDetails>(defaultMovieDetails);

  const filterSelectedMovie = movies.filter((movie) => {
    return movie.imdbID === selectedMovieId;
  });

  useEffect(() => {
    // GET movie from OMBD API
    const url = `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`;

    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      setMovieDetailsData(data);
    })();
  }, [selectedMovieId]);

  return (
    <>
      <Stack space='3rem'>
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
            <StarRating numOfStars={10} />
            <MovieDescription Plot={movieDetailsData.Plot} />
          </Stack>
        </Center>
      </Stack>
    </>
  );
}

export default MovieDetails;
