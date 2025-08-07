import { Utensils, Coffee, Dessert } from "lucide-react";

const DiningExperiences = () => {
  const menuCategories = [
    {
      number: "1",
      icon: <Utensils className="w-8 h-8" />,
      title: "Fine Dining",
      description: "Exquisite international cuisine crafted by world-renowned chefs using the finest ingredients",
    },
    {
      number: "2",
      icon: <Coffee className="w-8 h-8" />,
      title: "Café & Lounge",
      description: "Casual dining with premium coffee, light bites, and tropical cocktails by the beach",
    },
    {
      number: "3",
      icon: <Dessert className="w-8 h-8" />,
      title: "Dessert Bar",
      description: "Artisanal desserts and specialty treats to satisfy your sweet cravings",
    },
  ];

  const menuItems = [
    "Fresh Seafood Daily",
    "Tropical Fusion Cuisine",
    "Premium Wine Selection",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-[5%] md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">N</span>
              </div>
              <span className="text-primary font-medium tracking-wider uppercase">
                Dining Experience
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
              Culinary Excellence
              <span className="text-primary"> Awaits You</span>
            </h2>

            {/* Process Steps */}
            <div className="space-y-8">
              {menuCategories.map((category, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-sm font-bold text-white">
                        {category.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < menuCategories.length - 1 && (
                    <div className="absolute left-8 top-16 w-px h-8 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Features List */}
            {/* <div className="mt-12 flex gap-20">
              {menuItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground w-max font-medium">{item}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Image/Box */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Gourmet Experience
                </h3>
                <p className="text-muted-foreground">World-class culinary delights</p>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperiences;
