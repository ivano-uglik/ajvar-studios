import Character from "@/public/bulletbrains-assets/bb_side_char_1.png";
import Image from "next/image";
import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });
export default function NotFound() {
  return (
    <div className="bg-bullets-brains text-zombie-vs-towers overflow-hidden">
      <div className="h-[88vh] md:h-[90vh] flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-32 md:w-48">
          <Image src={Character} alt="character" />
        </div>
        <div className={`${unbounded.className} font-bold`}>
          <h1 className="text-5xl md:text-9xl">404</h1>
          <h1 className="text-xl md:text-5xl text-center">Not found.</h1>
        </div>
      </div>
    </div>
  );
}
