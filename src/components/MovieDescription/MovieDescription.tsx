import React from 'react';

type MovieDescriptionProps = {
  Plot: string;
};

function MovieDescription({ Plot }: MovieDescriptionProps) {
  return (
    <div className='mb-4 flex flex-col gap-11'>
      <p>{Plot}</p>
    </div>
  );
}

export default MovieDescription;
