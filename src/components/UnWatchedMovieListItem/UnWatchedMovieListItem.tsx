import React from 'react';

type UnWatchedMovieListItemProps = {
  ListItemProps: {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
  };
};

/**
 * The watched movie
 * @param ListItemProps The watched movie requires the imdbID, title, poster and the year
 */
function UnWatchedMovieListItem({
  ListItemProps,
}: UnWatchedMovieListItemProps) {
  const { imdbID, Title, Poster, Year } = ListItemProps;

  return (
    <div className='flex gap-4'>
      <div className='max-w-[50px]'>
        <img
          className='h-[100%] w-[100%]'
          src={Poster}
          alt={`${Title} poster`}
        />
      </div>

      <div className='flex flex-col justify-center'>
        <h2 className='mb-2 font-bold'>{Title}</h2>

        <div>
          <p className='flex items-end gap-3'>
            <span className='text-xl'>🗓️</span> {Year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnWatchedMovieListItem;
