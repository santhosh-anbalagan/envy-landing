"use client";

import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import React from "react";

function Hero() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }: { target: any }) => { setEmail(target.value) }
  const apiUrl = 'https://api-janite.envy.fun';

  const postCall = () => {
    axios({
      method: 'post',
      url: apiUrl + '/user/app/req',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: email
      }
    }).then(() => {
      setEmail('666%');
    }).catch(() => {
    })
  }
  return (
    <div className="relative  w-full">
      <header className="grid !min-h-[100vh] 2xl:!min-h-[50rem] px-8 bg-envy-green">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 content-between">
          <div className="col-span-1">
            <Typography
              variant="h1"
              color="white"
              className="mb-4"
              placeholder=""
            >
              <div className="grid grid-rows-1 lg:grid-rows-3 lg:grid-flow-col gap-3 row ">
                <div className="row-span-3 text-9xl font-graduate">
                  <Image
                    width={30}
                    height={30}
                    src="/logos/envy-header.svg"
                    alt="team work"
                    className="object-fill min-w-[20rem] min-h-[5rem]"
                  />
                </div>
                <div className="row-span-3 col-span-2 self-center"><sub className="text-4xl font-caveat">
                  a lifestyle ? Try it!
                </sub></div>
                {/* <div className="row-span-2 col-span-2 ...">03</div> */}
              </div>
            </Typography>
            {email != '666%' ?
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
                  onClick={postCall}
                >
                  Request
                </Button>
              </div>
              : (
                <span className="text-white ">
                  <Typography
                    className="text-xl mb-4 flex flex-row flex-wrap items-center font-caveat"
                    variant="paragraph"
                    placeholder={undefined}
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/image/check-envy.svg"
                      alt="team work"
                      className=""
                    />
                    &nbsp;&nbsp;Request Sent Successfully !!!
                  </Typography>

                </span>
              )
            }
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

