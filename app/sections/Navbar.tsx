"use client";

import { useState, useEffect } from "react";
import { Unbounded } from "next/font/google";
import Button from "../components/Button";
import ajvar from "@/public/ajvar/ajvar-logo.svg";
import Image from "next/image";
import Link from "next/link";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Navbar({
  className,
  active,
  navItems = [
    { label: "Bullets & Brains", path: "/games/bullet-brains" },
    { label: "Octo Curse", path: "/games/octocurse" },
    { label: "Zombies vs Towers", path: "/games/zombie-vs-towers" },
    { label: "GoBo", path: "/games/gobo" },
    { label: "Contact Us", path: "contact-us" },
  ],
}: {
  className?: string;
  active: { label: string }[];
  navItems?: { label: string; path: string }[];
}) {
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
      <nav className="flex justify-between items-center mx-4 relative">
        <Link href="/">
          <div
            className={`${unbounded.className} font-bold text-3xl ${
              scrolling ? "absolute shadow-2xl bg-white w-32" : "lg:ml-16 w-28"
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
        <ul className="hidden lg:flex gap-[3vw] items-center">
          {/* {active?.map((item: { label: string }, index: number) => (
            <li
              key={index}
              className="bg-ajvar rounded-full px-5 py-2 text-white"
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))} */}
          {navItems?.map((item, index) => (
            <li
              key={index}
              className={`${
                item.label === active[0].label
                  ? "bg-ajvar rounded-full px-5 py-2 text-white"
                  : ""
              }`}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          {/* <Button text="Contact Us" /> */}
          {/* <Link href="/contact-us">
            <button
              className={`${
                unbounded.className
              } text-white bg-ajvar font-bold rounded-full ${
                scrolling ? "px-16 py-2" : "px-4 py-3"
              } text-xs lg:text-base transition-all duration-300 ease-in-out`}
            >
              Contact Us
            </button>
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
