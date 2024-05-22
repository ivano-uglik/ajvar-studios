"use client";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(-1);

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
  return (
    <div className="content-container mx-auto px-4 lg:px-0 py-24">
      <div className="text-center flex flex-col gap-4">
        <h2 className={`${unbounded.className} font-black text-5xl text-ajvar`}>
          FAQ
        </h2>
        <p className="lg:w-1/2 mx-auto text-xl">
          Games we did for others. Find your new favorite with these exciting
          and wildly popular games!
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
              {active == index ? (
                <FaAngleUp size="40" color="#E41943" />
              ) : (
                <FaAngleDown size="40" color="#E41943" />
              )}
            </div>
            <p
              className={active == index ? "text-left text-xl pt-4" : "hidden"}
            >
              {faq.content}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
