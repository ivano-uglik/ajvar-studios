import Image from "next/image";
import octoCurseHeader from "@/public/octocurse-assets/octo-header.webp";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-green text-white">
      <Image src={octoCurseHeader} alt="" className="mx-auto py-16 w-[32rem]" />
      <div className="text-center mx-auto content-container px-4 lg:px-0">
        <h1
          className={`${unbounded.className} font-black text-3xl lg:text-5xl uppercase lg:leading-[1.5] overflow-x-clip`}
        >
          Octocurse is the Ultimate Platformer Game
        </h1>
        <h3 className="w-1/2 mx-auto pt-4">
          Ajvar turns childhood memories into games for everyone, offering
          entertainment that makes every moment fun!
        </h3>
        <div className="flex justify-center">
          <AppStores android="#" apple="#" />
        </div>
      </div>
    </div>
  );
}
