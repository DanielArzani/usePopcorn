import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  styles?: string;
  onClick?: () => void;
};

const defaultStyles = 'bg-[#6741d9] py-2 px-4 rounded-full';

/**
 * A generic button component in which the styles, content and onClick handler may be passed in
 * @param children - The content that should be displayed within the button
 * @param styles - A string of classes used to style the button
 * @param onClick - The onClick handler, if any
 */
function Button({ children, onClick, styles = defaultStyles }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

export default Button;
