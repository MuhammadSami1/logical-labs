import Image from "next/image";
import { sections } from "../(Data)";

const Service = () => {
  return (
    <div className="py-20" id="services">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-20 text-3xl font-semibold text-zinc-100">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="hover:borderColor rounded-lg bg-zinc-200 p-6 shadow-lg duration-150 hover:scale-105"
            >
              <Image
                src={section.icon}
                alt="web"
                className="mx-auto h-16 w-16 object-cover"
                height={5}
                width={5}
              />
              <h3 className="mt-5 text-xl font-medium">{section.title}</h3>
              <p className="my-10 text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
