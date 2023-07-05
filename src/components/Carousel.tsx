"use client";

import { useState } from "react";

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <button
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white text-black border border-primary p-[10px]"
        onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white text-black border border-primary p-[10px]"
        onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <img
        className="w-full h-[550px] object-cover"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  );
};

export default Carousel;
