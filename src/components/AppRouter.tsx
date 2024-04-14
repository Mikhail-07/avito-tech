import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import MoviePage from '../pages/MoviePage'
import { MAIN_ROUTE, MOVIE_ROUTE } from '../utils/consts'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainPage />} />
      <Route path={MOVIE_ROUTE + '/:id'} element={<MoviePage />} />
    </Routes>
  )
}
