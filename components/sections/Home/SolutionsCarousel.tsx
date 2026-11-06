"use client";

import Slider from "react-slick";
import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SolutionsCarouselProps = {
  children: ReactNode;
};

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  adaptiveHeight: true,
};

export default function SolutionsCarousel({ children }: SolutionsCarouselProps) {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="slick-container relative">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <button
        type="button"
        onClick={() => sliderRef.current?.slickPrev()}
        aria-label="Previous solution"
        className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => sliderRef.current?.slickNext()}
        aria-label="Next solution"
        className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
