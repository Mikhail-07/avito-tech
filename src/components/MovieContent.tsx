import React, { FC } from 'react'
import MovieDescription from './DescriptionContent'
import { IMovie } from '../types/types'
import ContentButtons from './ContentButtons'
import MovieMeta from './MovieMeta'

interface MovieContentProps{
  movie: IMovie
  compact?: boolean
}

const MovieContent: FC<MovieContentProps> = ({movie}) => {

  return (
    <div className='flex justify-between w-full gap-3 p-2'>
      <div className='flex flex-col justify-between gap-2 sm:w-40'>
        <MovieMeta movie={movie}/>
      </div>
      <div className='flex flex-col'>
        {movie.description
        ? <MovieDescription shortDescription={movie.shortDescription} description={movie.description}/>
        : <div>Нет описания</div>
        }
        <ContentButtons/>
      </div>
    </div>
  )
}

export default MovieContent