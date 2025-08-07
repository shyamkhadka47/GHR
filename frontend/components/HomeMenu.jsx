import { ArrowRight, Waves, Utensils, Users, Bed, Dumbbell, Calendar, Headphones, Sparkles } from "lucide-react";
import Image from "next/image";


const HomeMenu = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      image: "/gb1.webp",
      title: "Luxury Spa & Wellness",
      description: "Rejuvenate your mind and body with our world-class spa treatments and wellness programs in a serene tropical setting.",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      image: "/gb2.webp",
      title: "Fine Dining Experience",
      description: "Savor exquisite cuisine crafted by renowned chefs using the finest local and international ingredients.",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      image: "/gb1.webp",
      title: "Infinity Pool & Beach",
      description: "Relax by our stunning infinity pool or enjoy pristine white sand beaches with crystal-clear waters.",
    },
    {
      icon: <Bed className="w-8 h-8" />,
      image: "/gb2.webp",
      title: "Luxury Suites & Villas",
      description: "Stay in elegantly appointed suites and villas featuring ocean views, private terraces, and premium amenities.",
    },
    {
      icon: <Waves className="w-8 h-8" />,
      image: "/gb1.webp",
      title: "Water Sports & Activities",
      description: "Enjoy thrilling water sports including snorkeling, kayaking, sailing, and deep-sea fishing adventures.",
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      image: "/gb2.webp",
      title: "Fitness & Recreation",
      description: "Stay active with our state-of-the-art fitness center, tennis courts, and various recreational activities.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      image: "/gb1.webp",
      title: "Events & Celebrations",
      description: "Host unforgettable weddings, conferences, and special events in our elegant venues with professional planning.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      image: "/gb2.webp",
      title: "Concierge Services",
      description: "Our dedicated concierge team is available 24/7 to arrange excursions, reservations, and personalized experiences.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="px-[5%] md:px-[10%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">N</span>
            </div>
            <span className="text-primary font-medium tracking-wider uppercase">Resort Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Luxury Resort <span className="text-primary"> Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of world-class amenities and services designed 
            to create unforgettable memories during your stay.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={318}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                {/* <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div> */}
                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                <button className="text-primary hover:text-primary-dark text-sm inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  Read More
                  <ArrowRight className="ml-2 w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">N</span>
              </div>
              <span className="text-white/90 font-medium tracking-wider uppercase">Book Your Stay</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Experience Paradise?
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-white mb-8">
              +1 (555) 123-RESORT
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-3 text-base rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 inline-flex items-center">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
