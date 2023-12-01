"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function Video({
  className,
  video,
  iframe,
}: {
  className?: string;
  video: string | StaticImport;
  iframe: any;
}) {
  const [active, setActive] = useState(false);
  return (
    <section className={`content-container mx-auto pt-8 pb-16 ${className}`}>
      <div className="rounded-3xl">
        {!active ? (
          <div className=" h-[30vh] lg:h-[55vh] mx-auto relative shadow-2xl">
            <Image
              alt="Video"
              src={video}
              placeholder="blur"
              quality={100}
              fill
              className="bg-video"
              priority
            />
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
              <button
                className="p-[5vw] lg:p-12 bg-white rounded-3xl spin"
                onClick={() => {
                  setActive(true);
                }}
              >
                <FaPlay size={"5vw"} color="#000000" />
              </button>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] lg:h-[55vh] mx-auto">{iframe}</div>
        )}
      </div>
    </section>
  );
}
