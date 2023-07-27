import React, { CSSProperties } from 'react';

type StackProps = {
  children: React.ReactNode;
  space?: string;
};

/**
 * The Stack component
 * This component receives children elements and stacks them vertically with a gap.
 *@param space - The space between each component, in rem
 */
const Stack = ({ children, space = '6' }: StackProps) => {
  const stackStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: `${parseInt(space) * (0.25 * 4)}rem`, // converts 'space' into rem units
  };

  return (
    // Render a div with the stack styles applied. The children are rendered inside this div.
    <div style={stackStyles}>
      {React.Children.map(children, (child, index) => (
        // Render each child inside its own div. The key for each child is its index.
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default Stack;
