import Image from "next/image"

export function Aboutus() {
  return (
    <div className=" px-[10%] md:px[100px] py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Image Section */}
        <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden ">
          <Image
            src="/gb1.jpg"
            alt="Construction workers on roof"
           
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover w-auto h-auto  py-2 border border-t-primaryColor border-b-primaryColor"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="max-w-xl">
          <div className="inline-flex items-center text-secondaryColor font-medium mb-4">
            <span className="mr-2">
              <svg viewBox="0 0 6 6" className="w-1.5 h-1.5 fill-current">
                <rect width="6" height="6" />
              </svg>
            </span>
            <span className="text-2xl text-primaryColor tracking-wider">ABOUT US</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Excellence In Every Profession,
            <br />
            Success In Every Pursuit.
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut
            arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget,
            dignissim massa.
          </p>

          <div className="space-y-4 mb-8">
            {[
              "Innovative Solutions for Superior Quality",
              "Excellence Driven by Innovation",
              "Innovative Approaches to Superior Craftsmanship",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#82B440]/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 text-[#82B440]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center bg-[#111] text-white px-6 py-3 rounded hover:bg-secondaryColor transition-colors duration-300"
          >
            Discover More
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

