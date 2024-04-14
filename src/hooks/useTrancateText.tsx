import { useState, useMemo } from 'react';

const useTruncateText = (text: string, limit = 70): { truncatedText: string; isExpanded: boolean; toggleExpanded: () => void; } => {
  const words = text.split(' ');
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText = useMemo(() => {
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '…';
    }
    return text;
  }, [text]);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  return { truncatedText, isExpanded, toggleExpanded };
};

export default useTruncateText;
