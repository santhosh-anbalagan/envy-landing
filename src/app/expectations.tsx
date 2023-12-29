"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
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
      img: "/image/avatar1.jpg",
      title: "SWAP",
      desc: "Choose to swap places and lifestyles with an interested party. Imagine a swap between a farming and a top boy lifestyle",
    },
    {
      img: "/image/avatar1.jpg",
      title: "HOST",
      desc: "Living an envious lifestyle yourself? Share it with others",
    },
    {
      img: "/image/avatar1.jpg",
      title: "LIVE",
      desc: "Travelling for a while and have an empty pad. Curate a lifestyle and earn some cash",
    },
    // Add more image URLs as needed
  ];
  return (
    <section className="grid !min-h-[55rem] px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="col-span-4 mx-auto max-w-lg px-12 lg:px-0">
          <Typography
            variant="h2"
            className="mb-4 text-envy-green font-graduate"
            placeholder=""
          >
            WHAT TO EXPECT
          </Typography>

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {sampleImages.map((image, index) => (
              <div key={index}>
                {/* <img src={image} alt={`Carousel Image ${index + 1}`} /> */}
                <Card className="w-full max-w-[26rem] shadow-lg" placeholder="">
                  <CardHeader floated={false} color="blue-gray" placeholder="">
                    {/* <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt="ui/ux review check"
                            /> */}
                    <Image
                      width={470}
                      height={576}
                      src={image.img}
                      alt="team work"
                      className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  </CardHeader>
                  <CardBody placeholder="">
                    <div className="mb-3 flex items-center justify-between">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-medium text-envy-green font-graduate"
                        placeholder=""
                      >
                        {image.title}
                      </Typography>
                      <span>
                      </span>
                    </div>
                    <Typography className="font-caveat text-xl" placeholder="" color="gray">
                      {image.desc}
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default Expectations;
