import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/sections/Navbar";
import CopyrightNotice from "@/app/components/CopyrightNotice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octocurse - Ajvar Studio",
  description:
    "OctoCurse is an action platformer following the story of a pirate captain who has been turned into an octopus by an evil spirit. Make your way through the tropical jungle, brave the harsh winter, weather the storm and endure other exciting environs. Save your friends and meet new ones along the way.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
