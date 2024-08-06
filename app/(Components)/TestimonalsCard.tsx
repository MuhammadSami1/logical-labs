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
    <div className="mx-auto max-w-xs rounded-lg bg-zinc-200">
      <div className="px-8">
        <div className="text-CustomColor1 pt-10 text-lg font-semibold">
          {title}
        </div>
        <div className="text-CustomColor1 py-7 text-sm">{message}</div>
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
          <div className="text-CustomColor1 text-sm">
            <div className="py-1">{name}</div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonalsCard;
