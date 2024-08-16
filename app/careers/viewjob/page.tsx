"use client";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Viewjob = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const department = searchParams.get("department");

  return (
    <section>
      <div>
        <Image
          src="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="mainpic"
          height={1000}
          width={1000}
          className="h-56 w-full object-center sm:h-96"
        />
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 md:px-8">
        <h1 className="text-center text-2xl font-semibold text-[#4056F4] opacity-90 sm:text-start md:text-4xl">
          {title}
        </h1>
        <div className="flex flex-col items-center text-white sm:flex-row sm:justify-between">
          <h3 className="my-5 text-center text-xs sm:text-start">
            {department}
            <span> - </span>
            <span className="text-gray-400">
              552 College Road, Block 15, Sector B-1, Lahore
            </span>
          </h3>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
            <SignInButton>
              <button className="rounded-md bg-[#38A3A5] px-2 py-3 text-[#0F1439] hover:bg-opacity-20 hover:text-white md:px-5">
                APPLY NOW
              </button>
            </SignInButton>
            <SignInButton>
              <button className="rounded-md bg-[#38A3A5] px-2 py-3 text-[#0F1439] hover:bg-opacity-20 hover:text-white md:px-5">
                REGISTER & APPLY
              </button>
            </SignInButton>
          </div>
        </div>
        <hr className="mt-5"></hr>
      </div>

      <div className="px-4 md:px-16 lg:mx-auto lg:max-w-7xl">
        <div className="my-20 text-sm text-gray-400">
          Cogent Labs{" "}
          <span className="text-white">
            {" "}
            is seeking a skilled and experienced Senior Bubble Developer to join
            our dynamic team. As a Senior Bubble Developer, you will play a key
            role in designing, developing, and maintaining web applications
            using the Bubble platform.
          </span>
        </div>

        {/* Prerequisites */}
        <ul className="text-sm text-white">
          <li className="my-4 text-gray-400">
            Prerequisites (in order of importance)
          </li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>
              A bachelor&apos;s or equivalent degree in Computer
              Science/Software Engineering OR exceptional display of
              self-learning ability.
            </li>
            <li>At least 3 years of relevant experience.</li>
          </ul>

          {/* Must Have */}
          <li className="my-4 text-gray-400">Must Have</li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>
              Design and develop responsive web applications using Bubble,
              ensuring both usability and functionality.
            </li>
            <li>
              Customize and extend Bubble applications with complex workflows,
              plugins, and integrations with external APIs.
            </li>
            <li>
              Collaborate effectively with cross-functional teams to define
              project requirements and deliver solutions that meet business
              objectives.
            </li>
            <li>
              Experience in conducting thorough code reviews, testing, and
              debugging to ensure top-notch quality deliverables.
            </li>
            <li>
              Stay updated with the latest trends and best practices in Bubble
              development and contribute to continuous improvement within the
              team.
            </li>
            <li>
              Strong knowledge of web technologies such as HTML, CSS,
              JavaScript, and experience with integrating APIs.
            </li>
            <li>
              Demonstrated success in delivering multiple applications using
              Bubble in previous roles.
            </li>
          </ul>

          {/* Good to have */}
          <li className="my-4 text-gray-400">Good to Have</li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>
              Knowledge of backend technologies and databases beyond Bubble,
              such as SQL databases (MySQL, PostgreSQL) or NoSQL databases
              (MongoDB).
            </li>
            <li>
              Experience with performance optimization techniques for web
              applications.
            </li>
            <li>
              Strong analytical skills and ability to gather and interpret user
              feedback.
            </li>
            <li>Enthusiasm for growth and learning.</li>
          </ul>

          {/* Bouns points */}
          <li className="my-4 text-gray-400">Bonus points for</li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>Exceptional communication skills</li>
            <li>High energy individuals</li>
            <li>Out-of-the-box thinkers</li>
          </ul>

          {/* Skills */}
          <li className="my-4 text-gray-400">Skills</li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bubble</li>
            <li>Attention to detail</li>
            <li>Problem Solving</li>
          </ul>

          {/* Perks */}
          <li className="my-4 text-gray-400">Perks</li>
          <ul className="flex list-inside list-disc flex-col gap-y-3">
            <li>No Attendance Track</li>
            <li>Flexible Working Hours</li>
            <li>Flat Hierarchy</li>
            <li>Growth Culture</li>
            <li>Daily Free Lunch</li>
            <li>Multiple Indoor Games</li>
            <li>Monthly Sports Activities</li>
            <li>Monthly Events</li>
            <li>Quarterly Team Dinners</li>
            <li>Annual Increments</li>
            <li>Travel Allowance</li>
            <li>Performance based bonus</li>
            <li>Medical</li>
            <li>Gym Allowance</li>
            <li>Vehicle Sponsorship</li>
            <li>Annual Trip</li>
            <li>Referral Bonus</li>
            <li>Annual leaves</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Viewjob;
