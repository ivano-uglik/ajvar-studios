import Video from "@/app/sections/Video";
import { FaStar } from "react-icons/fa";
import goboVideo from "@/public/gobo-assets/pic_gobo_1.jpg";
import Image from "next/image";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import goboCharacter from "@/public/gobo-assets/gobo-character.png";
export default function VideoFunFacts() {
  const iframe = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/3WGLFuVevIQ?si=pvyVoZ89u9NWD1W6"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="bg-gobo">
      <div className="py-8 lg:py-16 bg-[#01B200] text-white rounded-t-[3rem] lg:rounded-t-[5rem] px-4 lg:px-0">
        <Video video={goboVideo} iframe={iframe} />
        <div className="content-container mx-auto">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="py-16 text-xl text-[# lg:basis-2/3">
              <h1
                className={`${unbounded.className} font-black text-3xl lg:text-5xl pb-12 text-center lg:text-left`}
              >
                What is GoBo?
              </h1>
              <div className="flex flex-col gap-8 font-medium">
                <p>
                  Gobo and the Desert of Cubes is a side-scrolling 2D puzzle
                  platformer.
                </p>
                <p>
                  Reign terror on small monsters, activate magical boxes and
                  carve your path to that mystical door to help GoBo reach the
                  exit door and escape the Desert!
                </p>
                <p>
                  {
                    "Do you think you have what it takes? Don't let the beginning levels trick you, it's not going to be easy, your skills will be put to the test!"
                  }
                </p>
              </div>
            </div>
            <div className="basis-1/2 w-64">
              <Image src={goboCharacter} alt="" className="w-96 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
