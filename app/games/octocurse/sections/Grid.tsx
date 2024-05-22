import Image from "next/image";

import grid1 from "@/public/octocurse-assets/octo-grid-1.png";
import grid2 from "@/public/octocurse-assets/octo-grid-2.png";
import grid3 from "@/public/octocurse-assets/octo-grid-3.png";
import grid4 from "@/public/octocurse-assets/octo-grid-4.png";

export default function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 content-container mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-32 px-4 lg:px-0">
      <Image
        src={grid1}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid2}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid3}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid4}
        alt="OctoCurse gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
    </div>
  );
}
