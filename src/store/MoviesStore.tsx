import {makeAutoObservable} from 'mobx'
import { IMovie } from '../types/types';

export interface IMovieStore {
  movies: IMovie[];
  setMovies(products: IMovie[]): void;
}

export default class MovieStore{

  _movies: IMovie[]
  _numberOfFilms: number

  constructor(){
    this._movies = [] 
    this._numberOfFilms = 0

    makeAutoObservable(this);
  }

  setMovies(data: IMovie[]){
    this._movies = data
  }

  get movies(){
    return this._movies
  }

  get numberOfFilms(){
    return this._numberOfFilms
  }
}