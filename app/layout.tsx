import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
