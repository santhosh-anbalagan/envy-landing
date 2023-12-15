"use client";

import { Typography } from "@material-tailwind/react";


function When() {
    return (
        <div className="relative w-full">
            <header className="grid !min-h-[35rem] px-8">
                <div className="container mx-auto mt-12 grid h-full w-full  place-items-center ">
                    <Typography variant="h3" placeholder="" className="text-center justify-center">WHEN TO EXPECT IT? EXPECT IT SOON - OUR APP DEVELOPERS ARE CHUGGING <br/> COFFEE AND CODING AT THE SPEED OF `ALMOST THERE`.</Typography>
                </div>
            </header>
            <Typography placeholder={undefined}
                    as="a"
                    href="#"
                    color="blue"
                    className="container mx-auto h-full w-full  place-items-center  font-medium transition-colors hover:text-blue-700"
                  >
                    &nbsp;insert link here

                  </Typography>
        </div>
    );
}
export default When;
