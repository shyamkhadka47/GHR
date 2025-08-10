"use client";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Navigation Links Array
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/menu", label: "Menus" },

  { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 w-full z-[999] border-b-[1px] border-b-plight/25 shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-primary text-white py-3 text-sm">
        <div className="px-[5%] md:px-[10%]">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(+800) 1234 5678 90</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Main Street, Melbourne, Australia</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri, 09am - 05pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-nexava-md py-4">
        <div className="px-[5%] md:px-[10%]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href={"/"}>
              <Image
                src="/logo.webp"
                width={100}
                height={100}
                alt="Gokarna Hill Side Logo"
                className="object-cover"
                sizes="100px"
                quality={75}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Link href={"/budget-calculator"} className="hidden md:flex bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md font-medium transition-all">
                Budget Calculator
              </Link>

              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Link href={"/budget-calculator"} className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md font-medium transition-all w-fit">
                 Budget Calculator
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
