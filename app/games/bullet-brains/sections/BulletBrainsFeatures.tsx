import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="mx-auto content-container px-4 lg:px-0 text-[#02080C]">
      <div
        className={`${unbounded.className} text-center font-black text-3xl lg:text-5xl uppercase lg:leading-[1.2] overflow-x-clip`}
      >
        <h1 className="text-[#02778F]">{"Features"}</h1>
      </div>
      <div className="flex justify-center py-8">
        <ul className="list-disc flex flex-col gap-2 pl-6">
          <li>
            Choose between{" "}
            <span className="font-semibold">many distinctive characters</span>,
            each with their own starting weapon.
          </li>
          <li>
            Explore a sprawling{" "}
            <span className="font-semibold">post-apocalyptic environment</span>,
            filled with atmospheric locations and hidden secrets.
          </li>
          <li>
            Engage in intense top-down 3D shooter combat against{" "}
            <span className="font-semibold">never-ending hordes</span> of
            brain-hungry zombies.
          </li>
          <li>
            Group with last survivors to protect each other in mayhem battles -{" "}
            <span className="font-semibold">Bullets and Brains</span> offers a
            co-op mode!
          </li>
          <li>
            Collect brains in order to level up and energy that grants{" "}
            <span className="font-semibold">powerful abilities</span>, allowing
            you to unleash devastating attacks.
          </li>
          <li>
            Experience the game with your preferred control scheme,{" "}
            <span className="font-semibold">
              supporting both mouse and keyboard as well as gamepad
            </span>
            .
          </li>
          <li>
            <span className="font-semibold">Test your survival skills</span>{" "}
            against endless waves of undead
          </li>
          <li>
            Enjoy the{" "}
            <span className="font-semibold">
              fast-paced action and dynamic gameplay
            </span>{" "}
            that keeps you on the edge of your seat.
          </li>
          <li>
            Unleash your{" "}
            <span className="font-semibold">
              strategic thinking and skillful aim
            </span>{" "}
            to overcome the relentless zombie onslaught.
          </li>
          <li>
            <span className="font-semibold">
              Adapt your tactics and loadouts
            </span>{" "}
            to suit different enemy types and encounter two new challenging
            foes.
          </li>
          <li>
            Uncover <span className="font-semibold">hidden collectibles</span>{" "}
            and unlock <span className="font-semibold">bonus content</span> as
            you progress through the game.
          </li>
          <li>
            Engage in thrilling and satisfying gunplay, with a{" "}
            <span className="font-semibold">
              wide range of weapons and explosives
            </span>{" "}
            at your disposal.
          </li>
        </ul>
      </div>
    </div>
  );
}
