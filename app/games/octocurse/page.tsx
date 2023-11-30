"use client";

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

import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function Octocurse() {
  const sections = [
    {
      title: "Art",
      items: [
        "As a full remaster, Blind Squirrel re-authored key visual effects and added new post-processing elements to push visuals",
        "Handled asset remastering",
        "Environment art",
        "UX/UI design",
        "Character art",
        "Lighting",
        "VFX",
      ],
    },
    {
      title: "Design",
      items: [
        "Blind Squirrel and SEGA developed new major gameplay features, including designing and implementing the new Wisp power feature.",
        "Park Token system for unlockable customization ",
        "Re-balanced boss fights",
        "Removal of “lives” and replacement with “Tails save” system",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Original engine port to 64-bit and integration into Blind Squirrel's “Xerus” Engine",
        "Data extraction and recreation with no editor/tool access",
        "Support for the original and remastered game data",
        "Memory and performance optimization",
        "PS5 and Xbox Series S|X backwards compatibility bug fixes",
        "Platform support for Switch, PS4, X1, and Epic Games Store",
        "4K resolution support",
        "Gameplay quality of life improvements",
      ],
    },
  ];

  const faqData = [
    {
      title: "FAQ Headline 1",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
    {
      title: "FAQ Headline 2",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
    {
      title: "FAQ Headline 3",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
    {
      title: "FAQ Headline 4",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
    {
      title: "FAQ Headline 5",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
    {
      title: "FAQ Headline 6",
      content:
        "Take your champ from zero to hero in this competitive game where the training is just the beginning! Step up to the challenge and play now!",
    },
  ];

  const [active, setActive] = useState(-1);
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
          <div className="content-container mx-auto px-4 lg:px-0">
            <div className="text-center flex flex-col gap-4 py-8 lg:py-16">
              <h2
                className={`${unbounded.className} font-black text-ajvar text-3xl lg:text-5xl uppercase`}
              >
                What did we do?
              </h2>
              <p className="lg:w-1/2 mx-auto lg:text-xl">
                Games we did for others. Find your new favorite with these
                exciting and wildly popular games!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between py-16"
                >
                  <h3
                    className={`${unbounded.className} font-black text-2xl text-ajvar uppercase lg:basis-1/2 text-center lg:text-left pb-4 lg:pb-0`}
                  >
                    {section.title}
                  </h3>
                  <ul className="list-disc text-xl flex flex-col gap-1 lg:basis-1/2 pl-5 lg:pl-0 font-medium">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="content-container mx-auto px-4 lg:px-0 py-24">
            <div className="text-center flex flex-col gap-4">
              <h2
                className={`${unbounded.className} font-black text-5xl text-ajvar`}
              >
                FAQ
              </h2>
              <p className="lg:w-1/2 mx-auto text-xl">
                Games we did for others. Find your new favorite with these
                exciting and wildly popular games!
              </p>
            </div>
            <div className="flex justify-between items-start py-16 flex-wrap gap-y-8">
              {faqData.map((faq, index) => (
                <button
                  key={index}
                  className={`px-5 py-4 border border-gray-200 shadow-md w-full lg:basis-[48%] rounded-[1.8rem] ${
                    active == index ? "bg-[#FBFBFB]" : ""
                  }`}
                  onClick={(e) => {
                    active == index
                      ? (setActive(-1), console.log(index))
                      : (setActive(index), console.log(index));
                  }}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`${unbounded.className} font-black text-2xl text-ajvar`}
                    >
                      {faq.title}
                    </h3>
                    <FaAngleDown size="40" color="#E41943" />
                  </div>
                  <p
                    className={
                      active == index ? "text-left text-xl pt-4" : "hidden"
                    }
                  >
                    {faq.content}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
