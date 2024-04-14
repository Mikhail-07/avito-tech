import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MOVIE_ROUTE } from '../utils/consts'

interface MovieCompressedImageProps{
  id: number
}

const MovieCompressedImage: FC<MovieCompressedImageProps> = ({id}) => {
  return (
    <Link to={MOVIE_ROUTE + '/' + id} className="cursor-pointer">
      <div className='flex-shrink-0 h-full max-w-32 min-w-7'>
        <img className='object-cover h-full rounded-l-2xl' src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`} alt="" />
      </div>
    </Link>
  )
}

export default MovieCompressedImage