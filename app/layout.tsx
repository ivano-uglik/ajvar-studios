import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import CopyrightNotice from "./components/CopyrightNotice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajvar Studio",
  description:
    "Explore a world of limitless adventures at Ajvar Studio, with Octo Curse, Bullet & Brains and more! Immerse yourself in unparalleled gameplay and innovation. Level up your gaming experience now! 🚀🎮",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="px-4 lg:px-0" />
        {children}
        <CopyrightNotice className="px-4 lg:px-0" />
      </body>
    </html>
  );
}
