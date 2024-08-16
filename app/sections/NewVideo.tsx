"use client";
import { useState } from "react";
import ReactPlayer from "react-player/";
export default function NewVideo() {
  const [volume, setVolume] = useState(0);
  return (
    <section className="content-container mx-auto pt-8 pb-16">
      <div className="rounded-3xl overflow-hidden aspect-video max-h-[65vh] mx-auto shadow-2xl">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lZbQu9oVruc"
          playing={true}
          loop={true}
          volume={volume}
          width={"100%"}
          height={"100%"}
          onPause={() => {
            setVolume(1);
          }}
        />
      </div>
    </section>
  );
}
