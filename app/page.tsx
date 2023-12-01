import GameLayout from "./sections/GameLayout";
import Hero from "./sections/Hero";
import HorizontalScroll from "./sections/HorizontalScroll";
import Navbar from "./sections/Navbar";
import News from "./sections/News";
import OurService from "./sections/OurService";
import Video from "./sections/Video";

import video from "@/public/video-background.png";

export default function Home() {
  const iframe = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/5dnPigDRtWk?si=YqpCWSF2FjA2UNir"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
  return (
    <>
      <Navbar className="px-4 lg:px-0" />
      <Video className="px-4 lg:px-0" video={video} iframe={iframe} />
      <Hero className="px-4 lg:px-0" />
      <GameLayout className="px-4 lg:px-0" />
      <OurService className="px-4 lg:px-0" />
      <News className="px-4 lg:px-0" />
      <HorizontalScroll />
    </>
  );
}
