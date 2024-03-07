import React, { useState } from 'react';

interface CarouselProps {
  items: { content: React.ReactNode; color: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 absolute inset-0`}
          style={{ backgroundColor: item.color }}
        >
          {item.content}
        </div>
      ))}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;