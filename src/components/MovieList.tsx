import React, { FC, useContext, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import MyContainer from './UI/Container/MyContainer';
import MyInput from './UI/Form/MyInput';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { MovieItem } from './MovieItem';
import movieSearchApi from '../api/movieSearchApi';
import MyPagination from './UI/MyPagination/MyPagination';
import MyButton from './UI/Form/MyButton';
import { PiShareFatBold } from 'react-icons/pi';
import MySelect from './UI/Form/MySelect';
import { IMovie } from '../types/types';

const MovieList: FC = () => {
  const store = useContext(Context).store;
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState('10');

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleMoviesPerPageChange = (value: string) => {
    setMoviesPerPage(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchMovies = async () => {
        try {
          const response = await movieSearchApi({ query: searchQuery, page: currentPage, limit: moviesPerPage });
          store.setMovies(response.docs);
          setTotalPages(response.pages);
        } catch (error) {
          console.error('Failed to fetch movie search results:', error);
        }
      };
  
      fetchMovies();
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [searchQuery, currentPage, store, moviesPerPage]);

  return (
    <div className="flex-1 bg-slate-200">
      <MyContainer>
        <div className="flex items-center mb-4">
          <MyInput
            before={<CiSearch className="w-6 h-6 text-sky-400" />}
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className='flex items-center justify-between mb-4'>
          <MyButton onClick={() => console.log('!')} icon={<PiShareFatBold/>}>
            Поделиться поиском
          </MyButton>
          <div className='flex items-center gap-2'>
            <MyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            <MySelect
              id="moviesPerPage"
              value={moviesPerPage}
              setValue={handleMoviesPerPageChange}
              options={[
                { name: '5' },
                { name: '10' },
                { name: '20' },
              ]}
            />
          </div>
          
        </div>
        {store.movies.map((movie: IMovie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </MyContainer>
    </div>
  );
};

export default observer(MovieList);