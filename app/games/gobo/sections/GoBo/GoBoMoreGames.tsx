import Image from "next/image";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import Button from "@/app/components/Button";
import bulletBrainsText from "@/public/bulletbrains-assets/bb-text.webp";
import bulletBrainsBackground from "@/public/bulletbrains-assets/bb-bg-1.webp";
import Video from "@/app/sections/Video";
export default function MoreGames({ className }: { className?: string }) {
  const iframe = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube-nocookie.com/embed/c6cDpJ5qe7w?si=Bfn2C_pcRDchK5VD"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
  return (
    <section className="md:pt-[10vh] lg:pt-[40vh] mt-32">
      <div
        className={`relative bg-[#7BBBC4] w-full rounded-t-3xl lg:rounded-t-[5rem] pb-16 ${className}`}
      >
        <Image
          src={bulletBrainsText}
          className="absolute top-[-15vw] left-[50%] transform-translate-1/2 -translate-x-1/2 w-[35vw] z-30"
          alt=""
          unoptimized
        />
        <div className="absolute top-[-8vw] -z-10 left-1/4 transform-translate-1/4 -translate-x-1/4 w-[30vw] h-[30vw] rounded-full bg-[#7BBBC4]"></div>
        <div className="absolute top-[-20vw] -z-10 left-1/2 transform-translate-2/4 -translate-x-2/4 w-[30vw] h-[30vw] rounded-full bg-[#7BBBC4]"></div>
        <div className="absolute top-[-8vw] -z-10 left-3/4 transform-translate-3/4 -translate-x-3/4 w-[30vw] h-[30vw] rounded-full bg-[#7BBBC4]"></div>
        <div className="content-container mx-auto pt-16 lg:pt-32 text-white z-40">
          <div className="text-center">
            <h1
              className={`${unbounded.className} font-black text-5xl uppercase`}
            >
              More Games
            </h1>
            <p className="text-xl lg:w-1/2 mx-auto pt-4">
              Games we did for others. Find your new favorite with these
              exciting and wildly popular games!
            </p>
          </div>
          <div>
            <Video
              className="px-4 lg:px-0"
              iframe={iframe}
              video={bulletBrainsBackground}
            />
          </div>
          <div className="text-center">
            <Button
              text="See Bullets & Brains"
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
