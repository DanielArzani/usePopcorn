import React from 'react';

import ListOfMovies from '../ListOfMovies';
import ToggleButton from '../ToggleButton';

import { tempMovieData } from '../../data/movieData';

type SearchQueryProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * SearchQuery component for the usePopcorn app.
 * It contains a ToggleButton for showing/hiding the movies list and a ListOfMovies component that displays the movie list.
 * It is responsible for showing the list of unwatched movies (derived from the "not-watched" type passed to the ListOfMovies component).
 * @component
 * @returns A div containing a ToggleButton component and a ListOfMovies component.
 */
function SearchQuery({ isOpen, setIsOpen }: SearchQueryProps) {
  return (
    <div className='relative basis-1/3 overflow-scroll rounded-lg bg-[#2b3035]'>
      <div className='absolute top-0 right-0'>
        <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {/* ListOfMovies component displaying unwatched movies */}
      {isOpen && (
        <div className='ml-8 mt-4'>
          <ListOfMovies moviesArray={tempMovieData} type='not-watched' />
        </div>
      )}
    </div>
  );
}

export default SearchQuery;
