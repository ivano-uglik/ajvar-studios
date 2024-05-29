import Navbar from "@/app/sections/Navbar";
import Hero from "./sections/BulletBrainsHero";
import Video from "./sections/BulletBrainsVideo";
import Grid from "./sections/BulletBrainsGrid";
import Features from "./sections/BulletBrainsFeatures";
import MoreGames from "./sections/BulletBrainsMoreGames";
export default function BulletsBrains() {
  return (
    <>
      <Navbar
        className="px-4 lg:px-0 sticky top-0 z-50"
        active={[{ label: "Bullets & Brains" }]}
      />
      <div className="bg-bullets-brains-showcase">
        <Hero />
      </div>
      {/* <div className="bg-bullets-brains"> */}
      <Video />
      <Grid />
      <Features />
      {/* </div>   */}
      <MoreGames />
    </>
  );
}
