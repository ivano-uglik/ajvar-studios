import Image from "next/image";

import grid1 from "@/public/zombie-towers-assets/pic_zt_1.png";
import grid2 from "@/public/zombie-towers-assets/pic_zt_3.jpg";
import grid3 from "@/public/zombie-towers-assets/pic_zt_2.png";
import grid4 from "@/public/zombie-towers-assets/pic_zt_4.png";

export default function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-8 lg:py-16 px-4 xl:px-0 h-[80vh] lg:h-[200vh] content-container">
      <Image
        src={grid1}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="row-span-2 rounded-xl lg:rounded-3xl h-full w-full object-cover object-top"
      />
      <Image
        src={grid2}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="rounded-xl lg:rounded-3xl h-full w-full object-cover"
      />
      <Image
        src={grid3}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="row-span-2 rounded-xl lg:rounded-3xl h-full w-full object-cover"
      />
      <Image
        src={grid4}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="rounded-xl lg:rounded-3xl h-full w-full object-cover"
      />
    </div>
  );
}
