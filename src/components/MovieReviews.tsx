import React, { FC, useState, useEffect } from 'react';
import MyGroup from './UI/MyGroup/MyGroup';
import MyHeader from './UI/MyHeader/MyHeader';
import ReviewItem from './ReviewItem';
import MyPagination from './UI/MyPagination/MyPagination';
import { IReview } from '../types/types';

interface MovieReviewsProps {
  id: number;
}

const MovieReviews: FC<MovieReviewsProps> = ({ id }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    loadReviews();
  }, [currentPage, id]);

  const loadReviews = async () => {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/review?page=${currentPage}&limit=5&movieId=${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': process.env.REACT_APP_TOKEN || '' 
      }
    });
    const data = await response.json();
    setReviews(data.docs);
    setTotalPages(data.pages);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!reviews.length) return <MyGroup header={<MyHeader>Рецензии пользователей</MyHeader>} className='bg-white'>Нет рецензий</MyGroup>

  return (
    <div>
      <MyGroup 
        header={
          <div className='flex flex-wrap justify-between'> 
            <MyHeader>Рецензии пользователей</MyHeader>
            <MyPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>} 
        className='bg-white'>
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </MyGroup>
      
    </div>
  );
};

export default MovieReviews;
