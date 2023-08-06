import React, { useState } from 'react';
import { range } from '../../utils/range';
import Star from '../Star/Star';
import Button from '../Button';

import { MovieType } from '../../types/MovieType';
import { MovieDetailsType } from '../../types/MovieDetailsType';

type StarRatingProps = {
  numOfStars: number;
  watched: MovieType[];
  setWatched: React.Dispatch<React.SetStateAction<MovieType[]>>;
  movieDetailsData: MovieDetailsType;
  movies: MovieType[];
  selectedMovieId: string;
};

/**
 * Renders an accessible list of stars used to rate things such as movies and a button for form submission
 * @param numOfStars - The number of stars the list should have
 */
function StarRating({
  numOfStars,
  watched,
  setWatched,
  movieDetailsData,
  movies,
  selectedMovieId,
}: StarRatingProps) {
  const [rating, setRating] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const convertedNumOfStars = Number(numOfStars + 1);

  const handleClick = () => {
    const getWatchedMovie = movies.filter(
      (movie) => movie.imdbID === selectedMovieId
    );

    const newMoviesArray = [...watched, ...getWatchedMovie];

    setWatched(newMoviesArray);
  };

  return (
    <div className='flex flex-col gap-4 rounded-xl bg-[#343a40] p-4'>
      <div className='flex justify-center gap-4'>
        <form className='flex flex-wrap gap-1'>
          {range(1, convertedNumOfStars).map((starNum) => {
            return (
              <Star
                key={starNum}
                starNumber={starNum}
                rating={rating}
                setRating={setRating}
                setIsClicked={setIsClicked}
              />
            );
          })}
        </form>

        <p className='text-xl'>{rating}</p>
      </div>

      {isClicked && <Button onClick={handleClick}>+ Add to list</Button>}
    </div>
  );
}

export default StarRating;
