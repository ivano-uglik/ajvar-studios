import Image from "next/image";
import GoBoHeader from "@/public/gobo-assets/logo.png";
import AppStores from "@/app/components/AppStores";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="bg-gobo-gradient text-white">
      <Image src={GoBoHeader} alt="" className="mx-auto py-8 w-[36rem]" />
      <div className="text-center mx-auto content-container px-4 lg:px-0">
        <div
          className={`${unbounded.className} font-black text-4xl uppercase lg:leading-[1.2] overflow-x-clip`}
        >
          <h1>{"Challenge your mind, test your reflexes"}</h1>
        </div>
        <h2 className="pt-8 text-center text-xl">Try it for free now!</h2>
        <div className="flex justify-center">
          <AppStores itch="https://ajvarstudio.itch.io/gobo-desert-of-cubes" />
        </div>
      </div>
    </div>
  );
}
