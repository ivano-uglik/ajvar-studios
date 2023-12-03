import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import Image from "next/image";

import octoCurseMain from "@/public/octocurse-assets/octo-main.webp";
import octoCurseIcon from "@/public/octocurse-assets/octo-icon.webp";
import goboMain from "@/public/gobo-assets/gobo-main.webp";
import goboIcon from "@/public/gobo-assets/gobo-icon.webp";
import bulletBrainsMain from "@/public/bulletbrains-assets/bb-main.webp";
import bulletBrainsIcon from "@/public/bulletbrains-assets/bb-icon.webp";
import AppStores from "../components/AppStores";

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
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-0 py-16 content-container mx-auto">
        <div className="basis-1/2 lg:pt-16">
          <div>
            <Image
              src={bulletBrainsIcon}
              alt="Bullet & Brains logo"
              className="w-32 rounded-xl"
            />
          </div>
          <h2
            className={`${unbounded.className} text-3xl lg:text-5xl font-black leading-relaxed`}
          >
            Bullet & Brains
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!"
            }
          </h3>
          <AppStores android="#" apple="#" />
        </div>
        <div className="basis-1/2">
          <Image
            src={bulletBrainsMain}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="Bullet & Brains Game Layout"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-0 pb-16 content-container mx-auto">
        <div className="basis-1/2">
          <div>
            <Image
              src={octoCurseIcon}
              alt="Octo Curse logo"
              className="w-32 rounded-xl"
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
          <AppStores android="#" apple="#" />
        </div>
        <div className="basis-1/2">
          <Image
            src={octoCurseMain}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="OctoCurse Game Layout"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-16 py-16 content-container mx-auto">
        <div className="basis-1/2">
          <Image
            src={goboMain}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="GoBo Game Layout"
          />
        </div>
        <div className="basis-1/2 lg:pt-16">
          <div>
            <Image src={goboIcon} alt="GoBo logo" className="w-32 rounded-xl" />
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
          <AppStores android="#" apple="#" />
        </div>
      </div>
    </section>
  );
}
