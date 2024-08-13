import Image from "next/image";
import Link from "next/link";
import { projects } from "../(Data)";
import { CardSpotlight } from "./ui/card-spotlight";
import { Cover } from "./ui/cover";

const Projects = () => {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-7 lg:px-8">
        <hr></hr>
        <div className="mx-auto max-w-lg text-center">
          <p className="mt-20 text-3xl font-bold sm:text-4xl">
            Latest Projects
          </p>

          <h1 className="relative z-20 bg-clip-text py-6 text-center text-4xl font-semibold text-gray-200">
            Build amazing websites <br /> at <Cover>warp speed</Cover>
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <CardSpotlight key={item.id}>
              <Link className="block rounded-xl p-8 shadow-xl" href="/">
                <Image
                  src={item.svg}
                  alt="projects"
                  className="relative mx-auto h-16 w-16 object-center"
                  height={5}
                  width={5}
                />

                <h2 className="relative mt-4 text-xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="relative mt-1 text-sm text-gray-300">
                  {item.description}
                </p>
              </Link>
            </CardSpotlight>
          ))}
        </div>
        {/* Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="backgroundColor inline-block rounded px-12 py-3 text-sm font-medium text-white duration-200 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
