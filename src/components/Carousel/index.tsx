import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import CustomPagination from "./CustomPagination";

import "swiper/css";
import "./carousel.css";

export interface CarouselItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>(null);

  const handleBulletClick = (index: number) => {
    swiper && swiper.slideTo(index);
  };

  const goToNextSlide = () => {
    swiper && swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiper && swiper.slidePrev();
  };

  return (
    <div id="carousel" className="carousel-container w-full h-full relative">
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 60000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={false}
        resistance={false}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute flex justify-center z-10 left-0 right-0 -bottom-6 sm:-bottom-6">
        <CustomPagination
          totalSlides={items.length}
          activeIndex={activeIndex}
          onBulletClick={handleBulletClick}
          onPrev={goToPrevSlide}
          onNext={goToNextSlide}
        />
      </div>
    </div>
  );
}
