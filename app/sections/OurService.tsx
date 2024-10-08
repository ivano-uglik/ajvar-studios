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
    <section className="bg-[#FFFBF2] pt-16 pb-16 mb-24 rounded-t-3xl lg:rounded-t-[5rem]">
      <div className="content-container mx-auto px-8">
        <div>
          <h1
            className={`${unbounded.className} font-black text-3xl lg:text-5xl text-ajvar text-center uppercase`}
          >
            Our Services
          </h1>
          <p className="text-center lg:text-xl lg:w-1/2 mx-auto pt-4">
            We offer a wide variety of services to meet your needs. Feel free to
            contact us for more information.
          </p>
        </div>
        <div className="flex items-center justify-around flex-wrap md:flex-nowrap gap-8 pt-24 mx-auto pb-16 lg:pb-0">
          {/* {games.map((game, index) => (
            <div key={index} className="xl:w-[36rem] mx-auto">
              <div className="relative w-full hover:scale-110 transition-all duration-100">
                <Link href="#" target="_blank">
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
          ))} */}
          <div className="xl:w-[36rem] mx-auto">
            <h2
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              Game Production
            </h2>
            <p>
              We create engaging and immersive gaming experiences tailored to
              your vision.
            </p>
          </div>
          <div className="xl:w-[36rem] mx-auto">
            <h2
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              Art Direction
            </h2>
            <p>
              Professional art direction services to enhance the visual appeal
              of your projects.
            </p>
          </div>
          <div className="xl:w-[36rem] mx-auto">
            <h2
              className={`${unbounded.className} font-black text-3xl text-ajvar uppercase`}
            >
              UI/UX Design
            </h2>
            <p>
              Specialized UI/UX services to create intuitive and user-friendly
              interfaces for your digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
