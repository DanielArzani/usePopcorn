import React from 'react';
import Box from '../Box';
import Sidebar from '../Sidebar';
import Stack from '../Stack';

import { MovieDetailsType } from '../../types/MovieDetailsType';

type MovieCardProps = {
  cardProps: MovieDetailsType;
  onCloseMovie(): void;
};

/**
 * Extra information about a chosen movie along with a larger sized poster and a back button in order to stop showing the extra details
 * @param cardProps The information of the movie to be shown
 * @param onCloseMovie For closing the movie details component

 */
function MovieCard({ cardProps, onCloseMovie }: MovieCardProps) {
  const {
    imdbRating,
    Title,
    Year,
    Poster,
    Released,
    Runtime,
    imdbID,
    Plot,
    Genre,
  } = cardProps;

  return (
    <Box boxStyles='movie-card-box'>
      <Sidebar
        mainContent={
          <div className=' flex h-full items-center'>
            <Stack space='1rem'>
              <h3 className='text-2xl font-bold'>{Title}</h3>
              <p>
                {Year} · {Runtime}
              </p>
              <p>{Genre}</p>
              <p>⭐️ {imdbRating} IMBD Rating</p>
            </Stack>
          </div>
        }
        sidebarContent={
          <div className='relative w-40'>
            <button
              onClick={() => onCloseMovie}
              className='absolute top-1 left-1 flex items-center justify-center rounded-full bg-white px-[0.4rem] py-0 text-black'
              style={{ fontSize: '24px' }}
            >
              &larr;
            </button>
            <img src={Poster} alt={Title + ' ' + 'Poster'} />
          </div>
        }
      />
    </Box>
  );
}

export default MovieCard;
