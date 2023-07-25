import React from 'react';

function MovieStatisticsPanel() {
  return (
    <div className='rounded-lg bg-[#343A3F] py-4 px-8'>
      <h3 className='text-lg font-bold'>Movies You Watched</h3>

      <div className='flex justify-between'>
        <p className='font-semibold'>
          #️⃣
          <span> 0 </span>
          <span className='sr-only'>Number of movies you've watched</span>
          movies
        </p>
        <p className='font-semibold'>
          ⭐️
          <span> 0.00 </span>
          <span className='sr-only'>IMBD Rating</span>
        </p>
        <p className='font-semibold'>
          🌟
          <span> 0.00 </span>
          <span className='sr-only'>User Rating</span>
        </p>
        <p className='font-semibold'>
          ⏳<span> min </span>
          <span className='sr-only'>Movie Runtime</span>
        </p>
      </div>
    </div>
  );
}

export default MovieStatisticsPanel;
