"use client";

import { useState, useEffect } from "react";
import { Unbounded } from "next/font/google";
import Button from "./components/Button";
import ajvar from "@/public/ajvar-logo.svg";
import Image from "next/image";
import Link from "next/link";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Navbar({ className }: { className?: string }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolling ? "py-2 shadow-2xl" : "py-4"
      } text-ajvar content-container mx-auto ${className} sticky top-0 bg-white rounded-b-3xl transition-all ease-in-out duration-300 z-50`}
    >
      <nav className="flex justify-between items-center mx-4">
        <Link href="/">
          <div
            className={`${unbounded.className} font-bold text-3xl ${
              scrolling ? "w-20" : "lg:ml-16 w-28"
            }  transition-all ease-in-out duration-300`}
          >
            <Image
              src={ajvar}
              alt="Ajvar Studios"
              className="h-full w-full"
              unoptimized
            />
          </div>
        </Link>
        <ul className="hidden lg:flex gap-12 items-center">
          <li className="bg-ajvar rounded-full px-5 py-2 text-white">
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="#">Our Games</Link>
          </li>
          <li>
            <Link href="/games/octocurse">OctoCurse</Link>
          </li>
          <li>
            <Link href="#">Our Story</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
        <div>
          {/* <Button text="Contact Us" /> */}
          <button
            className={`${
              unbounded.className
            } text-white bg-ajvar font-bold rounded-full ${
              scrolling ? "px-16 py-2" : "px-4 py-3"
            } text-xs lg:text-base transition-all duration-300 ease-in-out`}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}
