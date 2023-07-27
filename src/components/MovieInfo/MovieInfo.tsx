import React from 'react';
import Center from '../Center';
import StarRating from '../StarRating';
import MovieDescription from '../MovieDescription';
import Stack from '../Stack';

function MovieInfo() {
  return (
    <>
      <Center maxWidth='max-w-350'>
        <Stack space='3rem'>
          <StarRating numOfStars={10} />
          <MovieDescription />
        </Stack>
      </Center>
    </>
  );
}

export default MovieInfo;
