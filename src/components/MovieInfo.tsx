import React, { FC } from 'react'
import { INames } from '../types/types'

interface MovieInfoProps{
  countries?: INames[];
  genres?: INames[];
}

const MovieInfo: FC<MovieInfoProps> = ({countries, genres}) => {
  
  const infoReducer = (arr: INames[]) => arr.slice(0, 2).map(i => i.name).join(', ')

  const items = [
    countries ? countries : null,
    genres ? genres : null,
  ];

  return (
    <div className='flex flex-col mb-2 text-sm text-gray-400'>
      {items.map((item, idx) => 
        item
        ?
        <div key={idx}>
          <span>{infoReducer(item)}</span>
        </div>
        : ''
       )}
    </div>
  )
}

export default MovieInfo