import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoBo - Desert of Cubes - Ajvar Studio",
  description:
    "Gobo and the Desert of Cubes is a side-scrolling 2D puzzle platformer. Reign terror on small monsters, activate magical boxes and carve your path to that mystical door to help GoBo reach the exit door and escape the Desert! Do you think you have what it takes? Don't let the beginning levels trick you, it's not going to be easy, your skills will be put to the test!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
