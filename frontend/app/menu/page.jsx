import MenuGrid from "@/components/MenuGrid";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Page() {
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
          image: "/f1.webp",
          rating: 4.9,
        },
        {
          id: 2,
          name: "Truffle Arancini",
          description:
            "Crispy risotto balls with black truffle and parmesan cheese",
          price: "$28",
          image: "/f2.webp",
          rating: 4.8,
        },
        {
          id: 3,
          name: "Tuna Tartare",
          description:
            "Fresh yellowfin tuna with avocado, citrus, and micro greens",
          price: "$32",
          image: "/f3.webp",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Grilled Calamari",
          description:
            "Tender grilled calamari served with lemon, olive oil, and garlic sauce",
          price: "$22",
          image: "/f4.webp",
          rating: 4.6,
        },
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        {
          id: 5,
          name: "Grilled Lobster Thermidor",
          description:
            "Whole lobster with cognac cream sauce, served with seasonal vegetables",
          price: "$85",
          image: "/f5.webp",
          rating: 4.9,
        },
        {
          id: 6,
          name: "Wagyu Beef Tenderloin",
          description:
            "Premium A5 wagyu with roasted vegetables and red wine reduction",
          price: "$95",
          image: "/f6.webp",
          rating: 4.8,
        },
        {
          id: 7,
          name: "Pan-Seared Halibut",
          description:
            "Fresh halibut with lemon butter sauce and herb-crusted potatoes",
          price: "$42",
          image: "/f7.webp",
          rating: 4.6,
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: 9,
          name: "Chocolate Soufflé",
          description:
            "Rich dark chocolate soufflé with vanilla bean ice cream",
          price: "$18",
          image: "/f9.webp",
          rating: 4.9,
        },
        {
          id: 10,
          name: "Tropical Fruit Tart",
          description:
            "Pastry shell filled with exotic fruits and passion fruit cream",
          price: "$16",
          image: "/f10.webp",
          rating: 4.7,
        },
        {
          id: 11,
          name: "Tiramisu",
          description:
            "Classic Italian dessert with espresso-soaked ladyfingers",
          price: "$14",
          image: "/f11.webp",
          rating: 4.8,
        },
        {
          id: 12,
          name: "Pistachio Baklava",
          description:
            "Flaky pastry filled with pistachios and sweet honey syrup",
          price: "$10",
          image: "/f12.webp",
          rating: 4.7,
        },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      items: [
        {
          id: 13,
          name: "Tropical Paradise",
          description: "Premium rum, passion fruit, mango, and coconut water",
          price: "$16",
          image: "/f13.webp",
          rating: 4.8,
        },
        {
          id: 14,
          name: "Sunset Martini",
          description: "Gin, elderflower, fresh citrus, and hibiscus essence",
          price: "$14",
          image: "/f14.webp",
          rating: 4.6,
        },
        {
          id: 15,
          name: "Ocean Breeze",
          description: "Vodka, blue curaçao, lime, and fresh mint",
          price: "$12",
          image: "/f8.webp",
          rating: 4.7,
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

      <MenuGrid menuCategories={menuCategories} />
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
