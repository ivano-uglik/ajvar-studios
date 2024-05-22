import Image from "next/image";
import octoCurseHeader from "@/public/octocurse-assets/octo-header.webp";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-green text-white">
      <Image src={octoCurseHeader} alt="" className="mx-auto py-8 w-[40rem]" />
      <div className="text-center mx-auto content-container px-4 lg:px-0">
        <div
          className={`${unbounded.className} font-black text-3xl lg:text-5xl uppercase lg:leading-[1.2] overflow-x-clip`}
        >
          <h1>{"It's time to reverse the curse!"}</h1>
          <h1>All tentacles on deck!</h1>
        </div>
        <h3 className="w-1/2 mx-auto pt-4 lg:text-xl">
          Ajvar turns childhood memories into games for everyone, offering
          entertainment that makes every moment fun!
        </h3>
        <div className="flex justify-center">
          <AppStores
            ps="https://store.playstation.com/en-us/product/UP1421-PPSA16192_00-0867477368441243"
            nintendo="https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Octo-Curse-2395170.html"
            itch="https://ajvarstudio.itch.io/octo-curse"
          />
        </div>
      </div>
    </div>
  );
}
