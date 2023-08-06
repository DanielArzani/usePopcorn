import React, { useState } from 'react';
import { range } from '../../utils/range';
import Star from '../Star/Star';
import Button from '../Button';

import { MovieDetailsType } from '../../types/MovieDetailsType';

type StarRatingProps = {
  numOfStars: number;
  watched: MovieDetailsType[];
  setWatched: React.Dispatch<React.SetStateAction<MovieDetailsType[]>>;
  movieDetailsData: MovieDetailsType;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Renders an accessible list of stars used to rate things such as movies and a button for adding a movie to the list of watched movies (along with a personal rating)
 * @param numOfStars - The number of stars the list should have
 * @param watched The list of watched movies, it's here only to be passed down as a prop
 * @param setWatched The setter function for the list of watched movies, it's here only to be passed down as a prop
 * @param movieDetailsData The movie which should be added to the watched list on button click
 * @param setMovieRating The setter function for the rating prop, it is here to be passed into the star component in order to sync with its local rating state
 */
function StarRating({
  numOfStars,
  watched,
  setWatched,
  movieDetailsData,
  setMovieRating,
}: StarRatingProps) {
  const [rating, setRating] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const convertedNumOfStars = Number(numOfStars + 1);

  const handleClick = () => {
    // Check if the movie is already in the watched array in order to disallow duplicates of the same movie being added to the list of watched movies
    if (!watched.some((movie) => movie.imdbID === movieDetailsData.imdbID)) {
      const newArray = [...watched, movieDetailsData];
      setWatched(newArray);
    }
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
                setMovieRating={setMovieRating}
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
