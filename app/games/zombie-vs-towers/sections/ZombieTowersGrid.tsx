import Image from "next/image";

import grid1 from "@/public/zombie-towers-assets/pic_zt_4.png";
import grid2 from "@/public/zombie-towers-assets/pic_zt_1.png";
import grid3 from "@/public/zombie-towers-assets/pic_zt_3.jpg";
import grid4 from "@/public/zombie-towers-assets/pic_zt_2.png";

export default function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 content-container mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-16 px-4 lg:px-0">
      <Image
        src={grid1}
        alt="Zombies vs Towers gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[2.5rem] h-64 w-full object-cover"
      />
      <Image
        src={grid2}
        alt="Zombies vs Towers gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[2.5rem] h-64 w-full object-cover"
      />
      <Image
        src={grid3}
        alt="Zombies vs Towers gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[2.5rem] h-64 w-full object-cover"
      />
      <Image
        src={grid4}
        alt="Zombies vs Towers gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[2.5rem] h-64 w-full object-cover"
      />
    </div>
  );
}
