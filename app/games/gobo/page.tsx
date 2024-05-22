import Navbar from "@/app/sections/Navbar";
import Hero from "./sections/GoBo/GoBoHero";

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
    </>
  );
}
