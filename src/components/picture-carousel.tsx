"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

function PictureCarousel() {
    const sampleImages = [
        {
            src: "/image/tbd.jpg"
        },
        {
            src: "/image/tbd1.jpg"
        },
        {
            src: "/image/tbd2.jpg"
        },
        {
            src: "/image/tbd3.jpg"
        },
        {
            src: "/image/tbd4.jpg"
        },
        {
            src: "/image/tbd5.jpg"
        },
        {
            src: "/image/tbd6.jpg"
        },
        {
            src: "/image/tbd7.jpg"
        }
    ];

    return (
        <Carousel placeholder="" transition={{ duration: 1 }} autoplay autoplayDelay={3000} loop
            navigation={({ }) => (
                <div />
            )}
            prevArrow={({ }) => (
                <div />
            )}
            nextArrow={({ }) => (
                <div />
            )}
            className="rounded-xl">
            {sampleImages.map((image, index) => (
                <img key={index}
                    src={image.src}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            ))}
        </Carousel>
    );
}
export default PictureCarousel;