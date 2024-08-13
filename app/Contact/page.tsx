const Contact = () => {
  return (
    <section>
      <div className="flex flex-col">
        <div className="pb-16 pt-10 text-center">
          <div className="text-2xl font-bold text-white md:text-4xl">
            Contact Us
          </div>
          <p className="text-md mx-auto max-w-lg px-5 pt-5 text-white sm:px-0 sm:text-sm">
            We consider all the drivers of change gives you the components you
            need need to change to create a truly happens.
          </p>
        </div>

        {/*Form  */}
        <div className="px-5 md:px-0">
          <div className="mx-auto mb-16 max-w-2xl rounded-xl bg-zinc-100 bg-opacity-95">
            <form className="px-8">
              <div className="flex flex-col justify-center pb-5 pt-10 text-sm">
                <label htmlFor="text" className="pb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your name"
                  className="Custom rounded-3xl border py-4"
                />
              </div>
              <div className="flex flex-col justify-center pb-5 text-sm">
                <label htmlFor="email" className="pb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="Custom rounded-3xl border py-4"
                />
              </div>
              <div className="flex flex-col justify-center pb-5 text-sm">
                <label htmlFor="subject" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Write a subject"
                  className="Custom rounded-3xl border py-4"
                />
              </div>
              <div className="flex flex-col justify-center pb-5 text-sm">
                <label htmlFor="message" className="pb-2">
                  Messsage
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a message"
                  rows={5}
                  cols={50}
                  className="Custom rounded-xl border py-4"
                ></textarea>
              </div>
              <div className="pb-7">
                <button
                  type="submit"
                  className="backgroundColor w-full rounded-3xl py-4 text-sm text-white hover:bg-opacity-70"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* details */}
        <div className="mx-auto max-w-2xl pb-20 text-white">
          <div className="md:text-md flex flex-row items-center justify-evenly gap-16 space-x-2 px-5 text-xs font-medium sm:gap-44 sm:space-x-0 sm:text-sm md:gap-56 md:px-0">
            <div className="mb-2 md:mb-0">Call Us:</div>
            <div className="mb-2 md:mb-0">Hours:</div>
            <div className="mb-2 md:mb-0">Our Location:</div>
          </div>
          <div className="flex items-center justify-evenly gap-5 pt-0 sm:gap-24 sm:px-5 sm:pt-5 md:gap-24 md:space-x-1 md:px-0">
            <div className="textColor mb-2 text-[10px] font-medium sm:text-sm sm:font-bold md:mb-0 md:text-[16px]">
              +92-307-4031207
            </div>
            <div className="mb-2 text-[10px] sm:text-sm md:mb-0">
              Mon-Fri: 9:00 AM - 10:00 PM
            </div>
            <div className="max-w-16 pl-0 text-[10px] leading-5 sm:max-w-32 sm:text-sm md:pl-5">
              123 Main Street, Los Angeles, CA, United States
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.681730734388!2d-118.24645648922646!3d34.05203437304512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6492802e7df%3A0xdb74a941157e2d85!2s123%20Main%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2s!4v1719826688541!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
