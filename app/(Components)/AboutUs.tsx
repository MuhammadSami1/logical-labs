import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5">
      <hr></hr>
      <div className="mt-16 text-white">
        <h1 className="text-lg font-bold sm:text-3xl md:text-4xl">
          HERE’S WHAT YOU
          <span className="textColor block"> SHOULD KNOW ABOUT US. </span>
        </h1>
        <p className="mb-12 mt-2 text-xs leading-4 md:text-lg md:leading-6">
          We believe the outcome of every project
          <span className="block">
            {" "}
            comes down to how well we
            <span className="textColor"> fit together.</span>
          </span>
        </p>
      </div>

      {/* grid Section */}
      <div className="mb-10 grid grid-cols-1 grid-rows-3 gap-x-5 gap-y-4 sm:gap-y-2 md:mb-28 md:grid-cols-3 md:gap-y-10">
        {/* grid 1 */}
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-110">
          <Image
            alt="images"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={100}
            width={400}
            className="h-36 w-full bg-black opacity-50 md:h-96"
          />
          <div className="absolute bottom-0 right-0 pb-2 tracking-tight text-white sm:pb-6 sm:pr-7">
            <span className="text-[10px] font-bold sm:text-xl">
              WE DON’T OVERPROMISE
            </span>

            <span className="block w-48 text-[8px] sm:w-64 sm:py-2 sm:text-sm sm:leading-4">
              We don&apos;t commit to anything we&apos;re not confident about.
              We&apos;ll always pick candor over conceit.
            </span>
          </div>
        </div>
        {/* grid 2 */}
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-110 md:col-span-2">
          <Image
            alt="images"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={100}
            width={400}
            className="h-36 w-full bg-black opacity-50 md:h-96"
          />
          <div className="!important absolute bottom-0 left-0 pb-2 pl-3 tracking-tight text-white sm:left-auto sm:right-0 sm:pb-6 sm:pr-7">
            <span className="textColor text-[10px] font-bold sm:text-xl">
              WE&apos;RE OBSESSIVE.
            </span>

            <span className="block w-48 text-[8px] sm:w-64 sm:py-2 sm:text-sm sm:leading-4">
              We sweat the small stuff. Every pixel, line of code, and
              millisecond of performance time is important to us, because we
              know it&apos;s crucial to your success.
            </span>
          </div>
        </div>
        {/* grid 3 */}
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-110 md:col-span-2">
          <Image
            alt="images"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={100}
            width={400}
            className="z-10 h-36 w-full bg-black opacity-50 md:h-96"
          />
          <div className="absolute bottom-0 right-0 pb-3 tracking-tight text-white sm:left-0 sm:top-0 sm:pl-10 sm:pt-7">
            <span className="textColor text-[10px] font-bold sm:text-xl">
              WE DON&apos;T COME CHEAP.
            </span>

            <span className="block w-40 text-[8px] sm:w-64 sm:pt-2 sm:text-sm sm:leading-4">
              We value quality, and know its worth. We&apos;ll have every
              discussion with you, except for one that&apos;s a haggle.
            </span>
          </div>
        </div>
        {/* grid 4 */}
        <div className="relative transition-transform duration-300 ease-in-out hover:scale-110">
          <Image
            alt="images"
            src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={100}
            width={400}
            className="h-36 w-full bg-black opacity-50 md:h-96"
          />
          <div className="absolute bottom-0 left-0 pb-3 pl-3 tracking-tight text-white sm:top-0 sm:pl-6 sm:pt-7">
            <span className="textColor text-[10px] font-bold sm:text-xl">
              WE&apos;RE REALISTIC.
            </span>

            <span className="block w-48 text-[8px] sm:w-[90%] sm:pt-2 sm:text-sm sm:leading-4">
              We keep it grounded. Expect clear, achievable goals, and honest
              timelines from us. While we love to push boundaries, we&apos;ll
              never sell you on a fantasy. Our focus is on delivering
              sustainable solutions that truly meet your needs.
            </span>
          </div>
        </div>
        {/* grid 5 */}
        <div className="relative row-span-1 transition-transform duration-300 ease-in-out hover:scale-110 md:col-span-3">
          <Image
            alt="images"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ objectPosition: "center", objectFit: "cover" }}
            height={100}
            width={400}
            className="h-36 w-full bg-black opacity-50 md:h-96"
          />
          <div className="absolute bottom-0 left-0 pb-3 pl-3 tracking-tight text-white sm:pb-10 sm:pl-10">
            <span className="textColor text-[10px] font-bold sm:text-xl">
              WE’RE NOT JACKS-OF-ALL-TRADES.
            </span>

            <span className="block w-48 text-[8px] sm:w-[50%] sm:pt-2 sm:text-sm sm:leading-4">
              We&apos;re masters of Python/Django, JavaScript/React, React
              Native, Docker/Kubernetes, and LangChain.
            </span>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default AboutUs;
