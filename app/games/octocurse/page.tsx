import Hero from "./sections/Hero";
import VideoFunFacts from "./sections/VideoFunFacts";
import Grid from "./sections/Grid";
import WhatDidWeDo from "./sections/WhatDidWeDo";
import FAQ from "./sections/FAQ";
import MoreGames from "./sections/MoreGames";
import Navbar from "@/app/sections/Navbar";

export default function Octocurse() {
  return (
    <>
      <Navbar
        className="px-4 lg:px-0 sticky top-0 z-50"
        prev={[{ label: "Back to Homepage", path: "/" }]}
        active={[{ label: "OctoCurse", path: "/games/octocurse" }]}
        navItems={[
          { label: "Bullet & Brains", path: "/bullet-brains" },
          { label: "GoBo", path: "/gobo" },
          { label: "Blog", path: "/blog" },
        ]}
      />
      <div className="bg-octo-showcase">
        <Hero />
      </div>
      <VideoFunFacts />
      <Grid />
      <WhatDidWeDo />
      <FAQ />
      <MoreGames />
    </>
  );
}
