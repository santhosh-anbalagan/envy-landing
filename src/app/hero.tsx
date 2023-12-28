"use client";

import { Checkbox, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[100vh] px-8 bg-envy-green">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4" placeholder="">
              <div className="text-9xl font-graduate">ENVY<sub className="text-2xl font-caveat">a lifestyle ? Try it!</sub></div>
            </Typography>
            <div className="w-100 mb-7 !text-white md:pr-16 xl:pr-28">
              <Input type="email" color="white" label="Email Address" crossOrigin={undefined} />
            </div>
            {/* </Typography> */}
            <Typography className="mb-4" color="white" variant="h6" placeholder="">
              Share your email with us to unlock a world of new experiences!<br /> Sign up now to  be among the first to be notified and become a trendsetter!
            </Typography>

            <Typography color="white" className="font-medium" placeholder={undefined}>
                <span className="flex">
                  By requesting, you agree with Envy&apos;s 
                  <Typography placeholder={undefined}
                    as="a"
                    href="/terms"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                    &nbsp;Terms &#38;
                  </Typography>
                  <Typography placeholder={undefined}
                    as="a"
                    href="/privacy"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                   &nbsp; Privacy

                  </Typography>
                </span>
              </Typography>
            {/* <Checkbox
              label={<Typography color="white" className="font-medium" placeholder={undefined}>
                <span className="flex">
                  I accept the
                  <Typography placeholder={undefined}
                    as="a"
                    href="#"
                    color="blue"
                    className="font-medium transition-colors hover:text-blue-700"
                  >
                    &nbsp;marketing policy

                  </Typography>
                </span>
                (you will be notified about all the updates regarding the launch)
              </Typography>} crossOrigin={undefined} /> */}
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
