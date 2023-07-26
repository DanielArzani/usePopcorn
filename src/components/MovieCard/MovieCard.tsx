import React from 'react';
import Box from '../Box';
import Sidebar from '../Sidebar';
import Stack from '../Stack';

function MovieCard() {
  return (
    <Box boxStyles='movie-card-box'>
      <Sidebar
        mainContent={
          <div className='flex h-full items-center'>
            <Stack space='1rem'>
              <h3 className='text-2xl font-bold'>TITLE</h3>
              <p>DATE · RUNTIME</p>
              <p>GENRE</p>
              <p>⭐️ IMBD RATING</p>
            </Stack>
          </div>
        }
        sidebarContent={
          <div className='w-40'>
            <img
              src='https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
              alt=''
            />
          </div>
        }
      />
    </Box>
  );
}

export default MovieCard;
