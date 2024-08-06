import Image from "next/image";
import Testimonials from "./(Components)/Testimonials";
import Service from "./(Components)/Service";

export default function Home() {
  return (
    <main>
      <Service />
      <Testimonials />
    </main>
  );
}
