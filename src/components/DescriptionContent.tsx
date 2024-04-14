import React, { FC } from 'react';
import MyButton from './UI/Form/MyButton';
import { MdKeyboardArrowRight } from "react-icons/md";
import useTruncateText from '../hooks/useTrancateText';

interface DescriptionContentProps {
  shortDescription?: string | null;
  description: string;
}

const DescriptionContent: FC<DescriptionContentProps> = ({ shortDescription, description }) => {
  const { truncatedText, isExpanded, toggleExpanded } = useTruncateText(description);

  return (
    <>
      {shortDescription && <div className='flex-1 hidden sm:block xl:hidden'><span>{shortDescription}</span></div>}
      <div className={`flex-1 ${shortDescription ? 'hidden xl:block' : ''}`}>
        <span>{isExpanded ? description : truncatedText}</span>
        {truncatedText !== description && (
          <MyButton
            icon={<MdKeyboardArrowRight />}
            rotate={isExpanded}
            onClick={toggleExpanded}
          />
        )}
      </div>
    </>
  );
};

export default DescriptionContent;
