import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    image: "/gb1.jpg",
    quote:
      "It uses a dictionary of over 200 Latin words, combined with handful model tense structures, to generate Lorem Ipsum which to reasonable. The gener Lorem Ipsum done",
    name: "Guy Hawkins",
    role: "Founder",
  },
  {
    image: "/gb2.jpg",
    quote:
      "It uses a dictionary of over 200 Latin words, combined with handful model tense structures, to generate Lorem Ipsum which to reasonable. The gener Lorem Ipsum done",
    name: "Leslie Alexander",
    role: "Founder",
  },
  {
    image: "/gb3.jpg",
    quote:
      "It uses a dictionary of over 200 Latin words, combined with handful model tense structures, to generate Lorem Ipsum which to reasonable. The gener Lorem Ipsum done",
    name: "Albert Flores",
    role: "Founder",
  },
  {
    image: "/gb4.jpg",
    quote:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    name: "Jane Cooper",
    role: "CEO",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden w-full">
      <div className="container mx-auto px-[5%] md:px-[100px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center text-[#82B440] font-medium mb-4">
              <span className="mr-2">
                <svg viewBox="0 0 6 6" className="w-1.5 h-1.5 fill-current">
                  <rect width="6" height="6" />
                </svg>
              </span>
              <span className="text-sm tracking-wider">CLIENTS TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              What Our Customers Say About
              <br />
              Our Services
            </h2>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
             direction="horizontal"
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white min-h-[400px] flex flex-col justify-between text-center border rounded-lg">
                  {/* Image and Quote Icon */}
                  <div className="relative inline-block mb-6 px-8 pt-8">
                    {/* Make sure the image is a perfect circle */}
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={96} // Set fixed width
                        height={96} // Set fixed height (same as width for perfect circle)
                        className="object-cover w-[100%] h-[100%]" // Maintains aspect ratio and prevents distortion
                      />
                    </div>
                    <div className=" absolute -bottom-2 right-40 w-8 h-8 bg-[#82B440] rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base px-8 pt-8">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="bg-primaryColor py-4">
                    <div className="text-white text-sm font-medium mb-1">
                      {testimonial.role}
                    </div>
                    <div className="font-bold text-sm text-white md:text-base">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity disabled:opacity-0">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity disabled:opacity-0">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Global Styles to Fix Scrolling */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
        .swiper {
          overflow: hidden !important;
        }
        .swiper-wrapper {
          display: flex;
          will-change: transform;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .swiper-button-disabled {
          opacity: 0 !important;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}
