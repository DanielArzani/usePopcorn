import React, { CSSProperties } from 'react';

/**
 * StackProps
 * children - Elements that will be stacked vertically.
 * space - Controls the gap between stacked elements. It should be a string representing a number. Default is '6'.
 *         This value is converted to rem units, with '1' equal to 0.25rem.
 */
type StackProps = {
  children: React.ReactNode;
  space?: string;
};

/**
 * The Stack component
 * This component receives children elements and stacks them vertically with a gap.
 * The size of the gap is controlled by the 'space' prop.
 */
const Stack: React.FC<StackProps> = ({ children, space = '6' }) => {
  // Define the styles for the stack.
  // The gap between elements is calculated based on the 'space' prop.
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
