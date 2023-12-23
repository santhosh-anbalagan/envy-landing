// components
import { Footer, Navbar } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import HowItWorks from "./howitworks";
import Expectations from "./expectations";
import Why from "./why";
import When from "./when";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <HowItWorks/>
      <Expectations/>
      <Why/>
      <When/>
      <Footer />
    </>
  );
}
