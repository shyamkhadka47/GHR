import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const slides = [
  {
    image: "/gb1.jpg",
    subtitle: "INNOVATION",
    title: "Achieving Excellence via Innovation",
    description:
      "I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories.",
  },
  {
    image: "/gb2.jpg",
    subtitle: "QUALITY",
    title: "Built to Last",
    description:
      "Our products are designed with the highest standards of quality, ensuring durability and performance.",
  },
  {
    image: "/gb3.jpg",
    subtitle: "EXCELLENCE",
    title: "Setting New Standards",
    description:
      "We strive for excellence in every project, creating outstanding results that exceed expectations.",
  },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden w-full h-[80vh] mt-5"> {/* Ensure full width and height */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full" // Ensure swiper takes full width and height
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full"> {/* Ensure full width and height for each slide */}
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill // Ensures the image fills its container
                  priority
                  className="object-cover"
                />
                {/* Optional: Add gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center w-full md:w-[800px]">
                <div className="absolute left-[p-[5%]] md:left-[80px] text-white p-8">
                  <h2 className="mb-4 font-medium tracking-widest uppercase text-primaryColor text-3xl md:text-4xl">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg">{slide.description}</p>
            <button className="bg-primaryColor hover:bg-secondaryColor text-white rounded-md px-8 py-5 mt-5">Read More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
