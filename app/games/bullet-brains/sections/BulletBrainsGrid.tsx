import Image from "next/image";

import grid1 from "@/public/bulletbrains-assets/pic_bb_1.jpg";
import grid2 from "@/public/bulletbrains-assets/pic_bb_2.jpg";
import grid3 from "@/public/bulletbrains-assets/pic_bb_3.jpg";
import grid4 from "@/public/bulletbrains-assets/pic_bb_4.jpg";

export default function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 content-container mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-16 px-4 lg:px-0 h-[250vh]">
      <Image
        src={grid1}
        alt="Bullets & Brains gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[3rem] h-full w-full object-cover"
      />
      <Image
        src={grid2}
        alt="Bullets & Brains gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[3rem] h-full w-full object-cover"
      />
      <Image
        src={grid3}
        alt="Bullets & Brains gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[3rem] h-full w-full object-cover"
      />
      <Image
        src={grid4}
        alt="Bullets & Brains gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[3rem] h-full w-full object-cover"
      />
    </div>
  );
}
