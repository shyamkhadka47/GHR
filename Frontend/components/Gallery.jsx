import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const galleryItems = [
  {
    image: "/gb1.jpg",
    title: "Roof Installation",
    description: "Professional roof installation with high-quality materials",
  },
  {
    image: "/gb2.jpg",
    title: "Maintenance Work",
    description: "Regular maintenance and repair services",
  },
  {
    image: "/gb3.jpg",
    title: "Emergency Repairs",
    description: "24/7 emergency roof repair services",
  },
  {
    image: "/gb4.jpg",
    title: "Quality Inspection",
    description: "Thorough roof inspection and assessment",
  },
  {
    image: "/gb5.jpg",
    title: "Modern Solutions",
    description: "Contemporary roofing solutions for modern homes",
  },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 overflow-hidden w-full">
      <div className="container mx-auto px-[5%] md:px-[100px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="relative inline-flex items-center text-primaryColor font-medium mb-4">
              <span className="mr-2">
                <svg viewBox="0 0 6 6" className="w-1.5 h-1.5 fill-current">
                  <rect width="6" height="6" />
                </svg>
              </span>
              <span className="text-3xl md:text-[4vw] lg:text-[2vw] tracking-wider sm:before:content-[''] sm:before:absolute sm:before:w-full sm:before:h-1 sm:before:z-[2] sm:before:bg-primaryColor sm:before:bottom-[-5px]  ">LATEST GALLERY</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Your Satisfaction Is Our Top Priority
              <br />
              When It Comes To Roofing
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center bg-primaryColor text-white px-6 py-3 mt-6 lg:mt-0 rounded hover:bg-secondaryColor transition-colors"
          >
            View Gallery
            <ChevronRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Gallery Slider */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
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
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative rounded-lg overflow-hidden cursor-pointer w-full h-[250px] md:h-[350px] lg:h-[400px] flex"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image */}
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay - Slides Down from Top */}
                  <div
                    className={`absolute inset-0 bg-black/60 transition-transform duration-500 ${
                      hoveredIndex === index
                        ? "translate-y-0"
                        : "-translate-y-full"
                    }`}
                  />

                  {/* Content - Slides Up from Bottom */}
                  <div
                    className={`absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-500 delay-100 ${
                      hoveredIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[100%] opacity-0"
                    }`}
                  >
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
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
