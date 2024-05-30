"use client";

import { Unbounded } from "next/font/google";
import Button from "../components/Button";
import Link from "next/link";
// import Liquid from "./Liquid";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <div>
      <div className="pt-24 text-center">
        <h2
          className={`${unbounded.className} font-black uppercase text-4xl lg:text-5xl text-ajvar pb-8`}
        >
          Contact Us
        </h2>
        <h3 className="px-4 md:w-2/3 xl:w-1/3 mx-auto text-lg lg:text-xl pb-12">
          {
            " Got a brilliant idea or just want to chat? Drop us an email and let's press start on something amazing! "
          }
        </h3>
        <Link href={"mailto:ajvar.studio@gmail.com"}>
          <button
            className={`${unbounded.className} text-white bg-ajvar font-black rounded-full px-8 py-6 flex justify-between gap-4 mx-auto hover:scale-125 transition-all duration-300 ease-in-out text-xl mb-12`}
          >
            <h3 className="uppercase">Email Us</h3>
            <span>@</span>
          </button>
        </Link>
      </div>
      <div
        className={`${unbounded.className} bg-ajvar py-24 text-center text-white text-3xl lg:text-5xl font-black`}
      >
        <h3 className="pb-4">Well, what are you waiting for?</h3>
        <h3>{"Contact us :)"}</h3>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-around lg:gap-0 pt-8 lg:pt-24 content-container mx-auto">
          <Link
            href={"https://www.linkedin.com/in/zoran-domuzin/"}
            target="blank"
          >
            <Button
              text="LinkedIn"
              bg="bg-white"
              textColor="text-ajvar"
              px="px-12"
            />
          </Link>
          <Link href={"https://www.behance.net/domuzin"} target="blank">
            <Button
              text="Behance"
              bg="bg-white"
              textColor="text-ajvar"
              px="px-12"
            />
          </Link>
          <Link href={"https://www.instagram.com/ajvarz"} target="blank">
            <Button
              text="Instagram"
              bg="bg-white"
              textColor="text-ajvar"
              px="px-12"
            />
          </Link>
        </div>
      </div>
      {/* <Liquid /> */}
    </div>
  );
}
