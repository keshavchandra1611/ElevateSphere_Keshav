// src/components/CarouselComponent.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselImages = [
  {
    src: "https://img.freepik.com/premium-vector/programming-code-made-with-binary-code-coding-hacker-background-digital-binary-data-streaming-digital-code_127544-778.jpg",
    alt: "Slide 1",
    caption: "Welcome to the Open Innovation Blog",
    className: "w-full h-[90%]",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/005/734/824/non_2x/programming-code-icon-3d-low-polygonal-abstract-programming-code-symbol-in-hand-coding-or-hacker-background-development-and-software-concept-illustration-vector.jpg",
    alt: "Slide 2",
    caption: "Discover New Ways to Innovate",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/005/734/824/non_2x/programming-code-icon-3d-low-polygonal-abstract-programming-code-symbol-in-hand-coding-or-hacker-background-development-and-software-concept-illustration-vector.jpg",
    alt: "Slide 3",
    caption: "Collaborate to Solve Industry Challenges",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      transitionTime={600}
      className="rounded-lg  bg-gray-600 overflow-hidden"
    >
      {carouselImages.map((image, index) => (
        <div key={index} className="relative">
          <img src={image.src} alt={image.alt} />
          <p className="absolute bottom-0 bg-opacity-50 bg-black text-white p-4 w-full text-center">
            {image.caption}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
