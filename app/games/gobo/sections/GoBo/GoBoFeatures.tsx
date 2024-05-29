import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="mx-auto content-container px-4 lg:px-0">
      <div
        className={`${unbounded.className} text-gobo text-center font-black text-3xl lg:text-4xl uppercase lg:leading-[1.2] overflow-x-clip`}
      >
        <h1>{"Features"}</h1>
      </div>
      <div className="flex justify-center py-8">
        <ul className="text-xl list-disc flex flex-col gap-2 pl-6">
          <li>
            <span className="text-gobo font-semibold">
              15 brain-teasing levels
            </span>{" "}
            to challenge your mind
          </li>
          <li>
            <span className="text-gobo font-semibold">Easy to pick up</span>,{" "}
            <span className="text-gobo font-semibold">hard to master</span>{" "}
            gameplay
          </li>
          <li>
            <span className="text-gobo font-semibold">Jump</span>, solve
            puzzles, and test your skills
          </li>
          <li>
            Increasingly complex puzzles to keep you{" "}
            <span className="text-gobo font-semibold">engaged</span>
          </li>
          <li>
            Vibrant and stylish art style to{" "}
            <span className="text-gobo font-semibold">
              captivate your senses
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
