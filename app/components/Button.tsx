import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Button({
  text,
  bg = "bg-ajvar",
  textColor = "text-white",
  className,
  px = "px-4",
  py = "py-3",
}: {
  text: string;
  bg?: string;
  textColor?: string;
  className?: string;
  px?: string;
  py?: string;
}) {
  return (
    <button
      className={`${unbounded.className} ${textColor} ${bg} font-bold rounded-full ${px} ${py} text-xs lg:text-base hover:scale-125 transition-all duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
}
