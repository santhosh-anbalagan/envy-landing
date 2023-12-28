"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

function Why() {
  return (
    <section className="grid !min-h-[55rem] px-8 bg-envy-green">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="p-8">
          <div className="w-full container p-5 overflow-hidden rounded-xl relative mx-auto max-w-6xl ">
            <video
              className="h-[75vh] w-full rounded-lg"
              controls
              autoPlay
              loop
            >
              <source
                src="https://s3.eu-west-2.amazonaws.com/envy.public/media/video/why_try_it.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0 text-envy-green">
          <Typography
            variant="h2"
            className="mb-4 font-graduate text-white"
            placeholder=""
          >
            WHY TRY IT
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mb-5 px-4 text-left text-2xl !text-gray-500 lg:px-0 font-caveat"
          >
            <span>
              Explore: Dive into the distinct realms of culture,
              <br />
              location, and vocation, experiencing their unique
              <br />
              facets.
              <br />
            </span>
            <br />
            <span>
              Elevaing the Experience: Inroducing a<br />
              Dynamic Point System for Added Excittment
              <br />
            </span>
            <br />
            <span>
              It&apos;s Safe: Only Verified profiles, authenic
              <br />
              individuals sharing genuine day-to-day routines.
              <br />
            </span>
            <br />
            <span>
              Benefits: Earn money as a host.
              <br />
            </span>
            <br />
            <span>
              Timeline: Miniimum 24 hours. It transcends a<br />
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
