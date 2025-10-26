'use client';
import { useEffect, useState } from "react";
import '../../styles/style.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/school1.jpg",
    "/images/school3.jpg",
    "/images/school2.jpg",
    "/images/school4.jpg",
    "/images/school6.jpg"
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container order-1 sm:order-2 md:rounded-md">
      <div className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[60vh]">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute w-full h-full object-cover"
          />
        </div>

        <div className="absolute z-30 hidden sm:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"}`}
              aria-current={currentSlide === index ? "true" : "false"}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            ◀
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            ▶
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;