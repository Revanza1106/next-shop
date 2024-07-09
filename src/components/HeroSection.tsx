"use client";
import { useState } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";

const slides = [
  {
    id: 1,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/150a6d22-3af2-4de3-97a4-35522d4056ee/primary-dri-fit-short-sleeve-running-top-JNwbwK.png', // Replace with your image paths
    heading: 'Slide 1 Heading',
    description: 'Description for slide 1',
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    heading: 'Slide 2 Heading',
    description: 'Description for slide 2',
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    heading: 'Slide 3 Heading',
    description: 'Description for slide 3',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-white text-4xl mb-4">{slide.heading}</h2>
            <p className="text-white text-xl">{slide.description}</p>
          </div>
        </div>
      ))}
      <div     className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={prevSlide}>
      <IoChevronBackOutline />
      </div>
      <div  className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={nextSlide}>
      <MdOutlineNavigateNext />
        </div>
    </div>
  );
};

export default HeroSection;
