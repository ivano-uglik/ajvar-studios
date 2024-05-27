import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="mx-auto content-container px-4 lg:px-0 pb-16">
      <div
        className={`${unbounded.className} text-octocurse text-center font-black text-3xl lg:text-4xl uppercase lg:leading-[1.2] overflow-x-clip`}
      >
        <h1>{"Features"}</h1>
      </div>
      <div className="flex justify-center py-8">
        <ul className="text-xl list-disc flex flex-col gap-2">
          <li>
            Precise and intuitive{" "}
            <span className="text-octocurse font-semibold">
              octopus games controls
            </span>
          </li>
          <li>
            Explore a{" "}
            <span className="text-octocurse font-semibold">mythical tower</span>{" "}
            on an{" "}
            <span className="text-octocurse font-semibold">
              enigmatic tropical island
            </span>
          </li>
          <li>
            <span className="text-octocurse font-semibold">
              5 excitingly different
            </span>{" "}
            action-filled island survival chapters
          </li>
          <li>
            Over{" "}
            <span className="text-octocurse font-semibold">
              100 fun and thrilling
            </span>{" "}
            action platformer levels to discover
          </li>
          <li>
            An engaging story of{" "}
            <span className="text-octocurse font-semibold">
              friendship and courage
            </span>{" "}
            in octopus adventure
          </li>
          <li>Collect coins, break boxes, use your environment</li>
          <li>
            Run and Jump to{" "}
            <span className="text-octocurse font-semibold">
              Defeat tenacious enemies
            </span>{" "}
            and{" "}
            <span className="text-octocurse font-semibold">
              avoid deadly traps
            </span>
          </li>
          <li>
            Uncover{" "}
            <span className="text-octocurse font-semibold">
              secret sections
            </span>{" "}
            and snatch{" "}
            <span className="text-octocurse font-semibold">extra loot</span> in
            octopus games
          </li>
          <li>
            Customize your character with{" "}
            <span className="text-octocurse font-semibold">
              stylish and snazzy hats
            </span>
          </li>
          <li>
            Unlock{" "}
            <span className="text-octocurse font-semibold">Bonus levels</span>{" "}
            by gathering a{" "}
            <span className="text-octocurse font-semibold">hoard of coins</span>
          </li>
          <li>
            Earn ratings based on your{" "}
            <span className="text-octocurse font-semibold">dazzling</span>{" "}
            performance
          </li>
        </ul>
      </div>
    </div>
  );
}
