const sections = [
  {
    title: "Web Development",
    description:
      "We create modern, responsive websites using the latest technologies. Our services include front-end and back-end development, CMS integration, and e-commerce solutions, all designed for optimal performance and user experience.",
  },
  {
    title: "Mobile Development",
    description:
      "Our mobile app development covers both iOS and Android platforms. From concept to deployment, we deliver high-quality apps with features like push notifications and in-app purchases, ensuring a seamless mobile experience.",
  },
  {
    title: "Data Analysis",
    description:
      "We turn data into actionable insights with advanced analytics and visualization. Our services include data cleaning, predictive analytics, and dashboard creation to help you make informed decisions.",
  },
  {
    title: "Graphics Design",
    description:
      "Our graphic design services include logo creation, branding, and marketing materials. We focus on designs that effectively communicate your brand message and stand out visually.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design user interfaces and experiences that are intuitive and engaging. Our UI/UX design services involve wireframing, prototyping, and user testing to ensure a smooth user journey.",
  },
  {
    title: "Video Animation",
    description:
      "We produce eye-catching animations and videos, including explainer videos and promotional content. Our animations are crafted to enhance your storytelling and captivate your audience.",
  },
];

const Service = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-20 text-3xl font-semibold text-zinc-100">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="hover:borderColor rounded-lg bg-white p-6 shadow-lg"
            >
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
