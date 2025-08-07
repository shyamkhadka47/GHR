import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="px-[5%] md:px-[10%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-[50px] h-[40px]"><Image
                  src={"/logo.webp"}
                  width={40}
                  height={40}
                  sizes="40px"
                  alt="Nexava"
                  className="w-full h-full object-cover"
                /></div>
                <span className="text-2xl font-bold">
                  Gokarna Hillside Resort
                </span>
              </div>
              <p className="text-white/80 mb-6">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Gallery", "Contact Us"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-white/80 hover:text-primary transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Roof Repair",
                  "Roof Installation",
                  "Roof Inspection",
                  "Green Flashing Repair",
                  "Roofing Consultation",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-white/80">
                    Main Street, Melbourne, Australia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@example.com"
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    info@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/80">Mon-Friday, 09am - 05pm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+11002345909"
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    +11002345909
                  </a>
                </div>
              </div>

              {/* Pure Tailwind Button */}
              <a
                href="#"
                className="inline-block mt-6 bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition duration-300"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Nexava. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/60 hover:text-primary text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
