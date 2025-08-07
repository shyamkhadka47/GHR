import { CheckCircle, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-card rounded-lg overflow-hidden shadow-nexava-md">
                  <div className="h-48 bg-primary/10"></div>
                </div>
                <div className="bg-gradient-card rounded-lg overflow-hidden shadow-nexava-md">
                  <div className="h-32 bg-accent/10"></div>
                </div>
              </div>
              <div className="mt-8">
                <div className="bg-gradient-card rounded-lg overflow-hidden shadow-nexava-md">
                  <div className="h-56 bg-plight/10"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent rounded-full opacity-30 animate-pulse"></div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">N</span>
              </div>
              <span className="text-primary font-medium tracking-wider uppercase">
                About Paradise Resort
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where luxury meets{" "}
              <span className="text-primary"> tropical paradise.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Nestled on pristine shores, our luxury resort offers an unparalleled escape where
              every detail is crafted to perfection. Experience world-class hospitality,
              breathtaking natural beauty, and memories that will last a lifetime.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                "Award-Winning Luxury Resort Experience",
                "Pristine Beachfront Location",
                "World-Class Amenities & Service",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tailwind-styled Button */}
            <a
              href="#"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105"
            >
              Discover More
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
