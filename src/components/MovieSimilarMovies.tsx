import React, { FC } from 'react'
import MyHeader from './UI/MyHeader/MyHeader'
import { ILinkedMovie } from '../types/types'
import MoviesCarousel from './MoviesCarousel'
import MyGroup from './UI/MyGroup/MyGroup'

interface MovieSimilarMoviesProps{
  items?: ILinkedMovie[]
}

const MovieSimilarMovies: FC<MovieSimilarMoviesProps> = ({items}) => {
  return (
    <MyGroup header={<MyHeader>Похожие фильмы</MyHeader>} className='bg-white'>
      {items
      ? <MoviesCarousel items={items}/>
      : <div>Нет инфомрации</div>
      }
    </MyGroup>
  )
}

export default MovieSimilarMovies