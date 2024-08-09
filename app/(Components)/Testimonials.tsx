import { profiles } from "../(Data)";
import TestimonalsCard from "./TestimonalsCard";

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
