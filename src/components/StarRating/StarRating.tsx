import React, { useEffect, useRef, useState } from 'react';
import { range } from '../../utils/range';
import Star from '../Star/Star';
import Button from '../Button';

import { MovieDetailsType } from '../../types/MovieDetailsType';

type StarRatingProps = {
  numOfStars: number;
  watched: MovieDetailsType[];
  setWatched: React.Dispatch<React.SetStateAction<MovieDetailsType[]>>;
  movieDetailsData: MovieDetailsType;
  setMovieDetailsData: React.Dispatch<React.SetStateAction<MovieDetailsType>>;
  onCloseMovie(): void;
};

/**
 * Renders an accessible list of stars used to rate things such as movies and a button for adding a movie to the list of watched movies (along with a personal rating)
 * @param numOfStars - The number of stars the list should have
 * @param watched The list of watched movies, it's here only to be passed down as a prop
 * @param setWatched The setter function for the list of watched movies, it's here only to be passed down as a prop
 * @param movieDetailsData The movie which should be added to the watched list on button click
 * @param setMovieDetailsData The setter function for the movieDetailsData. Here in order to update the data to allow a userRating field
 * @param onCloseMovie For resetting the selectedMovieId on button click in order to unmount the movie details
 */
function StarRating({
  numOfStars,
  watched,
  setWatched,
  movieDetailsData,
  setMovieDetailsData,
  onCloseMovie,
}: StarRatingProps) {
  const [rating, setRating] = useState(movieDetailsData.userRating || 0);
  const [isClicked, setIsClicked] = useState(false);

  const convertedNumOfStars = Number(numOfStars + 1);

  // for storing internally the number of times a user has clicked on one of the ratings
  const countRef = useRef<number>(0);

  /**
   * Callback function will add a movie to the list of watched movies, will check to make sure that no duplicate movies can be added and will allow for replacing the old rating with a new one as well as unmounting the movie details after wards.
   */
  const handleClick = () => {
    const updatedMovieDetails = {
      ...movieDetailsData,
      userRating: rating,
      countRatingDecisions: countRef.current,
    };
    setMovieDetailsData(updatedMovieDetails);

    // Check if the movie is already in the watched array
    const movieIndex = watched.findIndex(
      (movie) => movie.imdbID === movieDetailsData.imdbID
    );
    if (movieIndex !== -1) {
      // Update the existing movie with the new rating
      const updatedWatchedMovies = [...watched];
      updatedWatchedMovies[movieIndex] = updatedMovieDetails;
      setWatched(updatedWatchedMovies);
    } else {
      // Add the movie to the watched array
      const newArray = [...watched, updatedMovieDetails];
      setWatched(newArray);
    }

    onCloseMovie();
  };

  // useEffect for the countRef
  useEffect(() => {
    if (rating) countRef.current = countRef.current + 1;
  }, [rating]);

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
