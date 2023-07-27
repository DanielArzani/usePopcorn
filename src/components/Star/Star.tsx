import React from 'react';

type StarProps = {
  starNumber: number;
  currentRating: number;
  setRating: (rating: number) => void;
};

/**
 * A star emoji, either filled or empty
 * @param starNumber - The number that the star represents
 * @param currentRating - The number in which the clicked on star represents
 * @param setRating - The setter function for changing the rating on input click
 */
function Star({ starNumber, currentRating, setRating }: StarProps) {
  const filledStar = '⭐';
  const emptyStar = '☆';

  const isFilled = starNumber <= currentRating;
  const star = isFilled ? filledStar : emptyStar;

  return (
    <>
      <input
        type='radio'
        className='sr-only'
        id={`star-${starNumber}`}
        value={starNumber}
        checked={currentRating === starNumber}
        onChange={(e) => {
          setRating(Number(e.target.value));
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
