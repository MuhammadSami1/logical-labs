import Image from "next/image";

type TestimonalsType = {
  title: string;
  profile: string;
  name: string;
  address: string;
  message: string;
};

const TestimonalsCard = ({
  title,
  profile,
  name,
  address,
  message,
}: TestimonalsType) => {
  return (
    <div className="relative mx-auto max-w-xs rounded-lg border border-gray-300 text-white">
      <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 opacity-35 blur-3xl" />
      <div className="px-8">
        <div className="pt-10 text-lg font-semibold">{title}</div>
        <div>
          <div className="py-7 text-sm">{message}</div>
        </div>
        <div className="border border-gray-300"></div>
        <div className="flex items-center gap-5 py-7">
          <Image
            src={profile}
            alt="profile"
            className="rounded-full"
            style={{ objectFit: "cover", width: "60px", height: "60px" }}
            width={60}
            height={60}
          />
          <div className="text-sm">
            <div className="py-1">{name}</div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCard;
