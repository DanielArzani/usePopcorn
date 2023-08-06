// Sidebar.tsx

import React, { ReactNode } from 'react';

type SidebarProps = {
  sidebarContent: ReactNode;
  mainContent: ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarContent, mainContent }) => {
  return (
    <div className='flex gap-4'>
      <div>{sidebarContent}</div>
      <div className='min-w-1/2 flex-grow'>{mainContent}</div>
    </div>
  );
};

export default Sidebar;
