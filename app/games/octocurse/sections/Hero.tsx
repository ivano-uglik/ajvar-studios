import Image from "next/image";
import octo from "@/public/octocurse-octo.svg";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-octo-showcase text-white">
      <div className="bg-green">
        <Image src={octo} alt="" className="mx-auto py-24 w-[50rem]" />
        <div className="text-center mx-auto content-container py-24 px-4 lg:px-0">
          <h1
            className={`${unbounded.className} font-black text-3xl lg:text-5xl uppercase leading-[1.5] overflow-x-clip`}
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
    </div>
  );
}
