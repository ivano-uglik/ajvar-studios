import Video from "@/app/sections/Video";
import { FaStar } from "react-icons/fa";
import ZombieTowersVideo from "@/public/zombie-towers-assets/pic_zt_3.jpg";
import Image from "next/image";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import ZombieTowersCharacter from "@/public/zombie-towers-assets/zt_side_char_1.png";
export default function VideoFunFacts() {
  const iframe = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/xEPNPShawUI?si=jNe6T16pMGkTPkxq"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="bg-zombie-vs-towers">
      <div className="py-8 lg:py-16 bg-[#246c4a] text-white rounded-t-[3rem] lg:rounded-t-[5rem] px-4 lg:px-0">
        <Video video={ZombieTowersVideo} iframe={iframe} />
        <div className="content-container mx-auto">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="py-16 text-xl text-[# lg:basis-2/3">
              <h1
                className={`${unbounded.className} font-black text-3xl lg:text-4xl pb-12 text-center lg:text-left`}
              >
                What is Zombie Towers?
              </h1>
              <div className="flex flex-col gap-8 font-medium">
                <p>
                  Zombie Towers is the ultimate tower defense game for your
                  mobile platform of choice. The last human outpost has set you
                  up as commander of defense. Build towers and workers and start
                  bringing ammo to the towers so they can shoot down zombies.
                  Use different power-ups to destroy zombies quicker. Merge
                  towers so your towers can shoot with more guns against the
                  raging enemy.
                </p>
                <p>
                  Do not let zombies get inside of the city walls. If they get
                  in town, the city will be doomed. Only problem when fighting
                  the inferior army is the supply of ammo you have.
                </p>
              </div>
            </div>
            <div className="basis-1/2 w-64">
              <Image
                src={ZombieTowersCharacter}
                alt=""
                className="w-96 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
