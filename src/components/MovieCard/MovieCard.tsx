import React from 'react';
import Box from '../Box';
import Sidebar from '../Sidebar';
import Stack from '../Stack';

type MovieCardProps = {
  Genre: string;
  Plot: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  onSelectedMovieId: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Extra information about a chosen movie along with a larger sized poster and a back button in order to stop showing the extra details
 */
function MovieCard({
  imdbRating,
  Title,
  Year,
  Poster,
  Released,
  Runtime,
  imdbID,
  Plot,
  Genre,
  onSelectedMovieId,
}: MovieCardProps) {
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
              <p>⭐️ {imdbRating}</p>
            </Stack>
          </div>
        }
        sidebarContent={
          <div className='relative w-40'>
            <button
              onClick={() => onSelectedMovieId('')}
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
