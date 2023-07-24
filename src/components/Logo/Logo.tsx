import React from 'react';

/**
 * Logo component displaying a popcorn emoji and the app name.
 * @component
 */
function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <span role='img' className='text-4xl'>
        🍿
      </span>
      <h1 className='text-2xl font-bold text-white'>usePopcorn</h1>
    </div>
  );
}

export default Logo;
