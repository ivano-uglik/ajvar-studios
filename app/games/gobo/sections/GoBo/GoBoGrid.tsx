import Image from "next/image";

import grid1 from "@/public/gobo-assets/pic_gobo_1.jpg";
import grid2 from "@/public/gobo-assets/pic_gobo_2.jpg";
import grid3 from "@/public/gobo-assets/pic_gobo_3.jpg";
import grid4 from "@/public/gobo-assets/pic_gobo_4.jpg";

export default function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 content-container mx-auto gap-x-2 gap-y-4 lg:gap-x-4 lg:gap-y-8 py-16 px-4 lg:px-0">
      <Image
        src={grid1}
        alt="GoBo gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid2}
        alt="GoBo gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid3}
        alt="GoBo gameplay"
        placeholder="blur"
        className=" rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
      <Image
        src={grid4}
        alt="GoBo gameplay"
        placeholder="blur"
        className="col-span-2 rounded-3xl lg:rounded-[4.5rem] h-full w-full object-cover"
      />
    </div>
  );
}
