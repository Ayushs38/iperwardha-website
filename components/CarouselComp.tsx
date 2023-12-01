import Marquee from "react-fast-marquee";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Image from "next/image";

const images = [
  {
    src:
      'https://www.iperwardha.com/images/slider_33.JPG',
    alt: 'image 1',
  },
  {
    src:
      'https://www.iperwardha.com/images/iperwardhaslider1.jpg',
    alt: 'image 2',
  },
  {
    src:
      'https://www.iperwardha.com/images/iperwardhaslider3.JPG',
    alt: 'image 3',
  },
  {
    src:
      'https://www.iperwardha.com/images/slider_44.jpg',
    alt: 'image 4',
  },
  {
    src:
      'https://www.iperwardha.com/images/slider_11.JPG',
    alt: 'image 5',
  },
  {
    src:
      'https://www.iperwardha.com/images/slider_22.JPG',
    alt: 'image 6',
  },
];

const CarouselComp: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden z-[-10]">
        <Carousel selectedItem={activeIndex} showStatus={false} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="object-cover h-screen w-auto max-w-full" />
              {/* <Image
                src={image.src}
                layout="fill"
                objectFit="cover"
                alt={image.alt}
              /> */}
            </div>
          ))}
        </Carousel>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
          <FaArrowLeft
            className="text-white text-2xl cursor-pointer"
            onClick={handlePrev}
          />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
          <FaArrowRight
            className="text-white text-2xl cursor-pointer"
            onClick={handleNext}
          />
        </button>
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
      <Marquee className=" bg-neutral-800 text-white mt-0">
        Welcome to Institute of Pharmaceutical Education and Research
      </Marquee>
    </>
  );
};

export default CarouselComp;
