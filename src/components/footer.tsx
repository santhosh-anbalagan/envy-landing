"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10  px-8 pt-12" style={{ backgroundColor: "#063233" }}>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h2"
              color="white"
              className="mb-4 text-7xl"
            >
              ENVY
            </Typography>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              PRIVACY POLICY
            </Typography>
            <Typography variant="h6" color="white" className="mb-3">
              TERMS & CONDITIONS
            </Typography>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Envy Team
            </a>{" "}
            {/* by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a> */}
            .
          </Typography>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
