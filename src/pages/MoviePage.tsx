import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie, ISeason } from '../types/types';
import MyContainer from '../components/UI/Container/MyContainer';
import MyHeader from '../components/UI/MyHeader/MyHeader';
import MovieBackdrop from '../components/MovieBackdrop';
import MyRow from '../components/UI/MyRow/MyRow';
import MyTabs from '../components/UI/MyTabs/MyTabs';
import MovieReviews from '../components/MovieReviews';
import MoviePosters from '../components/MoviePosters';
import MovieMeta from '../components/MovieMeta';
import MovieSimilarMovies from '../components/MovieSimilarMovies';
import MyGroup from '../components/UI/MyGroup/MyGroup';
import MovieDescription from '../components/MovieDescription';

const MoviePage: FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [seasons, setSeasons] = useState<ISeason[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': process.env.REACT_APP_TOKEN || '' },
    };

    fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        if (response.isSeries) {
          fetch(`https://api.kinopoisk.dev/v1.4/season?movieId=${id}`, options)
            .then((seasonResponse) => seasonResponse.json())
            .then((seasonResponse) => setSeasons(seasonResponse.docs))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (movie) {
    return (
      <>
        <div className="flex flex-col min-h-screen md:flex-row">
          <div className="w-full p-4 md:w-64 bg-sky-400">
            <MyGroup className='sticky bg-white top-4'>
              <div className='flex-shrink-0 w-full h-full'>
                <img className='object-cover h-full mx-auto' src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`} alt="" />
              </div>
              <MovieMeta movie={movie} />
            </MyGroup>
            
          </div>
          <div className="flex-1 bg-slate-200">
            <MyContainer>
              <MovieBackdrop movie={movie} />
              <div>
                <MovieDescription description={movie.description}/>
                <MyGroup header={<MyHeader>В ролях</MyHeader>} className='bg-white'>
                  <MyRow content={movie.persons?.map(actor => actor.name).join(', ')} />
                </MyGroup>
                
                {movie.isSeries && seasons && (
                  <MyGroup header={<MyHeader>Сезоны</MyHeader>} className='bg-white'>
                    <MyTabs seasons={seasons} />
                  </MyGroup>
                )}
                <MovieReviews id={movie.id} />
                <MoviePosters id={movie.id} />
                <MovieSimilarMovies items={[...(movie.sequelsAndPrequels || []), ...(movie.similarMovies || [])]} />
              </div>
            </MyContainer>
          </div>
        </div>
      </>
    );
  }

  return <div>Ошибка</div>;
};

export default MoviePage;
