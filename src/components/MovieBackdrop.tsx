  import React, { FC } from 'react'
  import { IMovie } from '../types/types'

  interface MovieBackdropProps{
    movie: IMovie
  }

  const MovieBackdrop: FC<MovieBackdropProps> = ({movie}) => {

    if (!movie.backdrop?.url || !movie.logo) return null
    
    return (
      <div className='relative mb-4' >
        <div className='overflow-hidden rounded-2xl'>
          <img src={movie.backdrop.url} alt="" />
        </div>
        <div className='absolute inset-0 left-0 flex flex-col items-start justify-center w-1/3 p-4'>
          <div>
            <img src={movie.logo.url ? movie.logo.url : `https://st.kp.yandex.net/images/film_iphone/iphone360_${movie.id}.jpg`} alt={movie.name ? movie.name : 'Movie logo'} />
          </div>
        </div>
      </div>
    )
  }

  export default MovieBackdrop