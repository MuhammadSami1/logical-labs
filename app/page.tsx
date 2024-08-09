import Image from "next/image";
import Testimonials from "./(Components)/Testimonials";
import Service from "./(Components)/Service";
import HeroSection from "./(Components)/HeroSection";
import ImageSection from "./(Components)/ImageSection";
import Projects from "./(Components)/Projects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageSection />
      <Service />
      <Testimonials />
      <Projects />
    </main>
  );
}
