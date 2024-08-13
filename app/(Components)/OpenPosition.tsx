"use client";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

const jobs = [
  {
    title: "Senior Bubble Developer",
    position: 1,
    department: "Software Development Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
  {
    title: "ReactJS Developer",
    position: 2,
    department: "Software Development Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
  {
    title: "Python/Django Developer",
    position: 1,
    department: "Software Development Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
  {
    title: "SQA Engineer",
    position: 1,
    department: "SQA Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
  {
    title: "Lead React JS Developer",
    position: 1,
    department: "Software Development Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
  {
    title: "Front Desk Officer",
    position: 1,
    department: "HR & Admin Department",
    address: "552 College Road, Block 15, Sector B-1, Lahore, Lahore",
  },
];

const OpenPosition = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <hr className="mt-20"></hr>
      <div className="mt-20 flex justify-center gap-2 px-5 text-4xl font-medium uppercase text-white sm:justify-normal sm:text-5xl md:px-0">
        Open <span className="font-thin">Positions</span>
      </div>

      <div className="my-16 grid grid-cols-1 gap-7 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-0">
        {jobs.map((items, i) => (
          <BackgroundGradient
            key={i}
            className="rounded-md bg-zinc-100 px-10 py-7 text-center"
          >
            <p className="mb-2 text-base font-semibold text-[#0F1439] duration-200 hover:text-[#3AD9C4] sm:text-xl">
              {items.title}
            </p>

            <p className="pt-4 text-sm text-neutral-600">
              {items.position} position(s)
            </p>
            <p className="pt-5 text-xs text-neutral-600">{items.department}</p>
            <p className="pt-2 text-xs text-gray-500">{items.address}</p>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default OpenPosition;
