import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";

import octocurseGameLayout from "@/public/octocurse-gamelayout.png";
import octocurseLogo from "@/public/octocurse-logo.svg";
import goboGameLayout from "@/public/gobo-gamelayout.png";
import goboLogo from "@/public/gobologo.svg";
import bulletbrainsGameLayout from "@/public/bulletbrainsgamelayout.png";
import bulletbrainsLogo from "@/public/bulletbrainslogo.svg";

import apple from "@/public/apple.svg";
import android from "@/public/android.svg";

export default function GameLayout({ className }: { className?: string }) {
  return (
    <section className={`${className}`}>
      <div className="pt-16 content-container mx-auto">
        <h2
          className={`${unbounded.className} font-black text-2xl lg:text-5xl lg:leading-[1.5] text-ajvar uppercase text-center`}
        >
          Discover our mad Dream of making the World Play!
        </h2>
        <div className="flex justify-center py-8">
          <h3 className="text-xl text-center lg:w-1/3">
            Besides helping other companies and studios with game design
          </h3>
        </div>
        <div className="flex justify-center flex-col lg:flex-row lg:gap-8 py-16">
          <div className="basis-1/2 bg-games-gradient p-12 pr-16 rounded-[2rem] pb-32 lg:pb-12">
            <h3
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              +100M Downloads
            </h3>
            <p className="text-xl">
              We are at the beginning of our mission to deliver fun and over 400
              million players have already joined us.
            </p>
          </div>
          <div className="basis-1/2 bg-games-gradient p-12 pr-16 rounded-[2rem] pb-32 lg:pb-12">
            <h3
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              3 Games Live
            </h3>
            <p className="text-xl">
              Creating amazing games is our DNA! Come and discover our latest
              games and future releases.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-0 pb-16 content-container mx-auto">
        <div className="basis-1/2">
          <div>
            <Image
              src={octocurseLogo}
              alt="Octo Curse logo"
              className="rounded-xl"
              unoptimized
            />
          </div>
          <h2
            className={`${unbounded.className} text-5xl lg:text-[4rem] font-black leading-relaxed text-octocurse`}
          >
            OctoCurse
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!"
            }
          </h3>
          <div className="flex gap-8 py-8">
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={apple} alt="Go to App store" unoptimized />
            </Link>
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={android} alt="Go to Google Play store" unoptimized />
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src={octocurseGameLayout}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="Tablet screen displaying Gimme App"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-16 py-16 content-container mx-auto">
        <div className="basis-1/2">
          <Image
            src={goboGameLayout}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="Tablet screen displaying Gimme App"
            unoptimized
          />
        </div>
        <div className="basis-1/2 lg:pt-16">
          <div>
            <Image
              src={goboLogo}
              alt="GoBo logo"
              className="rounded-xl"
              unoptimized
            />
          </div>
          <h2
            className={`${unbounded.className} text-[4rem] font-black leading-relaxed text-gobo`}
          >
            GoBo
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!"
            }
          </h3>
          <div className="flex gap-8 py-8">
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={apple} alt="Go to App store" unoptimized />
            </Link>
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={android} alt="Go to Google Play store" unoptimized />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-0 py-16 content-container mx-auto">
        <div className="basis-1/2 lg:pt-16">
          <div>
            <Image
              src={bulletbrainsLogo}
              alt="Bullet & Brains logo"
              className="rounded-xl"
              unoptimized
            />
          </div>
          <h2
            className={`${unbounded.className} text-5xl lg:text-[4rem] font-black leading-relaxed`}
          >
            OctoCurse
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!"
            }
          </h3>
          <div className="flex gap-8 py-8">
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={apple} alt="Go to App store" unoptimized />
            </Link>
            <Link
              href="#"
              className="p-4 rounded-full aspect-square shadow-lg bg-white"
            >
              <Image src={android} alt="Go to Google Play store" unoptimized />
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src={bulletbrainsGameLayout}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="Tablet screen displaying Gimme App"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
