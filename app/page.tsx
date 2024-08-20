import Testimonials from "./(Components)/Testimonials";
import Service from "./(Components)/Service";
import HeroSection from "./(Components)/HeroSection";
import ImageSection from "./(Components)/ImageSection";
import Projects from "./(Components)/Projects";
import AboutUs from "./(Components)/AboutUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageSection />
      <Service />
      <AboutUs />
      <Testimonials />
      <Projects />
    </main>
  );
}
