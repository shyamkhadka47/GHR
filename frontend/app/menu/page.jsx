"use client";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const images = ["/gb1.webp", "/gb2.webp"];

  const menuCategories = [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: 1,
          name: "Mediterranean Seafood Platter",
          description:
            "Fresh oysters, grilled prawns, and lobster tail with Mediterranean herbs",
          price: "$45",
          image: images[0],
          rating: 4.9,
          time: "15 min",
          popular: true,
        },
        {
          id: 2,
          name: "Truffle Arancini",
          description:
            "Crispy risotto balls with black truffle and parmesan cheese",
          price: "$28",
          image: images[1],
          rating: 4.8,
          time: "12 min",
          popular: false,
        },
        {
          id: 3,
          name: "Tuna Tartare",
          description:
            "Fresh yellowfin tuna with avocado, citrus, and micro greens",
          price: "$32",
          image: images[0],
          rating: 4.7,
          time: "10 min",
          popular: false,
        },
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        {
          id: 4,
          name: "Grilled Lobster Thermidor",
          description:
            "Whole lobster with cognac cream sauce, served with seasonal vegetables",
          price: "$85",
          image: images[1],
          rating: 4.9,
          time: "35 min",
          popular: true,
        },
        {
          id: 5,
          name: "Wagyu Beef Tenderloin",
          description:
            "Premium A5 wagyu with roasted vegetables and red wine reduction",
          price: "$95",
          image: images[0],
          rating: 4.8,
          time: "40 min",
          popular: true,
        },
        {
          id: 6,
          name: "Pan-Seared Halibut",
          description:
            "Fresh halibut with lemon butter sauce and herb-crusted potatoes",
          price: "$42",
          image: images[1],
          rating: 4.6,
          time: "25 min",
          popular: false,
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: 7,
          name: "Chocolate Soufflé",
          description:
            "Rich dark chocolate soufflé with vanilla bean ice cream",
          price: "$18",
          image: images[0],
          rating: 4.9,
          time: "20 min",
          popular: true,
        },
        {
          id: 8,
          name: "Tropical Fruit Tart",
          description:
            "Pastry shell filled with exotic fruits and passion fruit cream",
          price: "$16",
          image: images[1],
          rating: 4.7,
          time: "5 min",
          popular: false,
        },
        {
          id: 9,
          name: "Tiramisu",
          description:
            "Classic Italian dessert with espresso-soaked ladyfingers",
          price: "$14",
          image: images[0],
          rating: 4.8,
          time: "5 min",
          popular: false,
        },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      items: [
        {
          id: 10,
          name: "Tropical Paradise",
          description: "Premium rum, passion fruit, mango, and coconut water",
          price: "$16",
          image: images[1],
          rating: 4.8,
          time: "5 min",
          popular: true,
        },
        {
          id: 11,
          name: "Sunset Martini",
          description: "Gin, elderflower, fresh citrus, and hibiscus essence",
          price: "$14",
          image: images[0],
          rating: 4.6,
          time: "3 min",
          popular: false,
        },
        {
          id: 12,
          name: "Ocean Breeze",
          description: "Vodka, blue curaçao, lime, and fresh mint",
          price: "$12",
          image: images[1],
          rating: 4.7,
          time: "3 min",
          popular: false,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen  mt-[100px]">
      <header className="text-center p-20 mb-16 w-full bg-green-50">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs text-primary-foreground font-bold">N</span>
          </div>
          <span className="text-primary font-medium tracking-wider uppercase">
            Culinary Excellence
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
          Our <span className="text-primary">Menu</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our carefully crafted dishes, featuring the finest
          ingredients and innovative culinary techniques
        </p>
      </header>

      {/* Categories and Items */}
      {menuCategories.map((category) => (
        <section key={category.id} className="mb-20 px-[5%] md:px-[10%]">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {category.name}
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Carefully selected and expertly prepared
          </p>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.popular && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded">
                      Popular
                    </span>
                  )}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    {/* Removed Users icon as no context here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
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
    </main>
  );
}
