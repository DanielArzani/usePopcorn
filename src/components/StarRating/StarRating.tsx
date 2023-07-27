import React, { useState } from 'react';
import { range } from '../../utils/range';
import Star from '../Star/Star';
import Button from '../Button';

type StarRatingProps = {
  numOfStars: number;
};

/**
 * Renders an accessible list of stars used to rate things such as movies and a button for form submission
 * @param numOfStars - The number of stars the list should have
 */
function StarRating({ numOfStars }: StarRatingProps) {
  const [rating, setRating] = useState(1);

  const convertedNumOfStars = Number(numOfStars + 1);

  return (
    <>
      <form>
        {range(1, convertedNumOfStars).map((starNum) => {
          return (
            <Star
              key={starNum}
              starNumber={starNum}
              currentRating={rating}
              setRating={setRating}
            />
          );
        })}
      </form>

      <p>{rating}</p>

      <Button>+ Add to list</Button>
    </>
  );
}

export default StarRating;
