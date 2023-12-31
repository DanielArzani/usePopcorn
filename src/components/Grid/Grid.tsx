import React from 'react';

import styles from './Grid.module.css';

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid_search_query}>{children}</div>;
};

export default Grid;
