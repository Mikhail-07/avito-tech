import React, { useEffect, useState } from 'react';
import MyGroup from './UI/MyGroup/MyGroup';
import MySelect from './UI/Form/MySelect';
import MyHeader from './UI/MyHeader/MyHeader';
import fetchGenres from '../api/fetchGenres';
import { INames, IMovie } from '../types/types';

const MovieFilter = () => {
  const [genres, setGenres] = useState<INames[]>([]);
  const [selectedAgeRating, setSelectedAgeRating] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data));
  }, []);


  const handleAgeRatingChange = (value: string) => {
    setSelectedAgeRating(value);
  };

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value);
  };

  const ages = [{ name: '0' }, { name: '12' }, { name: '16' }, { name: '18' }];

  return (
    <MyGroup header={<MyHeader>Фильтры</MyHeader>} className="text-white md:min-h-screen">
      <MySelect top="Возрастной ценз" id="ageRating" value={selectedAgeRating} setValue={handleAgeRatingChange} options={ages} />
      <MySelect top="Жанры" id="genre" value={selectedGenre} setValue={handleGenreChange} options={genres} />
    </MyGroup>
  );
};

export default MovieFilter;
