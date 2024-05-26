import Image from "next/image";
import BulletBrainsHeader from "@/public/bulletbrains-assets/logo.png";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-bullets-brains-gradient text-white py-8">
      <Image
        src={BulletBrainsHeader}
        alt=""
        className="mx-auto py-8 w-[32rem]"
      />
      <div className="text-center mx-auto content-container px-4 lg:px-0">
        <div
          className={`${unbounded.className} font-black text-4xl uppercase lg:leading-[1.2] overflow-x-clip`}
        >
          <h1>
            {
              "Prepare yourself for an intense Battle against the never-ending Onslaught of the Undead."
            }
          </h1>
        </div>
        <h2 className="pt-8 text-center text-xl">
          Bullets & Brains are coming soon. Wishlist us on Steam:
        </h2>
        <div className="flex justify-center">
          <AppStores steam="https://store.steampowered.com/app/2485430/Bullets__Brains/" />
        </div>
      </div>
    </div>
  );
}
