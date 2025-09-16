import DiningExperiences from "@/components/DiningExperiences";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HomeMenu />
      <DiningExperiences />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
}
