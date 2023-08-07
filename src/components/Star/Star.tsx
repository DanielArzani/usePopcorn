import React from 'react';

type StarProps = {
  starNumber: number;
  rating: number;
  setRating: (rating: number) => void;
  setIsClicked: (value: boolean) => void;
};

/**
 * A star emoji, either filled or empty
 * @param starNumber - The number that the star represents
 * @param currentRating - The number in which the clicked on star represents
 * @param setRating - The setter function for changing the rating on input click
 */
function Star({ starNumber, rating, setRating, setIsClicked }: StarProps) {
  const filledStar = '⭐';
  const emptyStar = '☆';

  const isFilled = starNumber <= rating;
  const star = isFilled ? filledStar : emptyStar;

  return (
    <>
      <input
        type='radio'
        className='sr-only'
        id={`star-${starNumber}`}
        value={starNumber}
        checked={rating === starNumber}
        onChange={(e) => {
          setRating(Number(e.target.value));
          setIsClicked(true);
        }}
        name='star-rating'
      />
      <label htmlFor={`star-${starNumber}`} className='cursor-pointer text-xl'>
        <span className='sr-only'>{`${starNumber} stars`}</span>
        {star}
      </label>
    </>
  );
}

export default Star;
