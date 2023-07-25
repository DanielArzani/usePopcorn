import React from 'react';

type NavbarProps = {
  children: React.ReactNode; // children prop allows any valid React node(s) to be passed to the component
};

/**
 * Navbar component for the usePopcorn app.
 * The component serves as a container for the navigation items of the application.
 * The children prop allows for flexibility in what can be included in the navbar.
 * @component
 * @param {NavbarProps} props - Props for the Navbar component.
 * @returns A nav element with the passed children components.
 */
function Navbar({ children }: NavbarProps) {
  return (
    <nav className='flex flex-wrap items-center justify-between rounded-lg bg-[#6741d9] p-6'>
      {children}
    </nav>
  );
}

export default Navbar;
