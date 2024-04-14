import React, { FC, useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useWindowSize from '../../../hooks/useWindowSize';
import MyButton from '../Form/MyButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

const MyCarousel: FC<CarouselProps> = ({ items }) => {
  const { width: screenWidth } = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState<number>(1);

  useEffect(() => {
    const updateCarouselSlide = () => {
      let newVisibleSlides = 1;

      if (screenWidth < 640 || items.length === 1) {
        newVisibleSlides = 1;
      } else if (screenWidth >= 640 && screenWidth < 1024 && items.length < 2) {
        newVisibleSlides = 1;
      } else if (screenWidth >= 1024 && items.length < 3) {
        newVisibleSlides = 1;
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        newVisibleSlides = 2;
      } else if (screenWidth >= 1024) {
        newVisibleSlides = 3;
      }

      setVisibleSlides(newVisibleSlides);
    };

    updateCarouselSlide();
  }, [screenWidth, items.length]);

  return (
    <div className="relative px-10 max-h-96">
      <CarouselProvider
        infinite={true}
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={items.length}
        visibleSlides={visibleSlides}
        dragEnabled={true}
      >
        <Slider>
          {items.map((item, index) => (
            <Slide className='my-auto' index={index} key={item.id}>
              {item.content}
            </Slide>
          ))}
        </Slider>
        {screenWidth >= 640 && items.length > 1 && (
          <>
            <div className="absolute left-0 transform -translate-y-1/2 top-1/2">
              <ButtonBack>
                <MyButton icon={<MdKeyboardArrowLeft />} />
              </ButtonBack>
            </div>
            <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
              <ButtonNext>
                <MyButton icon={<MdKeyboardArrowRight />} />
              </ButtonNext>
            </div>
          </>
        )}
      </CarouselProvider>
    </div>
  );
};

export default MyCarousel;
