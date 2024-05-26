import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bullets & Brains - Ajvar Studio",
  description:
    "In Bullets & Brains, you'll find yourself immersed in a sprawling post-apocalyptic environment, teeming with engaging atmosphere and danger at every turn. As one of the last survivors, it's up to you to navigate through the desolate streets, abandoned buildings, grimy alleyways, but also forests, sewers and even snowy mountains, fighting off waves of relentless zombies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
