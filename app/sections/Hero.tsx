"use client";

import { Unbounded } from "next/font/google";
import Button from "../components/Button";
import Image from "next/image";
import ajvar from "@/public/ajvar/ajvar-logo.svg";
import nanobit from "@/public/ajvar/nanobit.svg";
const unbounded = Unbounded({ subsets: ["latin"] });
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export default function Hero({ className }: { className?: string }) {
  const images: any = [
    { img: nanobit, alt: "Nanobit" },
    { img: ajvar, alt: "Ajvar" },
    { img: nanobit, alt: "Nanobit" },
    { img: ajvar, alt: "Ajvar" },
    { img: nanobit, alt: "Nanobit" },
    { img: ajvar, alt: "Ajvar" },
    { img: nanobit, alt: "Nanobit" },
    { img: ajvar, alt: "Ajvar" },
    { img: nanobit, alt: "Nanobit" },
    { img: ajvar, alt: "Ajvar" },
  ];
  return (
    <section>
      <div
        className={`bg-ajvar text-white rounded-t-[3rem] lg:rounded-t-[10rem] pt-16 ${className}`}
      >
        <div className="text-center">
          <h1
            className={`${unbounded.className} text-2xl lg:text-[3.5rem] lg:leading-[4.2rem] uppercase font-black lg:w-3/4 mx-auto content-container`}
          >
            At Ajvar, Our Dream is to Create Games that Bring Smiles.
          </h1>
          <h2 className="lg:w-1/3 mx-auto">
            Ajvar turns childhood memories into games for everyone, offering
            entertainment that makes every moment fun!
          </h2>
          <Button
            text="Contact Us"
            bg="bg-white"
            textColor="text-ajvar"
            px="px-12"
            className="my-8"
          />
        </div>
        <div className="content-container mx-auto pt-16">
          <div className="flex items-center justify-between">
            <h3
              className={`${unbounded.className} font-bold text-xl lg:text-3xl`}
            >
              Who we work with
            </h3>
            {/* <div className="flex gap-4">
              <button className="rounded-full p-2 lg:p-4 bg-gray-200 flex justify-center items-center transition-all duration-100 cursor-default">
                <FaChevronLeft color="#E41943" size={20} />
              </button>
              <button className="rounded-full p-2 lg:p-4 bg-white flex justify-center items-center">
                <FaChevronRight color="#E41943" size={20} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-swiper">
        <div className="ml-container ml-auto">
          <Swiper modules={[A11y]} spaceBetween={15} slidesPerView={4}>
            {images.map((img: any, index: any) => (
              <SwiperSlide key={index}>
                <button className="px-4 py-2 lg:px-8 lg:py-8 bg-white rounded-lg lg:rounded-[2rem] shadow-md my-8">
                  <Image
                    src={img.img}
                    alt={img.alt}
                    className="w-32 lg:w-64 h-8 lg:h-16"
                    unoptimized
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
