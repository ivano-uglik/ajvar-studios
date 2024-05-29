import Link from "next/link";
import Image from "next/image";
import appleLogo from "@/public/svg-assets/apple.svg";
import androidLogo from "@/public/svg-assets/android.svg";
import steamLogo from "@/public/svg-assets/wishlist-steam.webp";
import psLogo from "@/public/svg-assets/playstation.svg";
import nintendoLogo from "@/public/svg-assets/nintendo.svg";
import itchLogo from "@/public/svg-assets/itchio.svg";
import behanceLogo from "@/public/svg-assets/Behance.svg";
export default function AppStores({
  android,
  apple,
  steam,
  ps,
  nintendo,
  itch,
  behance,
  className,
}: {
  android?: string;
  apple?: string;
  steam?: string;
  ps?: string;
  nintendo?: string;
  itch?: string;
  behance?: string;
  className?: string;
}) {
  return (
    <div className={`flex gap-8 py-8 ${className}`}>
      {apple && (
        <Link
          target="_blank"
          href={apple}
          className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
        >
          <Image
            src={appleLogo}
            alt="Go to App store"
            className="w-8 aspect-square"
            unoptimized
          />
        </Link>
      )}
      {android && (
        <Link
          target="_blank"
          href={android}
          className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
        >
          <Image
            src={androidLogo}
            alt="Go to Google Play store"
            className="w-8 aspect-square"
            unoptimized
          />
        </Link>
      )}
      {ps && (
        <Link
          target="_blank"
          href={ps}
          className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
        >
          <Image
            src={psLogo}
            alt="Go to PlayStation Store"
            className="w-8 aspect-square"
            unoptimized
          />
        </Link>
      )}
      {nintendo && (
        <Link
          target="_blank"
          href={nintendo}
          className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
        >
          <Image
            src={nintendoLogo}
            alt="Go to Nintendo eShop"
            className="w-8 aspect-square"
            unoptimized
          />
        </Link>
      )}
      {behance && (
        <Link
          target="_blank"
          href={behance}
          className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
        >
          <Image
            src={behanceLogo}
            alt="Go to Behance"
            className="w-8 aspect-square"
            unoptimized
          />
        </Link>
      )}
      {steam && (
        <Link
          target="_blank"
          href={steam}
          className="flex justify-center items-center w-48"
        >
          <Image
            src={steamLogo}
            alt="Go to Steam"
            className="w-full border border-black rounded-2xl"
            unoptimized
          />
        </Link>
      )}
      {itch && (
        <Link
          target="_blank"
          href={itch}
          className="flex justify-center items-center w-48"
        >
          <Image
            src={itchLogo}
            alt="Go to itch.io"
            className="w-full"
            unoptimized
          />
        </Link>
      )}
    </div>
  );
}
