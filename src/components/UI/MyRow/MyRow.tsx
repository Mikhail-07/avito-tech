import React, { FC, useMemo, useState } from 'react'
import MyButton from '../Form/MyButton';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface MyRowProps{
  content?: string
}

const MyRow: FC<MyRowProps> = ({content}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const wordsLimit = 10
  const words = content ? content.split(',') : [];

  const truncatedContent = useMemo(() => {
    if (words.length > wordsLimit) {
      return words.slice(0, wordsLimit).join(', ') + '…';
    }
    return words;
  }, [content]);

  if (!content) return <div>Нет информации</div>;

  return (
    <div>
      <span>{isExpanded ? content : truncatedContent}</span>
      {words.length > wordsLimit &&
        <MyButton
          icon={<MdKeyboardArrowRight />}
          rotate={isExpanded}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      }
    </div>
  )
}

export default MyRow
  