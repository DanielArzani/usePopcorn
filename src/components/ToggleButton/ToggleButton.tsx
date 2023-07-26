// Importing React for JSX syntax
import React from 'react';

type ToggleButtonProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * ToggleButton component for the usePopcorn app.
 * This button is used to hide/show content in the parent component.
 * @component
 * @returns
 */
function ToggleButton({ isOpen, setIsOpen }: ToggleButtonProps) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex aspect-square h-[1.5rem] items-center justify-center rounded-full bg-[#212529]'>
      <button onClick={handleClick}>{isOpen ? '-' : '+'}</button>
    </div>
  );
}

export default ToggleButton;
