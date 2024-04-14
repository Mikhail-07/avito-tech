import React, { FC, ReactNode } from 'react'

interface MyGroupProps {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const MyGroup: FC<MyGroupProps> = ({header, children, className="", orientation="horizontal"}) => {
  return (
    <div className={`mb-4 rounded-2xl overflow-hidden p-4 ${className}`}>
      {header ? header : ''}
      <div className={` gap-3 ${orientation === 'vertical' ? 'flex-col' : ''}`} >
        {children}
      </div>
    </div>
  )
}

export default MyGroup