import React, { useEffect, useState } from 'react';

import Stack from '../Stack';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import MovieCard from '../MovieCard';
import Center from '../Center';

import { MovieDetailsType } from '../../types/MovieDetailsType';
import { Loading } from '../../types/LoadingTypes';

import { KEY } from '../../apiKey/key';
import { FailureState, LoadingState } from '../LoadingStates';

type MovieDetailsProps = {
  selectedMovieId: string;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
  movieDetailsData: MovieDetailsType;
  setMovieDetailsData: React.Dispatch<React.SetStateAction<MovieDetailsType>>;
};

/**
 * Displays extra details of a movie along with a star rating component
 * @param movieDetailsData The data of the movie, fetched using the selectedMovieId
 * @param setMovieDetailsData The setter function for the movieDetailsData
 * @param selectedMovieId The specific movie in which to get the details of
 * @param onSelectedMovieId The setter function for storing the id of the selected movie
 */
function MovieDetails({
  selectedMovieId,
  setSelectedMovieId,
  movieDetailsData,
  setMovieDetailsData,
}: MovieDetailsProps) {
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
          <MovieCard
            cardProps={movieDetailsData}
            onSelectedMovieId={setSelectedMovieId}
          />
          <Center maxWidth='max-w-350'>
            <Stack space='3rem'>
              <StarRating numOfStars={10} />

              <MovieDescription Plot={movieDetailsData.Plot} />
            </Stack>
          </Center>
        </Stack>
      )}
    </>
  );
}

export default MovieDetails;
