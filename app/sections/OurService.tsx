import { Unbounded } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import goboIcon from "@/public/gobo-assets/gobo-icon.webp";
import goboContent from "@/public/gobo-assets/gobo-content-1.webp";
import AppStores from "../components/AppStores";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function OurService({ className }: { className?: string }) {
  const games = [
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboIcon,
      content: goboContent,
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboIcon,
      content: goboContent,
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboIcon,
      content: goboContent,
      appStoreLink: "#",
      playStoreLink: "#",
    },
  ];

  return (
    <section className="bg-[#FFFBF2] py-16 lg:py-24 rounded-t-3xl lg:rounded-t-[5rem]">
      <div className="content-container mx-auto">
        <div>
          <h1
            className={`${unbounded.className} font-black text-3xl lg:text-5xl text-ajvar text-center uppercase`}
          >
            Our Service
          </h1>
          <p className="text-center lg:text-xl lg:w-1/2 mx-auto pt-4">
            Games we did for others. Find your new favorite with these exciting
            and wildly popular games!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-around flex-wrap gap-8 pt-24">
          {games.map((game, index) => (
            <div key={index} className="w-[20rem]">
              <div className="relative w-full hover:scale-110 transition-all duration-100">
                <Link href="#">
                  <Image
                    src={game.content}
                    alt={game.name}
                    className="rounded-[3rem] mb-12 w-full h-72 object-cover"
                    unoptimized
                  />
                  <Image
                    src={game.logo}
                    alt={`${game.name} logo`}
                    className="w-32 absolute -bottom-8 left-8"
                    unoptimized
                  />
                </Link>
              </div>
              <div>
                <h2
                  className={`${unbounded.className} font-black text-5xl text-gobo`}
                >
                  {game.name}
                </h2>
                <p className="pt-4 text-xl">{game.description}</p>
              </div>
              <AppStores
                android={game.playStoreLink}
                apple={game.appStoreLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
