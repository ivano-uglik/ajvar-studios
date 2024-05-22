import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function WhatDidWeDo() {
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

  return (
    <div className="content-container mx-auto px-4 lg:px-0">
      <div className="text-center flex flex-col gap-4 py-8 lg:py-16">
        <h2
          className={`${unbounded.className} font-black text-ajvar text-3xl lg:text-5xl uppercase`}
        >
          What did we do?
        </h2>
        <p className="lg:w-1/2 mx-auto lg:text-xl">
          Games we did for others. Find your new favorite with these exciting
          and wildly popular games!
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
  );
}
