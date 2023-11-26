import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });
import Button from "./components/Button";
import ajvar from "@/public/ajvar-logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={`py-2 text-ajvar ${className}`}>
      <nav className="flex justify-between items-center content-container mx-auto">
        <Link href="/">
          <div className={`${unbounded.className} font-bold text-3xl`}>
            <Image
              src={ajvar}
              alt="Ajvar Studios"
              className="w-28"
              unoptimized
            />
          </div>
        </Link>
        <ul className="hidden lg:flex gap-12 items-center">
          <li className="bg-ajvar rounded-full px-5 py-2 text-white">Start</li>
          <li>Our Games</li>
          <li>Our Story</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
        <div>
          <Button text="Contact Us" />
        </div>
      </nav>
    </div>
  );
}
