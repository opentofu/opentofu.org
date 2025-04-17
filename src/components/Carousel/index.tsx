import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import { useColorMode } from "@docusaurus/theme-common";

export interface CarouselItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`relative w-full h-[calc(100vh-12rem)] flex ${
        colorMode === "dark" ? "dark" : ""
      }`}
    >
      <div className="flex-1">
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          direction="vertical"
          allowTouchMove={false}
          pagination={{
            clickable: true,
            type: "bullets",
            el: ".swiper-pagination",
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          className="h-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col h-full items-center justify-center">
                <div className="w-full max-w-2xl">{item.content}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagination" />
    </div>
  );
}
