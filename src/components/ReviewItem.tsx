import React, { FC } from 'react';
import MyHeader from './UI/MyHeader/MyHeader';
import useTruncateText from '../hooks/useTrancateText';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IReview } from '../types/types';
import MyButton from './UI/Form/MyButton';

interface ReviewItemProps {
  review: IReview;
}

const ReviewItem: FC<ReviewItemProps> = ({ review }) => {
  const { truncatedText, isExpanded, toggleExpanded } = useTruncateText(review.review); 

  return (
    <div>
      <MyHeader>{review.author}</MyHeader>
      <div className="text-gray-500">{review.title}</div>
      <div className="mt-2">
        {isExpanded ? review.review : truncatedText} 
        {truncatedText !== review.review && ( 
          <MyButton icon={<MdKeyboardArrowRight />} rotate={isExpanded} onClick={toggleExpanded} />
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
