import GameLayout from "./GameLayout";
import Hero from "./Hero";
import HorizontalScroll from "./HorizontalScroll";
import News from "./News";
import OurService from "./OurService";
import Video from "./Video";

export default function Home() {
  return (
    <>
      <Video className="px-4 lg:px-0" />
      <Hero className="px-4 lg:px-0" />
      <GameLayout className="px-4 lg:px-0" />
      <OurService className="px-4 lg:px-0" />
      <News className="px-4 lg:px-0" />
      <HorizontalScroll />
    </>
  );
}
