"use client";
import tick from "@/public/images/tick.svg";
import Image from "next/image";
import { useState } from "react";
import OpenPosition from "@/app/(Components)/OpenPosition";
import { useRouter } from "next/navigation";
const JobOpening = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const signUp = () => {
    router.push("/sign-up");
  };
  return (
    <>
      <div className="mx-auto mt-7 grid max-w-7xl grid-cols-1 px-2 md:grid-cols-2 md:px-0">
        <div className="flex flex-col justify-end">
          <div className="flex justify-center gap-3 pt-7 text-5xl text-white md:justify-normal">
            JOB
            <span className="font-thin"> OPENINGS</span>
          </div>
          <div className="pb-7 pt-10 md:pb-0">
            <input
              type="search"
              value={query}
              name="search"
              id="search"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="w-full rounded-md py-4 placeholder:px-4"
            />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="w-full md:ml-60 md:max-w-sm">
          <div className="rounded-md bg-[#38A3A5] px-10 py-7">
            <div className="flex justify-center gap-2 pb-5 text-2xl font-normal tracking-wider text-white md:justify-normal md:pb-10">
              CREATE <span className="font-thin">ACCOUNT</span>
            </div>
            <div className="flex flex-col gap-y-5 text-[12px] text-white">
              <div className="flex items-center gap-4">
                <Image src={tick} alt="tick" height={12} width={12} />
                View and edit your application
              </div>
              <div className="flex items-center gap-4">
                <Image src={tick} alt="tick" height={12} width={12} />
                Track your application status
              </div>
              <div className="flex w-56 items-center gap-4">
                <Image src={tick} alt="tick" height={12} width={12} />
                Give feedback on the recruitment process
              </div>
            </div>
            <div className="pt-10">
              <button
                onClick={signUp}
                className="w-full rounded-md bg-white py-2 text-[#0F1439] hover:bg-[#0F1439] hover:text-white"
              >
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <OpenPosition query={query} />
    </>
  );
};

export default JobOpening;
