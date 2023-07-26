import React from 'react';

type StatProp = { children: React.ReactNode };

function Stat({ children }: StatProp) {
  return <p className='font-semibold'>{children}</p>;
}

export default Stat;
