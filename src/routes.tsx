import path from 'path';
import MainPage from './pages/MainPage';
import MoviePage from './pages/MoviePage';

export const authRoutes = [
  {
    
  }
];

export const publicRoutes = [
  {
    path: '/',
    Component: MainPage
  },
  {
    path: '/:id',
    Component: MoviePage
  }
]