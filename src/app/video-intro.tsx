"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export function VideoIntro() {
  return (

    <section className="grid min-h-[30rem] lg:min-h-[46rem]  lg:px-8 mb-0 sm:mb-0">
      {/* mobile  */}
      <figure className="relative h-full w-full md:hidden">
        <div className="bg-black h-full w-full">
          <div className="flex h-screen justify-center items-center flex-col">
            <div
              className="w-full h-screen bg-[url('/image/expectations.gif')] bg-cover bg-center">
              <div className="w-full h-full px-5 flex  justify-center items-center backdrop-brightness-50"> <div className="col-span-1 mx-auto max-w-lg px-15">
                <Typography
                  variant="h1"
                  className="mb-4 font-graduate text-envy-green pt-5 lg:pt-0 text-center lg:text-left [text-shadow:_1px_1px_1px_var(--tw-shadow-color)] shadow-white"
                  placeholder=""
                >
                  UNVEILING ENVY
                </Typography>
                <Typography
                  placeholder=""
                  variant="paragraph"
                  className="mb-5 text-justify  font-caveat text-3xl !text-white "
                  color="black"
                >
                  <span>
                    Countless people navigate distinct lifestyles,
                    Have you ever imagined the excitement of
                    defining into those unique worlds? Our app
                    offers you the chance to step into the shoes of
                    a lifestyle you`ve always envied.
                  </span>
                </Typography>
              </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
      {/* not mobile  */}
      <div className=" grid-cols-1 lg:grid-cols-2 gap-20 max-w-max lg:max-w-8xl mx-auto items-center hidden md:grid">
          <div className="col-span-1 mx-auto max-w-lg px-5">
            <Typography
              variant="h1"
              className="mb-4 font-graduate text-envy-green pt-5 lg:pt-0 text-center lg:text-left"
              placeholder=""
            >
              UNVEILING ENVY
            </Typography>
            <Typography
              placeholder=""
              variant="paragraph"
              className="mb-5 text-justify  font-caveat text-3xl !text-gray-500 "
              color="black"
            >
              <span>
                Countless people navigate distinct lifestyles,
                Have you ever imagined the excitement of
                defining into those unique worlds? Our app
                offers you the chance to step into the shoes of
                a lifestyle you`ve always envied.
              </span>
            </Typography>
          </div>
          <div className="justify-self-right mb-10 lg:m-10 overflow-hidden rounded-xl relative mx-auto max-w-6xl ">
            <video className="h-[40rem] w-full rounded-lg object-cover" controls autoPlay loop muted playsInline>
              <source
                src="https://s3.eu-west-2.amazonaws.com/envy.public/media/video/2023-12-24_18_30_12_video.MP4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
