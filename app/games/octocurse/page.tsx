import Hero from "./sections/Hero";
import VideoFunFacts from "./sections/VideoFunFacts";
import Grid from "./sections/Grid";
import WhatDidWeDo from "./sections/WhatDidWeDo";
import FAQ from "./sections/FAQ";
import MoreGames from "./sections/MoreGames";
import Navbar from "@/app/sections/Navbar";
import Features from "./sections/OctoCurseFeatures";

export default function Octocurse() {
  return (
    <>
      <Navbar
        className="px-4 lg:px-0 sticky top-0 z-50"
        active={[{ label: "Octo Curse" }]}
      />
      <div className="bg-octo-showcase">
        <Hero />
      </div>
      <VideoFunFacts />
      <Grid />
      <Features />
      {/* <WhatDidWeDo /> */}
      {/* <FAQ /> */}
      <MoreGames />
    </>
  );
}
