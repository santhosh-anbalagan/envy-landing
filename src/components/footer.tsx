"use client";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8  bg-envy-green">
      {/* not mobile  */}
      <div className="container mx-auto hidden md:block">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div>
            <Typography
              color="white"
              className="text-center font-normal opacity-75" placeholder={undefined}
            >
              &copy; {CURRENT_YEAR} Made by{" "}
              <a href="#" target="_blank">
                Team Envy
              </a>{" "}&sdot;{" "}
              <a href="/privacy">
                Privacy
              </a>{" "}
              &sdot;{" "}
              <a href="/terms">
                Terms
              </a>
            </Typography>
          </div>

          <div className="flex gap-2">
            <Tooltip content="follow us @envy.lifestyle_official">
              <IconButton placeholder="" variant="text" color="white">
                <a target="_blank" href="https://www.instagram.com/envy.lifestyle_official/?igsh=em85MjRmYWRtNGh0"><i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i></a>
              </IconButton>
            </Tooltip>
          </div>

        </div>
      </div>
      {/* mobile  */}
      <div className="mx-auto w-full md:hidden">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
        </div>
        <div className="mt-16 grid items-center justify-center gap-y-2 border-t border-gray-700 py-7 md:justify-between">
          <div>
            <Typography
              color="white"
              className="text-center font-normal opacity-75" placeholder={undefined}
            >
              &copy; {CURRENT_YEAR} Made by{" "}
              <a href="#" target="_blank">
                Team Envy
              </a>{" "}

            </Typography>
          </div>
          <div className="flex gap-2 justify-center">
            <Typography color="white" className="text-center font-normal opacity-75" placeholder={undefined}>
              <a href="/privacy">
                Privacy
              </a>{" "}
              &sdot;{" "}
              <a href="/terms">
                Terms
              </a>
            </Typography>
          </div>

          <div className="flex gap-2 justify-center">
            <Tooltip content="follow us @envy.lifestyle_official">
              <IconButton placeholder="" variant="text" color="white">
                <a target="_blank" href="https://www.instagram.com/envy.lifestyle_official/?igsh=em85MjRmYWRtNGh0"><i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i></a>
              </IconButton>
            </Tooltip>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
