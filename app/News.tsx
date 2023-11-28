import octo from "@/public/octo.svg";
import Image from "next/image";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import goboContent from "@/public/gobo-content.svg";
import Button from "./components/Button";

export default function News({ className }: { className?: string }) {
  return (
    <section className="bg-[#FFFBF2] pt-64 lg:pt-[50rem]">
      <div
        className={`relative bg-ajvar w-full rounded-t-3xl lg:rounded-t-[5rem] pb-16 ${className}`}
      >
        <Image
          src={octo}
          className="absolute top-[-17%] lg:top-[-70%] left-[47%] transform-translate-1/2 -translate-x-1/2 w-48 h-48 lg:w-[32rem] lg:h-[32rem] z-30"
          alt=""
          unoptimized
        />
        <div className="absolute top-[-5%] lg:top-[-25%] left-1/4 transform-translate-1/4 -translate-x-1/4 w-48 h-48 lg:w-[32rem] lg:h-[32rem] rounded-full bg-ajvar"></div>
        <div className="absolute top-[-10%] lg:top-[-40%] left-1/2 transform-translate-2/4 -translate-x-2/4 w-48 h-48 lg:w-[32rem] lg:h-[32rem] rounded-full bg-ajvar"></div>
        <div className="absolute top-[-5%] lg:top-[-25%] left-3/4 transform-translate-3/4 -translate-x-3/4 w-48 h-48 lg:w-[32rem] lg:h-[32rem] rounded-full bg-ajvar"></div>
        <div className="content-container mx-auto pt-64 text-white z-40">
          <div className="text-center">
            <h1
              className={`${unbounded.className} font-black text-5xl uppercase`}
            >
              Latest News
            </h1>
            <p className="text-xl lg:w-1/2 mx-auto pt-4">
              Games we did for others. Find your new favorite with these
              exciting and wildly popular games!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row py-16 items-center lg:justify-between gap-32 lg:gap-8">
            <div className="flex flex-col basis-1/2">
              <Image
                src={goboContent}
                className="w-full h-[35vh] object-cover rounded-[5rem]"
                alt=""
                unoptimized
              />
              <h3 className={`${unbounded.className} font-black text-3xl pt-8`}>
                Headline
              </h3>
              <p className="text-xl pt-2">
                Take your champ from zero to hero in this competitive game where
                training is just the beginning! Step up to the challenge and
                play now!
              </p>
            </div>
            <div className="flex flex-col basis-1/2">
              <Image
                src={goboContent}
                className="w-full h-[35vh] object-cover rounded-[5rem]"
                alt=""
                unoptimized
              />
              <h3 className={`${unbounded.className} font-black text-3xl pt-8`}>
                Headline
              </h3>
              <p className="text-xl pt-2">
                Take your champ from zero to hero in this competitive game where
                training is just the beginning! Step up to the challenge and
                play now!
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              text="Read on Our Blog"
              bg="bg-white"
              textColor="text-ajvar"
              px="px-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
