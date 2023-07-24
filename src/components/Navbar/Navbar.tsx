import React from 'react';

type NavbarProps = {
  children: React.ReactNode;
};

/**
 * Navbar component that wraps its children in a navigation bar.
 * @component
 * @param {NavbarProps} props - Props for Navbar component.
 */
function Navbar({ children }: NavbarProps) {
  return (
    <nav className='flex flex-wrap items-center justify-between rounded-lg bg-[#6741d9] p-6'>
      {children}
    </nav>
  );
}

export default Navbar;
