import Navbar from "@/components/layouts/Navbar";
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
    </>
  );
}
