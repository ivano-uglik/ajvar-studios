import Video from "@/app/sections/Video";
import { FaStar } from "react-icons/fa";
import BulletsBrainsVideo from "@/public/bulletbrains-assets/pic_bb_2.jpg";
import Image from "next/image";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import BulletBrainsCharacter from "@/public/bulletbrains-assets/bb_side_char_1.png";
export default function VideoFunFacts() {
  const iframe = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/c6cDpJ5qe7w?si=Bfn2C_pcRDchK5VD"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="bg-bullets-brains">
      <div className="py-8 lg:py-16 bg-[#003E44] text-white rounded-t-[3rem] lg:rounded-t-[5rem] px-4 lg:px-0">
        <Video video={BulletsBrainsVideo} iframe={iframe} />
        <div className="content-container mx-auto">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="py-16 text-xl text-[# lg:basis-2/3">
              <h1
                className={`${unbounded.className} font-black text-3xl lg:text-4xl pb-12 text-center lg:text-left`}
              >
                What is Bullets & Brains?
              </h1>
              <div className="flex flex-col gap-8 font-medium">
                <p>
                  {
                    "In Bullets & Brains, you'll find yourself immersed in a sprawling post-apocalyptic environment, teeming with engaging atmosphere and danger at every turn. As one of the last survivors, it's up to you to navigate through the desolate streets, abandoned buildings, grimy alleyways, but also forests, sewers and even snowy mountains, fighting off waves of relentless zombies."
                  }
                </p>
                <p>
                  {
                    "But fear not, for you possess a powerful advantage. Collect brains and energy and keep on leveling up! These items will boost your character's abilities, enabling you to unleash devastating attacks and turn the tide of battle in your favor."
                  }
                </p>
              </div>
            </div>
            <div className="basis-1/2">
              <Image
                src={BulletBrainsCharacter}
                alt=""
                className="w-48 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
