import React, { useState } from 'react';
import Box from '../Box';
import ToggleButton from '../ToggleButton';
import ListOfMovies from '../ListOfMovies';
import { MovieType } from '../../types/MovieType';

type MoviesBoxProps = {
  children: React.ReactNode;
};

/**
 * The box for the search query containers (the watched and unwatched movies)
 */
function MoviesBox({ children }: MoviesBoxProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Box boxStyles='search-query-box'>
        <div className='absolute top-1 right-1'>
          <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {isOpen && children}
      </Box>
    </>
  );
}

export default MoviesBox;
