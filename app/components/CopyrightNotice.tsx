import Image from "next/image";
import Link from "next/link";
import ajvarLogo from "@/public/ajvar/ajvar-logo.svg";
import behance from "@/public/svg-assets/Behance.svg";
import linkedin from "@/public/svg-assets/in.png";
export default function CopyrightNotice({ className }: { className?: string }) {
  return (
    <div className="relative">
      {/* <div
        className={`content-container flex items-center justify-between mx-auto pt-4 pb-0 md:pt-8 md:pb-8 text-lg ${className} md:h-[10vh]`}
      >
        <div className="flex items-center gap-4 text-xl w-1/3">
          <p>&copy;</p>{" "}
          <Link href={"/"}>
            <Image src={ajvarLogo} alt="ajvar logo" className="w-24" />
          </Link>
        </div>
        <div className="md:w-1/3 flex justify-center items-center gap-8 md:gap-16">
          <Link href={"mailto:ajvar.studio@gmail.com"}>
            <button className="text-[2rem] md:text-[2.5rem] font-bold">
              @
            </button>
          </Link>
          <button>
            <Link href={"https://www.behance.net/domuzin"} target="blank">
              <Image
                src={behance}
                alt="Behance logo"
                className="w-[2rem] md:w-[2.5rem]"
              />
            </Link>
          </button>
          <button>
            <Link
              href={"https://www.linkedin.com/in/zoran-domuzin/"}
              target="blank"
            >
              <Image
                src={linkedin}
                alt="LinkedIn logo"
                className="w-[2rem] md:w-[2.5rem]"
              />
            </Link>
          </button>
        </div>
        <div className="w-1/3 hidden md:block text-end">
          <Link
            href="https://github.com/ivano-uglik"
            target="_blank"
            className="hover:text-ajvar transition-all py-8 hover:underline underline-offset-4"
          >
            Ivano did it!
          </Link>
        </div>
      </div>
      <div className="md:hidden block text-center pt-4 pb-4">
        <Link
          href="https://github.com/ivano-uglik"
          target="_blank"
          className="text-ajvar transition-all underline underline-offset-4 "
        >
          Ivano did it!
        </Link>
      </div> */}
      <div
        className={`content-container flex items-center justify-center mx-auto pt-4 pb-0 md:pt-8 md:pb-8 text-lg ${className} md:h-[10vh]`}
      >
        <div className="text-xl">
          <p className="text-center">
            &copy; Ajvar Studio. All rights reserved.
          </p>
        </div>
      </div>
      <div className="py-4 text-center md:absolute md:right-4 md:top-[2vh]">
        <Link
          href="https://github.com/ivano-uglik"
          target="_blank"
          className="text-ajvar transition-all underline underline-offset-4 inline "
        >
          Ivano did it!
        </Link>
      </div>
    </div>
  );
}
