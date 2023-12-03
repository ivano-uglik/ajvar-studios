"use client";

import { Unbounded } from "next/font/google";
import Button from "../components/Button";
// import Liquid from "./Liquid";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <div>
      <div className="py-24 text-center">
        <h2
          className={`${unbounded.className} font-black uppercase text-4xl lg:text-5xl text-ajvar pb-8`}
        >
          Contact Us
        </h2>
        <h3 className="lg:w-1/3 xl:w-1/4 mx-auto text-lg lg:text-xl">
          Besides helping other companies and studios with game design
        </h3>
      </div>
      <div
        className={`${unbounded.className} bg-ajvar py-24 text-center text-white text-3xl lg:text-5xl font-black`}
      >
        <h3 className="pb-4">Well, what are you waiting for?</h3>
        <h3>{"Contact us :)"}</h3>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-around lg:gap-0 pt-8 lg:pt-24 content-container mx-auto">
          <Button
            text="LinkedIn"
            bg="bg-white"
            textColor="text-ajvar"
            px="px-12"
          />
          <Button
            text="Behance"
            bg="bg-white"
            textColor="text-ajvar"
            px="px-12"
          />
          <Button
            text="Instagram"
            bg="bg-white"
            textColor="text-ajvar"
            px="px-12"
          />
          <Button
            text="Email"
            bg="bg-white"
            textColor="text-ajvar"
            px="px-12"
          />
        </div>
      </div>
      {/* <Liquid /> */}
    </div>
  );
}
