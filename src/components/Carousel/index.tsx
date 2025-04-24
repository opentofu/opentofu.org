import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";

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

  const className = clsx([
    "w-full h-full",
    colorMode === "dark" ? "dark" : "light",
  ]);

  return (
    <div className={className}>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        direction="horizontal"
        allowTouchMove={true}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination",
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{item.content}</SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination w-full py-4" />
    </div>
  );
}
