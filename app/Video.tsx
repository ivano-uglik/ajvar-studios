"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Video({ className }: { className?: string }) {
  const [active, setActive] = useState(false);
  return (
    <section className={`content-container mx-auto pt-8 pb-16 ${className}`}>
      {!active ? (
        <div className="bg-video h-[30vh] lg:h-[55vh] mx-auto">
          <div className="flex justify-center items-center h-full">
            <button
              className="p-8 lg:p-12 bg-white rounded-3xl spin"
              onClick={() => {
                setActive(true);
              }}
            >
              <FaPlay size={60} />
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[30vh] lg:h-[55vh] mx-auto">
          <iframe
            src="https://player.vimeo.com/video/676247342?h=f0b527f0f2&autoplay=1&title=0&byline=0&portrait=0"
            style={{
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      )}
    </section>
  );
}
