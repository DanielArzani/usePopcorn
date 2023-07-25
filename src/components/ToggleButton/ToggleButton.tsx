// Importing React for JSX syntax
import React from 'react';

/**
 * ToggleButton component for the usePopcorn app.
 * This button is used to hide/show content in the parent component.
 * @component
 * @returns
 */
function ToggleButton() {
  return (
    <div className='flex aspect-square h-[1.5rem] items-center justify-center rounded-full bg-[#212529]'>
      <button className=''>-</button>
    </div>
  );
}

export default ToggleButton;
