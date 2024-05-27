import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zombies vs Towers - Ajvar Studio",
  description:
    "Zombies vs Towers is the ultimate tower defense game for your mobile platform of choice. The last human outpost has set you up as commander of defense. Build towers and workers and start bringing ammo to the towers so they can shoot down zombies. Use different power-ups to destroy zombies quicker. Merge towers so your towers can shoot with more guns against the raging enemy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
