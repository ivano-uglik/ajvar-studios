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
import zombieTowersMain from "@/public/zombie-towers-assets/web_main_zombie_towers.png";
import zombieTowersIcon from "@/public/zombie-towers-assets/icon_small_zombie_towers.png";
export default function GameLayout({ className }: { className?: string }) {
  return (
    <section className={`${className}`}>
      <div className="pt-16 content-container mx-auto">
        <h2
          className={`${unbounded.className} font-black text-2xl lg:text-5xl lg:leading-[1.5] text-ajvar uppercase text-center`}
        >
          Discover our mad Dream of making the World Play!
        </h2>
        <div className="flex justify-center flex-col lg:flex-row lg:gap-8 py-16">
          <div className="basis-1/2 bg-games-gradient p-12 pr-16 rounded-[2rem] pb-32 lg:pb-12">
            <h3
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              Games for everyone
            </h3>
            <p className="text-xl">
              Our games have been published for a wide variety of platforms
              including PlayStation, Nintendo Switch and mobile devices.
            </p>
          </div>
          <div className="basis-1/2 bg-games-gradient p-12 pr-16 rounded-[2rem] pb-32 lg:pb-12">
            <h3
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              3 Games Live
            </h3>
            <p className="text-xl">
              And more incoming. Creating amazing games is our DNA! Come and
              discover our latest games and future releases.
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
              "Bullets and Brains is an adrenaline-pumping arcade top-down 3D shooter set in a post-apocalyptic world overrun by brain-hungry hordes of zombies. Prepare yourself for an intense battle against the never-ending onslaught of the undead."
            }
          </h3>
          <AppStores steam="https://store.steampowered.com/app/2485430/Bullets__Brains/" />
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
            Octo Curse
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "Octo Curse is an action platformer following the story of a pirate captain who has been turned into an octopus by an evil spirit. The little octopus embarks on the quest to save the rest of his crew and reverse the curse."
            }
          </h3>
          <AppStores
            ps="https://store.playstation.com/en-us/product/UP1421-PPSA16192_00-0867477368441243"
            nintendo="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Octo-Curse-2395170.html"
            itch="https://ajvarstudio.itch.io/octo-curse"
          />
        </div>
        <div className="basis-1/2">
          <Image
            src={octoCurseMain}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="OctoCurse Game Layout"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-0 pb-16 content-container mx-auto">
        <div className="basis-1/2">
          <div>
            <Image
              src={zombieTowersIcon}
              alt="Octo Curse logo"
              className="w-32 rounded-xl"
            />
          </div>
          <h2
            className={`${unbounded.className} text-5xl lg:text-[4rem] font-black leading-relaxed text-octocurse`}
          >
            Zombie vs Towers
          </h2>
          <h3 className="pt-4 text-2xl lg:w-3/4">
            {
              "You are the last group of survivors on the planet, and your objective is to defend your castle against the brutal waves of the enemy and take down the zombies army. This is what this addictive tower defense game is all about."
            }
          </h3>
          <AppStores
            apple="https://apps.apple.com/us/app/zombies-vs-towers/id1545660538"
            android="https://play.google.com/store/apps/details?id=com.edenap.z2&hl=en&gl=US"
          />
        </div>
        <div className="basis-1/2">
          <Image
            src={zombieTowersMain}
            className="w-full rounded-t-3xl rounded-b-3xl"
            alt="Zombie vs Towers Game Layout"
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
              "Gobo and the Desert of Cubes is a side-scrolling 2D puzzle platformer. Reign terror on small monsters, activate magical boxes and carve your path to that mystical door to help GoBo reach the exit door and escape the Desert!"
            }
          </h3>
          <AppStores
            itch="https://ajvarstudio.itch.io/gobo-desert-of-cubes"
            behance="https://www.behance.net/gallery/136061821/Gobo-Desert-of-Cubes-Game-Design"
          />
        </div>
      </div>
    </section>
  );
}
