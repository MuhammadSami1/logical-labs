const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully-functional e-commerce platform with advanced search and filtering features, providing a seamless shopping experience and robust backend management.",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "A secure and user-friendly mobile banking application that offers real-time transaction tracking, account management, and advanced security features.",
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description:
      "A powerful analytics dashboard that provides insights, visualizations, and reporting tools for effective business intelligence and data-driven decision making.",
  },
  {
    id: 4,
    title: "Website Revamp",
    description:
      "A complete overhaul of a corporate website to modernize its design, improve user navigation, and enhance responsiveness across all devices.",
  },
  {
    id: 5,
    title: "Healthcare System",
    description:
      "An integrated healthcare management system designed to streamline patient records, appointment scheduling, and medical billing for healthcare providers.",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An online learning platform that offers interactive courses, progress tracking, and a community forum for students and educators to collaborate and share knowledge.",
  },
];

const Projects = () => {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Latest Projects</h2>

          <p className="mt-4 text-gray-300">
            Explore some of our recent work that showcases our expertise and
            dedication to delivering top-notch solutions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <div key={item.id}>
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm text-gray-300">{item.description}</p>
              </a>
            </div>
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
