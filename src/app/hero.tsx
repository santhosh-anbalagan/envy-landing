"use client";

import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function Hero() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }: { target: any }) => setEmail(target.value);

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[100vh] px-8 bg-envy-green">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              color="white"
              className="mb-4"
              placeholder=""
            >
              <div className="text-9xl font-graduate">
                ENVY
                <sub className="text-2xl font-caveat">
                  a lifestyle ? Try it!
                </sub>
              </div>
            </Typography>
            <div className="w-full mb-3 !text-white  relative flex max-w-[24rem]">
              <Input
                type="email"
                color="white"
                label="Email Address"
                onChange={onChange}
                crossOrigin={undefined}
              />
              <Button
                size="sm"
                color={email ? "pink" : "blue-gray"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded"
                placeholder={undefined}
              >
                Request
              </Button>
            </div>
            <Typography
              color="white"
              className="text-xs mb-4"
              placeholder={undefined}
            >
              <span className="flex">
                By requesting, you agree with Envy&apos;s
                <Typography
                  placeholder={undefined}
                  as="a"
                  href="/terms"
                  color="blue"
                  className="text-xs transition-colors hover:text-blue-700"
                >
                  &nbsp;Terms &#38;
                </Typography>
                <Typography
                  placeholder={undefined}
                  as="a"
                  href="/privacy"
                  color="blue"
                  className="text-xs transition-colors hover:text-blue-700"
                >
                  &nbsp;Privacy
                </Typography>
              </span>
            </Typography>
            {/* </Typography> */}
            <Typography
              className="mb-4"
              color="white"
              variant="h6"
              placeholder=""
            >
              Share your email with us to unlock a world of new experiences!
              <br /> Sign up now to be among the first to be notified and become
              a trendsetter!
            </Typography>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="cursor-pointer col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
    </div>
  );
}
export default Hero;
