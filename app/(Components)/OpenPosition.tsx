"use client";

import { BackgroundGradient } from "./ui/background-gradient";
import { jobs } from "../(Data)";
import { useRouter } from "next/navigation";

type QueryType = {
  query: string;
};

type ItemType = {
  title: string;
  department: string;
};
const OpenPosition = ({ query }: QueryType) => {
  const filterItems = jobs.filter((data) =>
    data.title.toLowerCase().includes(query.toLowerCase()),
  );

  const router = useRouter();
  const getItems = (item: ItemType) => {
    const query = new URLSearchParams({
      title: item.title,
      department: item.department,
    }).toString();

    router.push(`/careers/viewjob?${query}`);
  };
  return (
    <div className="mx-auto max-w-7xl">
      <hr className="mt-20" />
      <div className="mt-20 flex justify-center gap-2 px-5 text-4xl font-medium uppercase text-white sm:justify-normal sm:text-5xl md:px-0">
        Open <span className="font-thin">Positions</span>
      </div>
      <div className="my-16 flex flex-wrap items-center justify-center gap-7 px-5 md:px-0">
        {filterItems.length > 0
          ? filterItems.map((items, i) => (
              <div key={i} onClick={() => getItems(items)}>
                <BackgroundGradient className="rounded-md bg-zinc-200 px-10 py-7 text-center">
                  <p className="mb-2 text-base font-semibold text-[#0F1439] duration-200 hover:text-[#3AD9C4] sm:text-xl">
                    {items.title}
                  </p>

                  <p className="pt-4 text-sm text-neutral-600">
                    {items.position} position(s)
                  </p>
                  <p className="pt-5 text-xs text-neutral-600">
                    {items.department}
                  </p>
                  <p className="pt-2 text-xs text-gray-500">{items.address}</p>
                </BackgroundGradient>
              </div>
            ))
          : jobs.map((items, i) => (
              <div key={i} onClick={() => getItems(items)}>
                <BackgroundGradient className="rounded-md bg-zinc-200 px-10 py-7 text-center">
                  <p className="mb-2 text-base font-semibold text-[#0F1439] duration-200 hover:text-[#3AD9C4] sm:text-xl">
                    {items.title}
                  </p>

                  <p className="pt-4 text-sm text-neutral-600">
                    {items.position} position(s)
                  </p>
                  <p className="pt-5 text-xs text-neutral-600">
                    {items.department}
                  </p>
                  <p className="pt-2 text-xs text-gray-500">{items.address}</p>
                </BackgroundGradient>
              </div>
            ))}
      </div>
    </div>
  );
};

export default OpenPosition;
