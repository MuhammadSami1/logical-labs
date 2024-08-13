import Image from "next/image";
import { sections } from "../(Data)";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Service = () => {
  return (
    <div className="py-20" id="services">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold text-zinc-100">Our Services</h2>
        <div className="grid grid-cols-1 gap-20 px-5 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {sections.map((section, index) => (
            <CardContainer key={index}>
              <CardBody className="hover:borderColor relative rounded-lg bg-zinc-200 p-6 shadow-lg">
                <CardItem translateZ="50" className="mx-auto">
                  <Image
                    src={section.icon}
                    alt="web"
                    className="h-16 w-16 object-cover"
                    height={5}
                    width={5}
                  />
                </CardItem>
                <CardItem translateZ="50">
                  <h3 className="mt-5 text-xl font-medium">{section.title}</h3>
                </CardItem>
                <CardItem translateZ="60">
                  <p className="my-10 text-gray-600">{section.description}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
