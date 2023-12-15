"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";

export function VideoIntro() {
  return (
    <section className="py-5 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h1" className="mb-4" placeholder="" style={{ color: '#063233' }}>
            UNVEILING
          </Typography>
          <Typography variant="h1" className="mb-4" placeholder="" style={{ color: '#063233' }}>
            ENVY
          </Typography>
          <Typography placeholder=""
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
            color="black"
          >
            <span>Countless people navigate  distict lifestyles,<br />
              Have you ever imagined the excitement of <br />
              defining into those unique worlds? Our app <br />
              offers you the chance to step into the shoes of <br />
              a lifestyle you`ve always envied. <br />
            </span>
          </Typography>

        </div>
        <div className="p-8">
          <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl ">
            <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
            <Image
              width={900}
              height={600}
              src="/image/Background.png"
              className="w-full object-cover scale-110 rounded-xl h-full"
              alt=""
            />
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
              <IconButton color="white" className="rounded-full" size="lg" placeholder="">
                <PlayIcon className="h-6 w-6" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;