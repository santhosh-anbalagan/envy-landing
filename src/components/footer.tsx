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

        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75" placeholder={undefined} 
          >
            &copy; {CURRENT_YEAR} Made by{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Team Envy
            </a>{" "}
            {/* by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a> */}
          </Typography>
          <Typography
            color="white"
            className="text-center font-normal opacity-75" placeholder={undefined} 
          >
            <a href="https://www.material-tailwind.com" target="_blank">
              Privacy
            </a>{" "}
            &sdot;{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Terms
            </a>
          </Typography>
          

        </div>
      </div>
    </footer>
  );
}

export default Footer;
