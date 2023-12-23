"use client";

import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Image from "next/image";
import 'react-multi-carousel/lib/styles.css';

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
        '/image/avatar1.jpg',
        '/image/avatar2.jpg',
        '/image/avatar3.jpg',
        // Add more image URLs as needed
    ];
    return (
        <section className="grid !min-h-[55rem] px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
                    <Typography variant="h2" className="mb-4 text-envy-green font-graduate" placeholder="">
                        WHAT TO EXPECT               
                    </Typography>
                    <Typography placeholder=""
                        variant="lead"
                        className="mb-5 px-4 text-left text-xl !text-gray-500 lg:px-0 font-caveat"
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
                            src="/image/avatar1.jpg"
                            className="w-full object-cover scale-110 rounded-xl h-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Expectations;
