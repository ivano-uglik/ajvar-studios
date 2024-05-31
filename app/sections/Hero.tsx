"use client";

import { Unbounded } from "next/font/google";
import Button from "../components/Button";
import Image from "next/image";
import ajvar from "@/public/ajvar/ajvar-logo.svg";
import nanobit from "@/public/ajvar/nanobit.svg";
import edenap from "@/public/who-we-work-with/logo_edenap.png";
import fearem from "@/public/who-we-work-with/logo_feraem.png";
import ironward from "@/public/who-we-work-with/logo_ironward.png";
import nogravitygames from "@/public/who-we-work-with/logo_ngg.png";
const unbounded = Unbounded({ subsets: ["latin"] });
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useRef } from "react";
export default function Hero({ className }: { className?: string }) {
  const images: any = [
    { img: edenap, alt: "Edenap", link: "https://edenap.com/" },
    { img: fearem, alt: "Fearem", link: "https://fearem.com/" },
    { img: ironward, alt: "Ironward", link: "https://www.ironward.com/" },
    {
      img: nogravitygames,
      alt: "No Gravity Games",
      link: "https://nogravitygames.com/",
    },
  ];
  // const swiperRef: any = useRef();
  return (
    <section>
      <div
        className={`bg-ajvar text-white rounded-t-[3rem] lg:rounded-t-[10rem] pt-16 ${className}`}
      >
        <div className="text-center">
          <h1
            className={`${unbounded.className} text-2xl lg:text-[3.2rem] lg:leading-[4rem] uppercase font-black lg:w-3/4 mx-auto content-container`}
          >
            At Ajvar, Our Dream is to Create Games that Bring Smiles.
          </h1>
          <h2 className="lg:w-1/3 mx-auto text-xl">
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
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="rounded-full p-2 lg:p-4 bg-white flex justify-center items-center"
              >
                <FaChevronLeft color="#E41943" size={20} />
              </button>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="rounded-full p-2 lg:p-4 bg-white flex justify-center items-center"
              >
                <FaChevronRight color="#E41943" size={20} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-swiper">
        <div className="content-container mx-auto flex-wrap px-2 md:px-8 py-8">
          <Swiper
            modules={[A11y]}
            spaceBetween={12}
            slidesPerView={4}
            loop={true}
            // onBeforeInit={(swiper: any) => {
            //   swiperRef.current = swiper;
            // }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              375: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {images.map((img: any, index: any) => (
              <SwiperSlide key={index}>
                <Link href={img.link} target="blank">
                  <button className="px-4 py-2 lg:px-8 lg:py-8 bg-white rounded-lg lg:rounded-[1.5rem] shadow-md">
                    <Image
                      src={img.img}
                      alt={img.alt}
                      className="w-32 lg:w-48"
                      unoptimized
                    />
                  </button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
