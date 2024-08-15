import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex items-center justify-center pt-4">
      <SignUp />;
    </div>
  );
};

export default page;
