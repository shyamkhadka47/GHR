import { ArrowRight, ExternalLink } from "lucide-react";

const Gallery = () => {
  const projects = [
    {
      title: "Beachfront Villas",
      category: "Luxury Accommodation",
      image: "/gb1.webp",
    },
    {
      title: "Spa Pavilion",
      category: "Wellness & Relaxation",
      image: "/gb2.webp",
    },
    {
      title: "Ocean View Restaurant",
      category: "Fine Dining",
      image: "/gb3.webp",
    },
    {
      title: "Private Marina",
      category: "Water Activities",
      image: "/gb4.webp",
    },
    {
      title: "Wedding Pavilion",
      category: "Special Events",
      image: "/gb5.webp",
    },
    {
      title: "Pool Bar & Lounge",
      category: "Recreation",
      image: "/gb2.webp",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="px-[5%] md:px-[10%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">N</span>
            </div>
            <span className="text-primary font-medium tracking-wider uppercase">
              Resort Gallery
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover our beautiful
            <span className="text-primary"> resort Gallery</span>
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all">
            All Gallery
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Gallery</p>
                  </div>
                </div>

                {/* Hover Button Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="inline-flex items-center bg-white text-primary text-sm font-medium px-4 py-2 rounded hover:bg-white/90 transition">
                    View Gallery
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 text-base rounded transition-all">
            Explore All Gallery
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
