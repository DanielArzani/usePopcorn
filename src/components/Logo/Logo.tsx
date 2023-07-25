import React from 'react';

/**
 * Logo component for usePopcorn app.
 * This component displays a popcorn emoji along with the name of the app (usePopcorn).
 * @component
 * @returns A div containing the logo elements.
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
