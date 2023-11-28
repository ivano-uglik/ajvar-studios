import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

import octo from "@/public/octocurse-octo.svg";
import Image from "next/image";
import AppStores from "@/app/components/AppStores";
import Video from "@/app/Video";

export default function Octocurse() {
  return (
    <section>
      <div className="text-white">
        <div className="bg-octo-showcase">
          <div className="bg-green">
            <Image src={octo} alt="" className="mx-auto py-24 w-[50rem]" />
            <div className="text-center mx-auto content-container py-24">
              <h1
                className={`${unbounded.className} font-black text-5xl uppercase leading-[1.5]`}
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
      </div>
      <div className="py-48 bg-[#C0F504] rounded-t-[5rem]">
        <Video />
      </div>
    </section>
  );
}
