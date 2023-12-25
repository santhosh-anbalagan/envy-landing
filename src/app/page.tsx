// components

// sections
import Expectations from "./expectations";
import Hero from "./hero";
import HowItWorks from "./howitworks";
import VideoIntro from "./video-intro";
import When from "./when";
import Why from "./why";

export default function Campaign() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <VideoIntro />
      <HowItWorks/>
      <Expectations/>
      <Why/>
      <When/>
      {/* <Footer /> */}
    </>
  );
}
