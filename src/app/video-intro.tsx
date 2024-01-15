"use client";

import { Typography } from "@material-tailwind/react";

export function VideoIntro() {
  return (
    <section className="grid min-h-[30rem] lg:min-h-[46rem] px-2 lg:px-8 mb-10 sm:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-max lg:max-w-8xl mx-auto items-center">
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography
            variant="h1"
            className="mb-4 font-graduate text-envy-green"
            placeholder=""
          >
            UNVEILING ENVY
          </Typography>
          <Typography
            placeholder=""
            variant="paragraph"
            className="mb-5 text-justify px-4 font-caveat text-3xl !text-gray-500 lg:px-0"
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
            <video className="h-[40rem] w-full rounded-lg object-cover" controls autoPlay loop>
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
