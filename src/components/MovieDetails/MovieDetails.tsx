import React from 'react';

import Stack from '../Stack';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import MovieCard from '../MovieCard';
import Center from '../Center';

import { MovieType } from '../../types/MovieType';

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
  const filterSelectedMovie = movies.filter((movie) => {
    return movie.imdbID === selectedMovieId;
  });

  const getMovie = filterSelectedMovie[0];

  return (
    <>
      <Stack space='3rem'>
        <MovieCard
          imdbIDRating={
            getMovie.imdbRating !== undefined ? getMovie.imdbRating : 0
          }
          Title={getMovie.Title}
          Year={getMovie.Year}
          Poster={getMovie.Poster}
          onSelectedMovieId={onSelectedMovieId}
        />

        <Center maxWidth='max-w-350'>
          <Stack space='3rem'>
            <StarRating numOfStars={10} />
            <MovieDescription />
          </Stack>
        </Center>
      </Stack>
    </>
  );
}

export default MovieDetails;
