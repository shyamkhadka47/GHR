import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Founder",
      content:
        "It uses a dictionary of over 200 Latin words, combined with handful model tence structures, to generate Lorem Ipsum which lo reasonable. The gener Lorem Ipsum done",
      rating: 5,
    },
    {
      name: "Albert Flores",
      role: "Founder",
      content:
        "It uses a dictionary of over 200 Latin words, combined with handful model tence structures, to generate Lorem Ipsum which lo reasonable. The gener Lorem Ipsum done",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      role: "Founder",
      content:
        "It uses a dictionary of over 200 Latin words, combined with handful model tence structures, to generate Lorem Ipsum which lo reasonable. The gener Lorem Ipsum done",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-[5%] md:px-[10%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">N</span>
            </div>
            <span className="text-primary font-medium tracking-wider uppercase">
              Clients Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say About
            <span className="text-primary"> Our Services</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg p-8 shadow hover:shadow-nexava-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/5 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
