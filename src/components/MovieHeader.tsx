import React, { FC } from 'react'
import { MOVIE_ROUTE } from '../utils/consts'
import MyHeader from './UI/MyHeader/MyHeader'
import { Link } from 'react-router-dom'
import { IMovie } from '../types/types'

interface MovieHeaderProps{
  movie: IMovie
}

const MovieHeader: FC<MovieHeaderProps> = ({movie}) => {
  return (
    <Link to={MOVIE_ROUTE + '/' + movie.id} className="cursor-pointer">
      <MyHeader subtitle={`${movie?.year}`}>{movie.name}</MyHeader>
    </Link>
  )
}

export default MovieHeader