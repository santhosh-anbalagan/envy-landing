"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";

export function VideoIntro() {
  return (
    <section className="py-5 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography
            variant="h1"
            className="mb-4 font-graduate text-envy-green"
            placeholder=""
          >
            UNVEILING
          </Typography>
          <Typography
            variant="h1"
            className="mb-4 font-graduate text-envy-green"
            placeholder=""
          >
            ENVY
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mb-5 px-4 text-left font-caveat text-xl !text-gray-500 lg:px-0  "
            color="black"
          >
            <span>
              Countless people navigate distict lifestyles,
              <br />
              Have you ever imagined the excitement of <br />
              defining into those unique worlds? Our app <br />
              offers you the chance to step into the shoes of <br />
              a lifestyle you`ve always envied. <br />
            </span>
          </Typography>
        </div>
        <div className="p-8">
          <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl ">
            <video className="h-full w-full rounded-lg" controls autoPlay>
              <source
                src="https://s3.eu-west-2.amazonaws.com/envy.public/media/video/2023-12-24_18_30_12_video.MP4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
