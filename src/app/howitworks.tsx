"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";


function HowItWorks() {
    return (
        <section className="grid !min-h-[55rem] px-8 bg-envy-green">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
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
                <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
                    <Typography variant="h2" className="mb-4 font-graduate text-white" placeholder="">
                        HOW IT WORKS
                    </Typography>
                    <Typography placeholder=""
                        variant="lead"
                        className="mb-5 px-4 text-left text-xl !text-gray-500 lg:px-0 font-caveat"
                        color="black"
                    >
                        <span>Envy is a unique experience-sharing app<br />
                            where individuals auhentically showcase<br />
                            their daily lifestyles. If curiosity beckons,<br />
                            slide to request your host and choose your<br />
                            dates to immerse yourself in the<br />
                            experience!
                        </span>
                    </Typography>

                </div>
            </div>
        </section>
    );
}
export default HowItWorks;