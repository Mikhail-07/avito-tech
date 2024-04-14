import { useEffect, useState } from 'react';

interface UseWindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): UseWindowSize => {
  const [windowSize, setWindowSize] = useState<UseWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
