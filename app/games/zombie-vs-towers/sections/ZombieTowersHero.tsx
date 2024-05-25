import Image from "next/image";
import ZombieTowersHeader from "@/public/zombie-towers-assets/logo.png";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-zombie-towers-gradient text-white py-8">
      <Image
        src={ZombieTowersHeader}
        alt=""
        className="mx-auto py-8 w-[36rem]"
      />
      <div className="text-center mx-auto content-container px-4 lg:px-0">
        <div
          className={`${unbounded.className} font-black text-4xl uppercase lg:leading-[1.2] overflow-x-clip`}
        >
          <h1>{"It is time to start a massive zombie invasion!"}</h1>
        </div>
        <h2 className="pt-8 text-center text-xl">
          Made in collaboration with our friends at Edenap. Download for free:
        </h2>
        <div className="flex justify-center">
          <AppStores
            apple="https://apps.apple.com/us/app/zombies-vs-towers/id1545660538"
            android="https://play.google.com/store/apps/details?id=com.edenap.z2&hl=en&gl=US"
          />
        </div>
      </div>
    </div>
  );
}
