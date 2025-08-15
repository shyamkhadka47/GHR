"use client";
import { ArrowRight, X } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryPageComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const galleryItems = [
    { src: "/gb1.webp", alt: "Beachfront Villas" },
    { src: "/gb2.webp", alt: "Spa Pavilion" },
    { src: "/gb3.webp", alt: "Ocean View Restaurant" },
    { src: "/gb4.webp", alt: "Private Marina" },
    { src: "/gb1.webp", alt: "Wedding Pavilion" },
    { src: "/gb2.webp", alt: "Pool Bar & Lounge" },
    { src: "/gb3.webp", alt: "Resort Overview" },
    { src: "/gb4.webp", alt: "Sunset Paradise" },
    { src: "/gb1.webp", alt: "Tropical Gardens" },
  ];

  return (
    <div>
      {/* Gallery Section */}
      <section className="px-[5%] md:px-[10%] py-16">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground pb-14 text-center">
            Discover our beautiful
            <span className="text-primary"> resort Gallery</span>
          </h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-lg overflow-hidden mb-6"
              onClick={() => {
                setIsOpen(true);
                setCurrentIndex(index); // set current index when clicked
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition flex items-center mx-auto">
            Load More Images
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-plight/70">
        <div className="px-[5%] md:px-[10%] text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of guests who have discovered the magic of Paradise
            Resort. Your unforgettable tropical escape awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Book Your Stay
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <a
              href="#"
              className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Take a Virtual Tour
            </a>
          </div>
        </div>
      </section>

      {/* Modal with Swiper */}
      {isOpen && (
        <>
          {/* Modal overlay */}
          <div className="fixed inset-0 bg-black opacity-90 z-[999]" />

          {/* Close button */}
          <div
            className="fixed top-10 right-10 z-[90000] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={80} color="white" />
          </div>

          {/* Swiper Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-[10000]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              initialSlide={currentIndex} // start Swiper from the clicked image
              loop
              className="swiper-container w-full h-[80vh]" // Full screen modal
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex justify-center items-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1000} // Adjust the width as per your needs
                      height={1000} // Adjust the height as per your needs
                      className="w-full h-full object-contain" // Ensure the image maintains aspect ratio
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryPageComp;
