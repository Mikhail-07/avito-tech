import React from 'react'
import AvitoLogo from './AvitoLogo'
import MovieFilter from './MovieFilter'

const SortPanel = () => {
  return (
    <div className="w-full p-4 md:w-64 bg-sky-400">
      <div className='sticky md:min-h-screen top-4'>
        <AvitoLogo />
        <MovieFilter />
      </div>
    </div>
  )
}

export default SortPanel