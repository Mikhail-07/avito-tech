import React, { FC } from 'react'
import { IMovie } from '../types/types'
import MovieContent from './MovieContent'
import MovieCompressedImage from './MovieCompressedImage'


interface MovieItemProps{
  movie: IMovie
}

export const MovieItem: FC<MovieItemProps> = ({movie}) => {
  return (
    <div className='flex mb-4 bg-white rounded-2xl'>
      <MovieCompressedImage id={movie.id}/>
      <MovieContent movie={movie}/>
    </div>
  )
}
