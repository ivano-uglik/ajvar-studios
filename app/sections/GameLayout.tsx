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
import Link from "next/link";
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
              Creating fun is in our DNA! Our games are engineered to spread fun
              and excitement. Check our in-gen-ious releases and future plans.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-0 py-16 content-container mx-auto">
        <div className="basis-1/2 lg:pt-16">
          <Link href={"games/bullet-brains"}>
            <div>
              <Image
                src={bulletBrainsIcon}
                alt="Bullets & Brains logo"
                className="w-32 rounded-xl"
              />
            </div>
            <h2
              className={`${unbounded.className} text-3xl lg:text-5xl font-black leading-relaxed`}
            >
              Bullets & Brains
            </h2>
            <h3 className="pt-4 text-2xl lg:w-3/4">
              {
                "Adrenaline-pumping top-down 3D shooter set in a zombie-infested post-apocalyptic world."
              }
            </h3>
          </Link>
          <AppStores steam="https://store.steampowered.com/app/2485430/Bullets__Brains/" />
        </div>
        <div className="basis-1/2">
          <Link href={"games/bullet-brains"}>
            <Image
              src={bulletBrainsMain}
              className="w-full rounded-t-3xl rounded-b-3xl"
              alt="Bullet & Brains Game Layout"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-16 py-16 content-container mx-auto">
        <div className="basis-1/2">
          <Link href={"games/octocurse"}>
            <Image
              src={octoCurseMain}
              className="w-full rounded-t-3xl rounded-b-3xl"
              alt="OctoCurse Game Layout"
            />
          </Link>
        </div>
        <div className="basis-1/2">
          <Link href={"games/octocurse"}>
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
                "Action platformer following a pirate captain turned into an octopus."
              }
            </h3>
          </Link>
          <AppStores
            ps="https://store.playstation.com/en-us/product/UP1421-PPSA16192_00-0867477368441243"
            nintendo="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Octo-Curse-2395170.html"
            itch="https://ajvarstudio.itch.io/octo-curse"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-0 pb-16 content-container mx-auto">
        <div className="basis-1/2">
          <Link href={"games/zombie-vs-towers"}>
            <div>
              <Image
                src={zombieTowersIcon}
                alt="Octo Curse logo"
                className="w-32 rounded-xl"
              />
            </div>
            <h2
              className={`${unbounded.className} text-5xl lg:text-[4rem] font-black leading-relaxed text-zombie-vs-towers`}
            >
              Zombies vs Towers
            </h2>
            <h3 className="pt-4 text-2xl lg:w-3/4">
              {
                "Tower defense game featuring last survivors defending their castles against the zombies’ army."
              }
            </h3>
          </Link>
          <AppStores
            apple="https://apps.apple.com/us/app/zombies-vs-towers/id1545660538"
            android="https://play.google.com/store/apps/details?id=com.edenap.z2&hl=en&gl=US"
          />
        </div>
        <div className="basis-1/2">
          <Link href={"games/zombie-vs-towers"}>
            <Image
              src={zombieTowersMain}
              className="w-full rounded-t-3xl rounded-b-3xl"
              alt="Zombies vs Towers Game Layout"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-16 py-16 pb-32 content-container mx-auto">
        <div className="basis-1/2">
          <Link href={"games/gobo"}>
            <Image
              src={goboMain}
              className="w-full rounded-t-3xl rounded-b-3xl"
              alt="GoBo Game Layout"
            />
          </Link>
        </div>
        <div className="basis-1/2 lg:pt-16">
          <Link href={"games/gobo"}>
            <div>
              <Image
                src={goboIcon}
                alt="GoBo logo"
                className="w-32 rounded-xl"
              />
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
          </Link>
          <AppStores
            itch="https://ajvarstudio.itch.io/gobo-desert-of-cubes"
            behance="https://www.behance.net/gallery/136061821/Gobo-Desert-of-Cubes-Game-Design"
          />
        </div>
      </div>
    </section>
  );
}
