import Image from "next/image";
import {
  ArrowRight,
  Check,
  Instagram,
  Linkedin,
  Star,
  Twitter,
} from "lucide-react";

export default function Page() {
  const images = ["/gb1.webp", "/gb2.webp"];

  const services = [
    {
      title: "Fine Dining Restaurant",
      description:
        "Experience authentic Nepali flavors blended with international cuisine, prepared by our expert chefs using farm-fresh organic produce.",
      features: [
        "Traditional Nepali Thali",
        "Continental specialties",
        "Organic farm-to-table ingredients",
        "Rooftop sunset dining",
      ],
      price: "Starting from NPR 6,500/person",
    },
    {
      title: "Luxury Spa & Wellness",
      description:
        "Rejuvenate your senses with traditional Himalayan therapies and modern spa treatments, surrounded by serene hilltop views.",
      features: [
        "Ayurvedic massages",
        "Steam & sauna rooms",
        "Yoga & meditation classes",
        "Himalayan herbal treatments",
      ],
      price: "Starting from NPR 9,500/session",
    },
    {
      title: "Infinity Hilltop Pool",
      description:
        "Swim above the clouds in our crystal-clear infinity pool overlooking the lush Gokarna forest and Himalayan peaks.",
      features: [
        "Temperature-controlled water",
        "Poolside refreshments",
        "Private cabanas",
        "Scenic sunrise & sunset views",
      ],
      price: "Included in stay",
    },
    {
      title: "Premium Suites",
      description:
        "Stay in spacious suites with breathtaking mountain views, private balconies, and handcrafted Nepali décor.",
      features: [
        "King-size beds",
        "Panoramic windows",
        "Luxury bathroom amenities",
        "Private butler service",
      ],
      price: "Starting from NPR 65,000/night",
    },
    {
      title: "Adventure Activities",
      description:
        "Embark on thrilling adventures from guided forest hikes to cultural village tours, all arranged by our in-house team.",
      features: [
        "Guided jungle walks",
        "Cycling trails",
        "Cultural village visits",
        "Birdwatching tours",
      ],
      price: "Starting from NPR 10,000/person",
    },
    {
      title: "Event & Celebration Venue",
      description:
        "Host your special occasions in a stunning natural setting, with tailored arrangements for weddings, corporate events, and private parties.",
      features: [
        "Custom décor",
        "Full catering service",
        "Indoor & outdoor setups",
        "Live music & entertainment",
      ],
      price: "Custom pricing",
    },
  ];
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Resort Director",
      image: "/gb1.webp",
      bio: "25+ years in luxury hospitality management",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "Marcus Chen",
      role: "Executive Chef",
      image: "/gb2.webp",
      bio: "Michelin-starred culinary expertise",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "Isabella Rodriguez",
      role: "Spa & Wellness Director",
      image: "/gb1.webp",
      bio: "Certified wellness and therapeutic specialist",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "David Thompson",
      role: "Guest Experience Manager",
      image: "/gb2.webp",
      bio: "Dedicated to creating unforgettable moments",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
  ];

  return (
    <div className="mt-[100px] bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="px-[5%] md:px-[10%] relative z-10 text-center  ">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <span className="text-white/90 font-medium tracking-wider uppercase">
              Premium Amenities
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Gokarna Hillside <span className="block text-white/80">Resort</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Discover our exclusive range of world-class amenities designed to
            immerse you in Nepali luxury while surrounded by breathtaking
            Himalayan views.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20">
        <div className="px-[5%] md:px-[10%]">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Our Signature <span className="text-primary">Amenities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={images[index % 2]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {service.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="px-[5%] md:px-[10%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-primary">Exceptional Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate professionals dedicated to making your stay
              unforgettable, each bringing years of expertise and genuine care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white rounded-xl overflow-hidden p-6 text-center"
              >
                {/* Avatar with Tailwind */}
                <div className="relative w-24 h-24 mx-auto mb-6 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-plight/70">
        <div className="px-[5%] md:px-[10%] text-center ">
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
    </div>
  );
}
