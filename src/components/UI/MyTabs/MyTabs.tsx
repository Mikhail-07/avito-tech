import React, { FC, useState } from 'react';
import MyButton from '../Form/MyButton';
import { ISeason } from '../../../types/types';

interface MyTabsProps {
  seasons: ISeason[]
}

const MyTabs: FC<MyTabsProps> = ({ seasons }) => {
  const [activeSeasonIndex, setActiveSeasonIndex] = useState<number>(0);

  const handleSeasonChange = (seasonIndex: number) => {
    setActiveSeasonIndex(seasonIndex);
  };

  const renderEpisodes = () => {
    const season = seasons[activeSeasonIndex];
    return season.episodes.map((episode) => (
      <div key={episode.number}>{episode.name}</div>
    ));
  };

  return (
    <div>
      <div className='flex gap-2 overflow-auto'>
        {seasons.map((season, idx) => (
          <MyButton
            key={idx}
            onClick={() => handleSeasonChange(idx)}
            active={idx === activeSeasonIndex}
          >
            {`Сезон ${idx + 1}`}
          </MyButton>
        ))}
      </div>
      <div>{renderEpisodes()}</div>
    </div>
  );
};

export default MyTabs;
