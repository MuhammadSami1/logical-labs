import TestimonalsCard from "./TestimonalsCard";

const profiles = [
  {
    id: 1,
    title: "Top-Rated Software Solutions",
    profile:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",

    name: "John Doe",
    message:
      "The software I downloaded from this site has significantly improved my workflow. The interface is intuitive, and the support team is responsive. Highly looking for reliable software solutions!",
    address: "New York, NY",
  },
  {
    id: 2,
    title: "Exceptional Development Tools",
    profile:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",

    name: "Andy Smith",
    message:
      "I found exactly what I needed for my development projects on this site. The tools are top-notch, and installation was smooth. The documentation provided was comprehensive and very helpful.",
    address: "San Francisco, CA",
  },
  {
    id: 3,
    title: "Revolutionizing Your Tech Experience",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

    name: "Sophia Robson",
    message:
      "The tech solutions offered here are truly innovative. The platform’s features are advanced yet user-friendly. I’m impressed with the performance and the level of support provided.",
    address: "Austin, TX",
  },
];

const Testimonials = () => {
  return (
    <div>
      <div className="pt-20 text-center text-2xl text-white md:text-4xl">
        Testimonals
      </div>
      <div className="textColor pb-20 pt-7 text-center text-2xl">
        Over 15,000 happy customers.
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-10 pb-36 md:px-3">
        {profiles.map((profile) => (
          <TestimonalsCard
            key={profile.id}
            title={profile.title}
            profile={profile.profile}
            name={profile.name}
            address={profile.address}
            message={profile.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
