"use client";

import { Unbounded } from "next/font/google";
const unbounded = Unbounded({ subsets: ["latin"] });
import gsap from "gsap";
import { useEffect } from "react";
export default function HorizontalScroll() {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 2,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    });
  }, []);

  return (
    <section
      className={`${unbounded.className} bg-[#77C400] text-white uppercase font-bold text-3xl sticky bottom-0 overflow-hidden py-4`}
    >
      <div className="marquee__inner flex gap-8" aria-hidden="true">
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
        <div className="marquee__part">Bullet & Brains is Out</div>
      </div>
    </section>
  );
}
