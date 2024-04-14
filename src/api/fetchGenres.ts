import axios from 'axios';
import { INames } from '../types/types';

const fetchGenres = async (): Promise<INames[]> => {
  try {
    const response = await axios.get('https://api.kinopoisk.dev/v1/movie/possible-values-by-field', {
      params: {
        field: 'genres.name',
      },
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': process.env.REACT_APP_TOKEN || '',
      },
    });

    return response.data as INames[];
  } catch (error) {
    console.error('Ошибка при загрузке жанров:', error);
    return [];
  }
};

export default fetchGenres;
