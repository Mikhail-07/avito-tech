import axios from 'axios';

interface MovieSearchParams {
  query: string;
  page?: string | number;
  limit?: string | number;
}

const movieSearchApi = async ({ query, page = '1', limit = '10' }: MovieSearchParams) => {
  try {
    const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie/search', {
      params: {
        query,
        page,
        limit,
      },
      headers: {
        'accept': 'application/json',
        'X-API-KEY': process.env.REACT_APP_TOKEN || '',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при загрузке');
  }
};

export default movieSearchApi;
