import React from 'react';

function Movie() {
  return (
    <div>
      <div className='max-w-[50px]'>
        <img
          className='h-[100%] w-[100%]'
          src='https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
          alt='inception'
        />
      </div>
      <h2>Inception</h2>
      <p>Year: 2010</p>
    </div>
  );
}

export default Movie;
