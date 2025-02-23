import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Team", href: "/team" },
  { title: "Our Services", href: "/services" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

const recentPosts = [
  {
    date: "Jun 30, 2024",
    title: "Correct Execution Ensures Victory.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    date: "Jun 30, 2024",
    title: "Correct Execution Ensures Victory.",
    image: "/placeholder.svg?height=80&width=80",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1223] relative">
      {/* Main Footer Content */}
      <div className="px-5% md:px-[100px] py-16 relative">
        <div className="grid px-[10%] md:pl-0 gap-x-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-6 ">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Home className="w-6 h-6 text-[#82B440]" /> */}
              <Image
                src={"/logo.png"}
                alt="gokarna hillside resort"
                width={50}
                height={50}
                className=" rounded-md object-cover w-auto h-auto"
              />
              <span className="text-white text-2xl font-bold">About Us</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Proin efficitur, mauris vel condimentum pulvinar, velit orci
              consectetur ligula, eget egestas magna mi ut arcu.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-[#82B440] transition-colors"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#82B440] transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Address */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Contact & Information
            </h3>

            {/* Phone number */}
            <div className="flex items-center text-gray-400 mb-4">
              <Phone className="w-5 h-5 mr-3 text-[#82B440]" />
              <a href="tel:+1234567890" className="hover:text-[#82B440]">
                +1 (234) 567-890
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center text-gray-400 mb-4">
              <Mail className="w-5 h-5 mr-3 text-[#82B440]" />
              <a
                href="mailto:info@gokarnahillside.com"
                className="hover:text-[#82B440]"
              >
                info@gokarnahillside.com
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="w-5 h-5 mr-3 text-[#82B440]" />
              <span className="hover:text-[#82B440]">
                Gokarna Hillside Resort, Kathmandu, Nepal
              </span>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-white font-bold">Working Hours:</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.173001818824!2d85.37524157546862!3d27.742809476162275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b16b64b4c53%3A0xb0c7cff347620047!2sGokarna%20Hillside%20Resort!5e0!3m2!1sen!2snp!4v1740213743399!5m2!1sen!2snp"
              width="220"
              height="220"
              style={{ border: "0" }} // Correct style format (object instead of string)
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Contact Details with Icons */}
            <div className="mt-6 space-y-4">
              {/* Phone number */}
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-[#82B440]" />
                <a href="tel:+1234567890" className="hover:text-[#82B440]">
                  +1 (234) 567-890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-[#82B440]" />
                <a
                  href="mailto:info@gokarnahillside.com"
                  className="hover:text-[#82B440]"
                >
                  info@gokarnahillside.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 relative">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-400 text-center">
            © Copyright 2024 By{" "}
            <Link
              href="/"
              className="text-[#82B440] hover:text-[#72a038] transition-colors"
            >
              Gokarna HillSide Resort
            </Link>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
