import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="mx-auto content-container px-4 lg:px-0 pb-16">
      <div
        className={`${unbounded.className}  text-center font-black text-3xl lg:text-5xl uppercase lg:leading-[1.2] overflow-x-clip`}
      >
        <h1 className="text-zombie-vs-towers">{"Features"}</h1>
      </div>
      <div className="flex justify-center py-8">
        <ul className="text-xl list-disc flex flex-col gap-2 pl-6">
          <li>
            <span className=" font-semibold">Clean and neat design</span> with a
            fresh and intuitive interface
          </li>
          <li>
            <span className=" font-semibold">High-quality graphics</span> with
            cool sound effects
          </li>
          <li>
            <span className=" font-semibold">Zombie survival adventure</span> to
            kill zombies
          </li>
          <li>
            <span className=" font-semibold">Merge and upgrade towers</span> to
            improve defensive power
          </li>
          <li>
            Unlock power-ups and boosters including{" "}
            <span className=" font-semibold">EMP</span>,{" "}
            <span className=" font-semibold">Nuke</span>,{" "}
            <span className=" font-semibold">3x Power</span>,{" "}
            <span className=" font-semibold">Accuracy</span>
          </li>
          <li>
            Collect gems to{" "}
            <span className=" font-semibold">upgrade your army</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
