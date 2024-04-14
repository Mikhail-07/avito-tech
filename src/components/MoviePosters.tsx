import React, { useState, useEffect } from 'react';
import { IPoster } from '../types/types';
import MyHeader from './UI/MyHeader/MyHeader';
import MyCarousel from './UI/MyCarousel/MyCarousel';
import MyGroup from './UI/MyGroup/MyGroup';

interface MoviePostersProps {
  id: number;
}

const MoviePosters: React.FC<MoviePostersProps> = ({ id }) => {
  const [images, setImages] = useState<IPoster[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': process.env.REACT_APP_TOKEN || '' 
        }
      };

      try {
        const response = await fetch(`https://api.kinopoisk.dev/v1.4/image?page=1&limit=10&movieId=${id}`, options);
        const data = await response.json();
        setImages(data.docs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [id]);

  const carouselItems = images.map((item, index) => ({
    id: index.toString(),
    content: (
      <div className="flex items-center justify-center w-full h-full p-2">
        <img
          src={item.url}
          alt={`Image ${index + 1}`}
          className=""
        />
      </div>
    ),
  }));

  return (
    <MyGroup header={<MyHeader>Постеры к фильму</MyHeader>} className='bg-white'>
      <MyCarousel items={carouselItems} />
    </MyGroup>
  );
};

export default MoviePosters;
