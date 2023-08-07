import React from 'react';
import MovieStats from '../MovieStats';

type WatchedMovieListItemProps = {
  ListItemProps: {
    imdbID: string;
    Title: string;
    Poster: string;
    statProps: {
      runTime: number;
      imdbRating: number;
      userRating: number;
    };
  };
  onDeleteMovie: (e: React.MouseEvent, imdbID: string) => void;
};

/**
 * The watched movie
 * @param ListItemProps The watched movie requires the imdbID, title, poster and a stat props object which has the runTime, imdbRating and userRating
 * @param onDeleteMovie The callback to delete a movie from the watched movies list
 */
function WatchedMovieListItem({
  ListItemProps,
  onDeleteMovie,
}: WatchedMovieListItemProps) {
  const { imdbID, Title, Poster, statProps } = ListItemProps;
  return (
    <div className='flex gap-4'>
      <div className='max-w-[50px]'>
        <img
          className='h-[100%] w-[100%]'
          src={Poster}
          alt={`${Title} poster`}
        />

        <a
          href='#'
          onClick={(e) => {
            onDeleteMovie(e, imdbID);
          }}
          className='text-red-500'
        >
          Delete
        </a>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h2 className='mb-2 font-bold'>{Title}</h2>

        <div>
          <MovieStats statProps={statProps} />
        </div>
      </div>
    </div>
  );
}

export default WatchedMovieListItem;
