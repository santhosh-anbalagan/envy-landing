"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";


function HowItWorks() {
    return (
        <section className="py-5 px-8 mt-10 lg:mt-0 !min-h-[20rem] bg-envy-green ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 max-w-[80vw] mx-auto items-center mb-10">
            <div className="px-5 overflow-hidden rounded-xl relative mx-auto mt-20 ">
              <div className="absolute w-full h-full inset-0 rounded-xl" />
              <Image
                width={900}
                height={300}
                src="/image/avatar1.jpg"
                className="w-full object-cover scale-110 rounded-xl h-full"
                alt=""
              />
            </div>
            <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0 items-center betwee">
              <Typography
                variant="h1"
                className="mb-4 font-graduate text-white"
                placeholder=""
              >
                HOW IT WORKS
              </Typography>
              <Typography
                placeholder=""
                variant="paragraph"
                className="mb-5 text-justify px-4  font-caveat text-4xl !text-gray-500 lg:px-0"
                color="black"
              >
                <span>Envy is a unique experience-sharing app
                  where individuals authentically showcase
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
