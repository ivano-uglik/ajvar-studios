import { Unbounded } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import goboLogo from "@/public/gobologo.svg";
import goboContent from "@/public/gobo-content.svg";
import apple from "@/public/apple.svg";
import android from "@/public/android.svg";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function OurService({ className }: { className?: string }) {
  const games = [
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboLogo,
      content: goboContent,
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboLogo,
      content: goboContent,
      appStoreLink: "#",
      playStoreLink: "#",
    },
    {
      name: "GoBo",
      description:
        "Take your champ from zero to hero in this competitive game where training is just the beginning! Step up to the challenge and play now!",
      logo: goboLogo,
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
              <div className="relative w-full">
                <Image
                  src={game.content}
                  alt={game.name}
                  className="mb-12 w-full"
                  unoptimized
                />
                <Image
                  src={game.logo}
                  alt={`${game.name} logo`}
                  className="border-8 border-white rounded-xl absolute -bottom-8 left-8"
                  unoptimized
                />
              </div>
              <div>
                <h2
                  className={`${unbounded.className} font-black text-5xl text-gobo`}
                >
                  {game.name}
                </h2>
                <p className="pt-4 text-xl">{game.description}</p>
              </div>
              <div className="flex gap-8 py-8">
                <Link
                  href={game.appStoreLink}
                  className="p-4 rounded-full aspect-square shadow-lg bg-white"
                >
                  <Image
                    src={apple}
                    alt={`Go to ${game.name} App store`}
                    unoptimized
                  />
                </Link>
                <Link
                  href={game.playStoreLink}
                  className="p-4 rounded-full aspect-square shadow-lg bg-white"
                >
                  <Image
                    src={android}
                    alt={`Go to ${game.name} Google Play store`}
                    unoptimized
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
