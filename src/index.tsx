import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieStore, { IMovieStore } from './store/MoviesStore';

interface IContext{
  store: IMovieStore
}

const movieStore = new MovieStore();
export const Context = createContext<IContext>({store: movieStore})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{store: movieStore}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
  
);