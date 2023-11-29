import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import octo from "@/public/octocurse-octo.svg";
import Image from "next/image";
import AppStores from "@/app/components/AppStores";
import Video from "@/app/Video";
import { FaStar } from "react-icons/fa";
import character from "@/public/octo-character.svg";

import grid1 from "@/public/octocurse-grid-1.png";
import grid2 from "@/public/octocurse-grid-2.png";
import grid3 from "@/public/octocurse-grid-3.png";
import grid4 from "@/public/octocurse-grid-4.png";

export default function Octocurse() {
  return (
    <section>
      <div className="text-white">
        <div className="bg-octo-showcase">
          <div className="bg-green">
            <Image src={octo} alt="" className="mx-auto py-24 w-[50rem]" />
            <div className="text-center mx-auto content-container py-24 px-4 lg:px-0">
              <h1
                className={`${unbounded.className} font-black text-3xl lg:text-5xl uppercase leading-[1.5] overflow-x-clip`}
              >
                Octocurse is the Ultimate Platformer Game
              </h1>
              <h3 className="w-1/2 mx-auto pt-4">
                Ajvar turns childhood memories into games for everyone, offering
                entertainment that makes every moment fun!
              </h3>
              <div className="flex justify-center">
                <AppStores android="#" apple="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2D7D00]">
        <div className="py-8 lg:py-16 bg-[#C0F504] rounded-t-[3rem] lg:rounded-t-[5rem] px-4 lg:px-0">
          <Video />
          <div className="content-container mx-auto">
            <h3
              className={`${unbounded.className} font-black text-3xl text-center uppercase`}
            >
              Fun Facts
            </h3>
            <div className="flex gap-4 sm:gap-8 justify-center items-center py-8 flex-row">
              <div className="flex flex-col items-center justify-center p-6 bg-[#D9F968] rounded-3xl">
                <h2
                  className={`${unbounded.className} font-black text-3xl sm:text-5xl`}
                >
                  123m
                </h2>
                <h3 className="text-lg sm:text-xl">Downloads</h3>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-8 bg-[#D9F968] rounded-3xl">
                <h2
                  className={`${unbounded.className} font-black text-3xl sm:text-5xl flex items-center gap-2`}
                >
                  <FaStar size={20} /> 4.7
                </h2>
                <h3 className="sm:text-lg">App Store Rating</h3>
              </div>
            </div>
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="py-16 text-xl text-[#2F3632] lg:basis-2/3">
                <h1
                  className={`${unbounded.className} font-black text-3xl lg:text-5xl pb-12 text-center lg:text-left`}
                >
                  What is OctoCurse?
                </h1>
                <div className="flex flex-col gap-8 font-medium">
                  <p>
                    Octo Curse is an action platformer for iOS and Android
                    devices that follows the story of a pirate who has been
                    turned into an octopus by an evil spirit. The little octopus
                    embarks on the quest to free his friends from the evil
                    spirit, avoiding obstacles, defeating enemies, and
                    collecting coins along the way.
                  </p>
                  <p>
                    While exploring the Seven Seas in search of legendary loot,
                    tremendous treasure and bountiful booty, your merry band of
                    pirates happened upon a mysterious octopus-shaped island. As
                    these things go, the island was cursed — but little did you
                    know that a similar fate would soon befall your plundering
                    party as well! The evil god of the island turned your whole
                    pirate crew into octopuses and captured them! Or was it
                    octopi? There was no time to ponder proper plural
                    permutations, because you, their courageous captain, were
                    now a cephalopod too!
                  </p>
                  <p>
                    {
                      "Of course, any sea skipper worth his salt wouldn’t let a bit of transmutation get him bent out of shape! Avoiding capture, you set on a platform-hopping escapade to save your buddies and make the malicious deity pay for his misdeeds! Put your skills to the test! Evade dastardly traps and defeat hordes of stubborn enemies! Collect crystals and climb the mysterious tower as you get closer and closer to the final showdown! Make your way through the tropical jungle, brave the harsh winter, weather the storm and endure other exciting environs!"
                    }
                  </p>
                </div>
              </div>
              <div className="basis-1/2 w-64">
                <Image src={character} alt="" unoptimized />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="grid grid-cols-2 grid-rows-3 content-container mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-16 px-4 lg:px-0">
            <Image
              src={grid1}
              alt="OctoCurse gameplay"
              placeholder="blur"
              className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
            />
            <Image
              src={grid2}
              alt="OctoCurse gameplay"
              placeholder="blur"
              className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
            />
            <Image
              src={grid3}
              alt="OctoCurse gameplay"
              placeholder="blur"
              className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
            />
            <Image
              src={grid4}
              alt="OctoCurse gameplay"
              placeholder="blur"
              className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
