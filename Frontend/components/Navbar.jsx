import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Pages", href: "/pages" },
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

const socialIcons = {
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 320 512"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 576 512"
    >
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 512 512"
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 448 512"
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  ),
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsFixed(true); // Make the navbar fixed after scrolling 100px
    } else {
      setIsFixed(false); // Remove fixed positioning when scrolled back to the top
    }
  };
  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="">
        {/* Top Bar */}
        <div className="bg-[#1E1E1E] py-2">
          <div className="  flex items-center justify-between px-10 md:px-[100px]">
            <div className="flex items-center space-x-6">
              <div
                className="flex items-center space-x-2"
                data-aos="fade-right"
                data-aos-delay="50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#82B440]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline-block text-sm text-white">
                  Need Help? Call Us: (+800) 1234 5678 90
                </span>
                <span className="sm:hidden text-sm text-white">Call Us</span>
              </div>
              <div
                className="hidden lg:flex items-center space-x-2"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#82B440]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm text-white">Or Info@Example.Com</span>
              </div>
            </div>
            <div
              className="flex items-center space-x-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="hidden sm:inline-block text-sm text-white">
                Follow Us:
              </span>
              <div className="flex items-center space-x-3">
                {Object.entries(socialIcons).map(([name, icon]) => (
                  <Link
                    key={name}
                    href="#"
                    className="text-white hover:text-[#82B440] transition-colors"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div
          className={`bg-white ${
            isFixed
              ? "fixed top-[-100px] left-0 right-0 z-50 shadow-lg transition-all duration-500 transform translate-y-[100px]"
              : "relative"
          }`}
        >
          <div className="px-[5%] md:px-[100px]">
            <div className="flex h-24 items-center justify-between">
              {/* Updated Logo with larger size */}
              <Link href="/" className="flex items-center">
                <div className="h-16 w-48  left-[-50px]">
                  <Image
                    src="/logo.png"
                    alt="Gokarna Hillside Resort"
                    width={100}
                    height={100}
                    className="object-contain w-auto h-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center lg:space-x-8 md:space-x-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="md:text-[1.8vw] lg:text-[1.2vw] font-medium text-gray-600 relative hover:text-primaryColor before:content-[''] hover:before:w-[50%] before:h-[3px] before:absolute before:bg-secondaryColor before:left-0 before:bottom-[-10px] before:transition-[all] duration-1000 before:ease-in-out before:w-0 "
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <button className="hidden lg:flex items-center px-6 py-3 bg-primaryColor text-white rounded hover:bg-secondaryColor transition-colors">
                  Get A Quote
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="md:hidden p-2 text-gray-600 hover:text-[#82B440] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              {/* Updated Mobile Menu Logo */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <div className="h-16 w-48 ">
                    <Image
                      src="/logo.png"
                      alt="Gokarna Hillside Resort"
                      width={100}
                      height={100}
                      className="object-contain w-auto h-auto"
                      //   sizes="(max-width: 768px) 160px, 192px"
                      priority
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-[#82B440] text-white hover:bg-[#72a038] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <hr className="bg-secondaryColor" />

              {/* Description */}
              <nav className="flex flex-col md:hidden space-y-4 justify-center mt-5">
                {navigationItems.map((item) => (
                 <div  key={item.title}> <Link
                
                 href={item.href}
                 className="text-2xl font-medium text-gray-600 relative hover:text-primaryColor before:content-[''] hover:before:w-[50%] before:h-[3px] before:absolute before:bg-secondaryColor before:left-0 before:bottom-[-10px] before:transition-[all] duration-1000 before:ease-in-out before:w-0 "
               >
                 {item.title}
               </Link></div>
                ))}
              </nav>

              <hr  className="bg-secondaryColor mt-5"/>

              {/* Contact Info */}
              <div className="space-y-8 mt-5" >
                <h3 className="text-xl font-bold">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#82B440]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Main Street, Melbourne, Australia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#82B440]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>info@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#82B440]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Mod-friday, 09am -05pm</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#82B440]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+11002345909</span>
                  </div>
                </div>
              </div>

              {/* Get A Quote Button */}
              <button className="w-full mt-8 py-3 px-4 bg-[#82B440] text-white rounded hover:bg-[#72a038] transition-colors">
                Get A Quote
              </button>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-8">
                {Object.entries(socialIcons).map(([name, icon]) => (
                  <Link
                    key={name}
                    href="#"
                    className="p-2 text-gray-600 hover:text-secondaryColor transition-colors"
                  >
                    <span className="sr-only">{name}</span>
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
