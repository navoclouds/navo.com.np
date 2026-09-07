import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
