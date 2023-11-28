import Link from "next/link";
import Image from "next/image";
import appleLogo from "@/public/apple.svg";
import androidLogo from "@/public/android.svg";

export default function AppStores({
  android,
  apple,
  className,
}: {
  android: string;
  apple: string;
  className?: string;
}) {
  return (
    <div className={`flex gap-8 py-8 ${className}`}>
      <Link
        href={apple}
        className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
      >
        <Image src={appleLogo} alt="Go to App store" unoptimized />
      </Link>
      <Link
        href={android}
        className="p-4 rounded-full aspect-square shadow-lg bg-white hover:scale-125 hover:opacity-75 transition-all duration-100"
      >
        <Image src={androidLogo} alt="Go to Google Play store" unoptimized />
      </Link>
    </div>
  );
}
