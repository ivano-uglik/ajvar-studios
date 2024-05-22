import Hero from "./sections/OctoCurse/OctoCurseHero";
import VideoFunFacts from "./sections/OctoCurse/OctoCurseVideoFunFacts";
import Grid from "./sections/Grid";
import WhatDidWeDo from "./sections/OctoCurse/OctoCurseWhatDidWeDo";
import FAQ from "./sections/OctoCurse/OctoCurseFAQ";
import MoreGames from "./sections/OctoCurse/OctoCurseMoreGames";
import Navbar from "@/app/sections/Navbar";
import Features from "./sections/OctoCurse/OctoCurseFeatures";

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
