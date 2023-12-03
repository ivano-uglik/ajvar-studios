import Video from "@/app/sections/Video";
import { FaStar } from "react-icons/fa";
import octoVideo from "@/public/octocurse-assets/octo-video.png";
import Image from "next/image";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import octoCharacter from "@/public/octocurse-assets/octo-character.svg";
export default function VideoFunFacts() {
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
    <div className="bg-[#2D7D00]">
      <div className="py-8 lg:py-16 bg-[#C0F504] rounded-t-[3rem] lg:rounded-t-[5rem] px-4 lg:px-0">
        <Video video={octoVideo} iframe={iframe} />
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
                  Octo Curse is an action platformer for iOS and Android devices
                  that follows the story of a pirate who has been turned into an
                  octopus by an evil spirit. The little octopus embarks on the
                  quest to free his friends from the evil spirit, avoiding
                  obstacles, defeating enemies, and collecting coins along the
                  way.
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
                  permutations, because you, their courageous captain, were now
                  a cephalopod too!
                </p>
                <p>
                  {
                    "Of course, any sea skipper worth his salt wouldn’t let a bit of transmutation get him bent out of shape! Avoiding capture, you set on a platform-hopping escapade to save your buddies and make the malicious deity pay for his misdeeds! Put your skills to the test! Evade dastardly traps and defeat hordes of stubborn enemies! Collect crystals and climb the mysterious tower as you get closer and closer to the final showdown! Make your way through the tropical jungle, brave the harsh winter, weather the storm and endure other exciting environs!"
                  }
                </p>
              </div>
            </div>
            <div className="basis-1/2 w-64">
              <Image src={octoCharacter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
