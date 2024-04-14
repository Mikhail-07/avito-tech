import React, { FC } from 'react';
import { ILinkedMovie, IPoster } from '../types/types';
import { Link } from 'react-router-dom';
import { MOVIE_ROUTE } from '../utils/consts';
import MyCarousel from './UI/MyCarousel/MyCarousel';


interface MoviesCarouselProps {
  items: ILinkedMovie[];
}

const MoviesCarousel: FC<MoviesCarouselProps> = ({ items }) => {
  const carouselItems = items.map((item, idx) => ({
    id: item.id ? item.id : idx,
    content: (
      <Link to={MOVIE_ROUTE + '/' + item.id} className="cursor-pointer">
        <div className='w-full h-full '>
          <img className='object-cover h-full mx-auto' src={item.poster.url} alt="" />
        </div>
      </Link>
    ),
  }));

  if(!carouselItems) return <div>Нет информации</div>
  return <MyCarousel items={carouselItems} />;
};

export default MoviesCarousel;
