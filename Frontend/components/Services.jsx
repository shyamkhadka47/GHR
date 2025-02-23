import {
  ArrowRight,
  Utensils,
  Car,
  Wifi,
  PocketIcon as Pool,
} from "lucide-react";

const services = [
  {
    title: "Fine Dining",
    description:
      "Experience exquisite dining at our restaurant with a blend of local and international cuisine prepared by expert chefs.",
    icon: Utensils,
  },
  {
    title: "Free Parking",
    description:
      "Complimentary secure parking facility available 24/7 for all our guests with valet service option.",
    icon: Car,
  },
  {
    title: "High Speed WiFi",
    description:
      "Stay connected with our high-speed internet access available throughout the hotel premises.",
    icon: Wifi,
  },
  {
    title: "Swimming Pool",
    description:
      "Relax and unwind in our temperature-controlled swimming pool with a stunning mountain view.",
    icon: Pool,
  },
];

export function Services() {
  return (
    <section className="px-[5%] md:px-[100px] py-16 lg:py-24">
      <div className=" px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 bg-secondaryColor" />
            <span className="text-secondaryColor text-xl font-medium tracking-wider">
              OUR AMENITIES
            </span>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold">
            Comfort & Convenience
          </h2>
        </div>
        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative  shadow-md bg-white p-8 rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Content */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-medium group-hover:text-primaryColor transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Icon */}
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-12 h-12 bg-[#82B440]/20 rounded-full" />
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primaryColor" />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primaryColor transition-colors rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
