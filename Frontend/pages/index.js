import { Inter } from "next/font/google";
import Head from "next/head";
import { Hero } from "@/components/Hero";
import { Aboutus } from "@/components/Aboutus";
import { ContactUs } from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import Contact from "@/components/contact";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Your Page Title</title>
        <meta
          name="description"
          content="A short description of your page's content for SEO"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Your Page Title" />
        <meta
          property="og:description"
          content="Description that appears when shared on social media."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path/to/image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta
          name="twitter:description"
          content="Short description for Twitter"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/path/to/image.jpg"
        />

        {/* Additional SEO Enhancements */}
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <Hero />
        <Aboutus/>
        <Services/>
        <Gallery/>
        <Testimonials/>
        <FAQ/>
        <ContactUs/>
        {/* <Contact/> */}
      </main>
    </>
  );
}
