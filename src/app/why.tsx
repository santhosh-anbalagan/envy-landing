"use client";

import { Typography } from "@material-tailwind/react";

function Why() {
  return (
    <section className="grid !min-h-[50rem] px-8 bg-envy-green">
      <Typography
        variant="h1"
        className="font-graduate mb-1 place-self-center pt-20 lg:hidden text-white"
        placeholder=""
      >
        WHY TRY IT
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 max-w-[80vw] mx-auto items-center py-5">
        <div className="justify-self-center overflow-hidden rounded-xl relative mx-auto max-w-7xl ">
          <video
            className="h-[40rem] w-full object-cover rounded-lg " controls autoPlay loop muted
          >
            <source
              src="https://s3.eu-west-2.amazonaws.com/envy.public/media/video/why_try_it.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0 text-envy-green">
          <Typography
            variant="h1"
            className="mb-4 font-graduate text-white hidden lg:block"
            placeholder=""
          >
            WHY TRY IT
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mb-5 px-4 text-justify text-3xl !text-gray-500 lg:px-0 font-caveat"
          >
            <span>
              Explore: Discover and experience the various domains of culture, place, and profession.
            </span>
            <br />
            <br />
            <span>
              Elevating the experience: Introducing a
              Dynamic Point System for added excitement
              <br />
            </span>
            <br />
            <span>
              It&apos;s Safe: Only verified profiles, authentic users sharing genuine day-to-day routines.
              <br />
            </span>
            <br />
            <span>
              Benefits: Earn money as a host.
              <br />
            </span>
            <br />
            <span>
              Timeline: Minimum 24 hours. It transcends a
              mere activity.
              <br />
            </span>
          </Typography>
        </div>
      </div>
    </section>
  );
}
export default Why;
