import React from 'react';

type BoxProps = {
  invert?: boolean;
  children: React.ReactNode;
  boxStyles?: string;
};

const defaultStyles = `p-4 border border-solid text-black bg-white ${'bg-white text-black'}`;

/**
 * A visible container for content.
 * Pass in the styles that you wish for the box container to have, layouts should be left to other components
 * The invert prop is for inverse styles
 */
const Box = ({
  invert = false,
  children,
  boxStyles = defaultStyles,
}: BoxProps) => {
  return <div className={boxStyles}>{children}</div>;
};

export default Box;
