import Image from "next/image";
import {
  ArrowRight,
  Award,
  Users,
  Heart,
  Sparkles,
  
} from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Page() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passionate Service",
      description:
        "Every interaction is crafted with genuine care and attention to detail",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our resort",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Continuously evolving to exceed expectations and create magic",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "Building lasting relationships with guests and our local community",
    },
  ];

  return (
    <div className="min-h-screen mt-[100px]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="px-[5%] md:px-[10%] relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg text-primary font-bold">PR</span>
              </div>
              <span className="text-white/90 font-medium tracking-wider uppercase">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Creating Paradise
              <span className="block text-white/80">Since 1998</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              From a vision of tropical excellence to an award-winning luxury
              destination, discover the passion and dedication behind Paradise
              Resort.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              Discover Our Journey
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Banner */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        <div className="px-[5%] md:px-[10%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">PR</span>
                </div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                Creating Paradise
                <span className="block text-primary mt-2">Since 1998</span>
              </h2>
              <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                From a vision of tropical excellence to an award-winning luxury
                destination, discover the passion and dedication behind Paradise
                Resort.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    International Awards
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discover Our Journey
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative group mb-6">
                <Image
                  src={"/gb1.webp"}
                  width={600}
                  height={400}
                  alt="Paradise Resort - Creating Excellence Since 1998"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="px-[5%] md:px-[10%]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do, ensuring every guest
              experiences the magic of true hospitality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
