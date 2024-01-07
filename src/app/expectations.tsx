"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
function Expectations() {
  const sampleImages = [
    {
      title: "HOST",
      desc: "Privileged with an enviable lifestyle? Let others in on the excitement!",
      src: "https://s3.eu-west-2.amazonaws.com/envy.public/media/video/Yoga+-+Host+Pref1.mp4"
    },
    {
      title: "LIVE",
      desc: "Jet-setting for a while with an empty abode? Curate a personalized lifestyle for someone while you're not around.",
      src: "https://s3.eu-west-2.amazonaws.com/envy.public/media/video/pexels-c-technical-6686153+(Original).mp4"
    },
    {
      title: "SWAP",
      desc: "Choose to trade places and experiences with someone intrigued. Envision the contrast of a rustic farming routine to the pulsating energy of a cosmopolitan lifestyle.",
      src: "https://s3.eu-west-2.amazonaws.com/envy.public/media/video/Swap+-+first+15+sec.mp4"
    },
    // Add more image URLs as needed
  ];
  return (
    <section className="grid min-h-[30rem] lg:min-h-[46rem] px-2 lg:px-8 mb-10 sm:mb-0">
      <Typography
        variant="h1"
        className="px-3 lg:px-0 mb-4 font-graduate text-envy-green my-12 lg:my-0 flex content-between flex-col-reverse justify-between items-center py-5"
        placeholder=""
      >
        WHAT TO EXPECT
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-max lg:max-w-7xl mx-auto items-center mb-5">
        {sampleImages.map((image, index) => (
          <div key={index}>
            <Card placeholder="" className="shadow-none lg:shadow-lg">
              <CardHeader floated={false} placeholder="">
                <video
                className="object-fill rounded-lg min-h-[17rem] lg:min-h-[43rem]"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src={image.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody placeholder="" className=" min-h-[18rem]">
                <div className="mb-3 flex items-center justify-between ">
                  <Typography
                    variant="h3"
                    className="font-graduate text-envy-green"
                    placeholder=""
                  >
                    {image.title}
                  </Typography>
                  <span></span>
                </div>
                <Typography
                  placeholder=""
                  color="gray"
                  className="!text-gray-500  text-2xl font-caveat text-justify"
                >
                  {image.desc}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Expectations;
