import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="mx-auto content-container px-4 lg:px-0 pb-16 text-white">
      <div
        className={`${unbounded.className} text-zombie-vs-towers text-center font-black text-4xl lg:text-6xl uppercase lg:leading-[1.2] overflow-x-clip`}
      >
        <h1>{"Features"}</h1>
      </div>
      <div className="flex justify-center py-8">
        <ul className="text-2xl list-disc flex flex-col gap-2">
          <li>
            <span className="text-zombie-vs-towers font-semibold">
              Clean and neat design
            </span>{" "}
            with a fresh and intuitive interface
          </li>
          <li>
            <span className="text-zombie-vs-towers font-semibold">
              High-quality graphics
            </span>{" "}
            with cool sound effects
          </li>
          <li>
            <span className="text-zombie-vs-towers font-semibold">
              Zombie survival adventure
            </span>{" "}
            to kill zombies
          </li>
          <li>
            <span className="text-zombie-vs-towers font-semibold">
              Merge and upgrade towers
            </span>{" "}
            to improve defensive power
          </li>
          <li>
            Unlock power-ups and boosters including{" "}
            <span className="text-zombie-vs-towers font-semibold">EMP</span>,{" "}
            <span className="text-zombie-vs-towers font-semibold">Nuke</span>,{" "}
            <span className="text-zombie-vs-towers font-semibold">
              3x Power
            </span>
            ,{" "}
            <span className="text-zombie-vs-towers font-semibold">
              Accuracy
            </span>
          </li>
          <li>
            Collect gems to{" "}
            <span className="text-zombie-vs-towers font-semibold">
              upgrade your army
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
