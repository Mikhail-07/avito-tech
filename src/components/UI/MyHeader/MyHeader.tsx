import React, { FC, ReactNode } from 'react'

interface MyHeaderProps{
  children: ReactNode;
  subtitle?: string
  className?: string
}

const MyHeader: FC<MyHeaderProps> = ({children, className='', subtitle}) => {
  return (
    <div className={className}>
      <h1 className='font-semibold text-l'>{children}</h1>
      {subtitle && <h4 className='text-sm text-gray-400'>{subtitle}</h4>}
    </div>
  )
}

export default MyHeader