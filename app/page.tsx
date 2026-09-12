import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Articles from "@/components/sections/Articles";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/OurProducts";
import OurWork from "@/components/sections/OurWork";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <OurProducts />
      <OurWork />
      <Articles />
      <Contact />
      <Footer />
    </>
  );
}
