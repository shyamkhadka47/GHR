"use client";

import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
// import slider1 from "@/gb1.webp";
// import slider2 from "@/gb2.webp";
// import slider3 from "@/assets/slider-3.jpg";

// Custom Tailwind-styled Button component
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-plight hover:bg-primary text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 text-base font-medium inline-flex items-center ${className}`}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/gb1.webp",
      title: "Escape to Paradise",
      subtitle: "Luxury Resort",
      description:
        "Experience the ultimate luxury getaway at our pristine tropical resort. Indulge in world-class amenities, breathtaking ocean views, and unforgettable memories.",
    },
    {
      image: "/gb2.webp",
      title: "Infinity Pool Bliss",
      subtitle: "Sunset Views",
      description:
        "Relax by our stunning infinity pool while watching breathtaking sunsets over the ocean. The perfect setting for an unforgettable evening.",
    },
    // {
    //   image: slider3,
    //   title: "Spa & Wellness",
    //   subtitle: "Rejuvenate",
    //   description:
    //     "Discover inner peace and rejuvenation at our world-class spa pavilion surrounded by tropical gardens and ocean views.",
    // },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen mt-[100px] flex items-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0} // preload the first image for performance
              sizes="(max-width:768px) 384px , 100vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 md:via-primary/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden  absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary backdrop-blur-sm rounded-full md:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden  absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-primary backdrop-blur-sm rounded-full md:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-plight/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-[5%] md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-plight font-medium mb-4 tracking-wider uppercase">
              Paradise awaits
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
              <br />
              <span className="text-plight">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button>
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Optional right side content */}
          </div>
        </div>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
