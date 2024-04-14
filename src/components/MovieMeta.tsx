import React, { FC } from 'react'
import MovieHeader from './MovieHeader'
import MovieInfo from './MovieInfo'
import MovieRatings from './MovieRatings'
import { IMovie } from '../types/types'

interface MovieMetaProps{
  movie: IMovie
}

const MovieMeta: FC<MovieMetaProps> = ({movie}) => {
  return (
    <>
      <MovieHeader movie={movie}/>
      <div>
        <MovieInfo countries={movie.countries} genres={movie.genres}/>
        <MovieRatings rating={movie.rating}/>
      </div>
    </>
  )
}

export default MovieMeta