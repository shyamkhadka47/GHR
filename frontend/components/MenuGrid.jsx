"use client"
import { Star, Flame, Crown, Clock, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function MenuGrid({ menuCategories }) {
  // Calculate discounted price if discount is provided
  const calculatePrice = (item, discount = null) => {
    const originalPrice = Number.parseFloat(item.price.replace("$", ""));
    const discountedPrice = discount
      ? originalPrice * (1 - discount / 100)
      : originalPrice;
    const hasDiscount = discount && discount > 0;

    return { originalPrice, discountedPrice, hasDiscount };
  };

  return (
    <div className="px-[5%] md:px-[10%] py-8">
      {menuCategories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {category.name}
          </h2>

          {/* Flex container for responsive layout */}
          <div className="flex flex-wrap">
            {category.items.map((item) => {
              const discount = item.id === 1 ? 10 : null; // Example: 10% discount on first item
              const { originalPrice, discountedPrice, hasDiscount } =
                calculatePrice(item, discount);

              return (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-6"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col">
                    {/* Discount Badge */}
                    {hasDiscount && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-10">
                        {discount}% OFF
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md z-10">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-800">
                        {item.rating}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                      <Image
                        width={300}
                        height={200}
                        src={
                          item.image || "/placeholder.svg?height=200&width=300"
                        }
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content - flex-grow to fill remaining space */}
                    <div className="p-4 flex flex-col flex-grow">
                      {/* Item Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {item.popular && (
                          <div className="flex items-center bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                            <Flame className="w-3 h-3 mr-1" />
                            Popular
                          </div>
                        )}
                      </div>

                      {/* Price and Add to Cart - at bottom */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            Rs: {discountedPrice.toFixed(2)}
                          </span>
                          {hasDiscount && (
                            <span className="text-sm text-gray-500 line-through">
                              {item.price}
                            </span>
                          )}
                        </div>

                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors duration-200">
                          <ShoppingCart className="w-4 h-4" />
                          <span className="hidden sm:inline">Add to Cart</span>
                          <span className="sm:hidden">Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
