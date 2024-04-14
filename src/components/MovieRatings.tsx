import React, { FC } from 'react'
import { IRating } from '../types/types'

interface MovieRatingsProps{
  rating?: IRating
}

interface RateVersion {
  key: keyof IRating;
  title: string;
}

const MovieRatings: FC<MovieRatingsProps> = ({rating}) => {

  const rateVersions: RateVersion[] = [
    { key: 'kp', title: 'КП' },
    { key: 'imdb', title: 'IMDb' },
    { key: 'filmCritics', title: 'Критики' }
  ]

  const getColor = (value: number) => {
    if (!value) return
    return value < 7 ? 'text-yellow-500' : 'text-green-400';
  };

  if (!rating) return <div>Нет инфомрации</div>

  return (
    <div className='flex justify-between gap-2'>
      {rateVersions.map(({key, title}) => 
        <div key={key} className='flex flex-col items-center'>
          <span className='text-sm'>{title}</span>
          {rating[key] 
            ?<span key={rating[key]} className={`${getColor(rating[key]!)} font-semibold`}>
              {rating[key]!.toFixed(1)}
            </span>
           :<span>-</span>
          }
        </div>
      )}
    </div>
  )
}

export default MovieRatings