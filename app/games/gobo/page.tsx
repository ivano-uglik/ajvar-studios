import Navbar from "@/app/sections/Navbar";
import Hero from "./sections/GoBo/GoBoHero";
import Video from "./sections/GoBo/GoBoVideo";
import Grid from "./sections/GoBo/GoBoGrid";
import Features from "./sections/GoBo/GoBoFeatures";
export default function Gobo() {
  return (
    <>
      <Navbar
        className="px-4 lg:px-0 sticky top-0 z-50"
        active={[{ label: "GoBo" }]}
      />
      <div className="bg-gobo-showcase">
        <Hero />
      </div>
      <div className="bg-[#01B200]">
        <Video />
        <Grid />
        <Features />
      </div>
    </>
  );
}
