import React, { FC } from 'react'
import MyGroup from './UI/MyGroup/MyGroup'
import MyHeader from './UI/MyHeader/MyHeader'
import DescriptionContent from './DescriptionContent'

interface MovieDescriptionProps{
  description?: string | null
}

const MovieDescription: FC<MovieDescriptionProps> = ({description}) => {
  return (
    <MyGroup header={<MyHeader>Описание</MyHeader>} className='bg-white'>
      {description
      ? <DescriptionContent description={description} />
      : <div>Нет информации</div>
    }
    </MyGroup>
  )
}

export default MovieDescription