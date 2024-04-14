import React, { FC, ReactNode } from 'react';

interface MyContainerProps {
  children: ReactNode;
}

const MyContainer: FC<MyContainerProps> = ({children}) => {
  return (
    <div className='px-4 pt-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
      {children}
    </div>
  )
}

export default MyContainer;
