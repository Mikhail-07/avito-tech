import React from 'react'
import MovieList from '../components/MovieList'
import SortPanel from '../components/SortPanel'

import { observer } from 'mobx-react-lite'

const MainPage = () => {

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <SortPanel/>
      <MovieList/>
    </div>
  )
}

export default observer(MainPage)

