import React from 'react';

type CenterProps = {
  children: React.ReactNode;
  maxWidth: string;
};

/**
 * A layout component. It will center its children
 * @param children - The content that should be centered
 * @param maxWidth - The maximum width that the content should be allowed to have. Because tailwind won't allow dynamic generation by passing in a value using props, this should be a utility class
 * @example <Center maxWidth="max-w-300">...</Center>
 */
const Center: React.FC<CenterProps> = ({ children, maxWidth }) => {
  const centerStyle = `mx-auto box-content`;

  return <div className={centerStyle + ' ' + `${maxWidth}`}>{children}</div>;
};

export default Center;
