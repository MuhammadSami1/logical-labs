"use client";
import Link from "next/link";
import App from "./particles";

const HeroSection = () => {
  return (
    <section className="relative text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-28 pt-16 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Innovative IT Services
            <span className="textColor mt-2 sm:block">
              {" "}
              for a Digital World.{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Technology Simplified for Your Success
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/Contact"
              className="backgroundColor block rounded px-12 py-3 text-sm font-medium text-white active:text-opacity-75 sm:w-auto"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full">
        <App id="particles" />
      </div>
    </section>
  );
};

export default HeroSection;
