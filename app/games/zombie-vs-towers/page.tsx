import Navbar from "@/app/sections/Navbar";
import Hero from "./sections/ZombieTowersHero";
import Video from "./sections/ZombieTowersVideo";
import Grid from "./sections/ZombieTowersGrid";
import Features from "./sections/ZombieTowersFeatures";
import MoreGames from "./sections/ZombieTowersMoreGames";
export default function ZombieVsTowers() {
  return (
    <>
      <Navbar
        className="px-4 lg:px-0 sticky top-0 z-50"
        active={[{ label: "Zombies vs Towers" }]}
      />
      <div className="bg-zombie-vs-towers-showcase">
        <Hero />
      </div>
      {/* <div className="bg-[#246c4a]"> */}
      <Video />
      <Grid />
      <Features />
      {/* </div> */}
      <MoreGames />
    </>
  );
}
