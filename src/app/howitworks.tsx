"use client";

import PictureCarousel from "@/components/picture-carousel";
import { Typography } from "@material-tailwind/react";


function HowItWorks() {
  return (
    <section className="grid py-5 px-5 lg:px-8 mt-0 !min-h-[20rem] bg-envy-green ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 max-w-full lg:max-w-[80vw] mx-auto items-center mb-10">
        <div className="px-5 overflow-hidden relative mx-auto mt-20 ">
          <div className=" w-full h-full inset-0" />
          <video className="h-[40rem] w-full rounded-lg object-cover hidden md:block" controls autoPlay loop muted playsInline>
            <source
              src="/video/en_fun.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="h-[40rem] w-full rounded-lg object-cover md:hidden">
            <PictureCarousel />
          </div>
        </div>
        <div className="col-span-1 mx-auto max-w-lg items-center ">
          <Typography
            variant="h1"
            className="mb-4 font-graduate text-white text-center lg:text-left"
            placeholder=""
          >
            HOW IT WORKS
          </Typography>
          <Typography
            placeholder=""
            variant="paragraph"
            className="mb-5  font-caveat text-3xl !text-gray-500"
            color="black"
          >
            <span>Envy, a unique experience-sharing app
              where users candidly showcase
              their daily lifestyles. If curiosity beckons,
              slide to request your host and choose your
              dates to immerse yourself in the
              experience!
            </span>
          </Typography>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
