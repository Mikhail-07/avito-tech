import React from 'react'
import MyButton from './UI/Form/MyButton'
import { SiKinopoisk } from 'react-icons/si'
import { PiShareFatBold } from 'react-icons/pi'

const ContentButtons = () => {
  return (
    <div className='flex flex-col self-end gap-2 sm:flex-row'>
      <MyButton onClick={() => console.log('!')} icon={<SiKinopoisk/>}>
        Кинопоиск
      </MyButton>
      <MyButton onClick={() => console.log('!')} icon={<PiShareFatBold/>}>
        Поделиться
      </MyButton>
    </div>
  )
}

export default ContentButtons