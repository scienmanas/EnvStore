"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import { IoPlayOutline } from "react-icons/io5";
import placeholderImg from "@/public/assets/landing/Demo.png";
import { rubikFont } from "@/app/lib/Fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef as useDomRef } from "react";

interface heroVideoProps {
  img: StaticImageData;
  video: string;
  heading: string;
  description: string;
}

const ImgVideoData: heroVideoProps = {
  img: placeholderImg,
  video: "/assets/landing/demo.mp4",
  heading: "Demo Video",
  description: "See the Demo Video and get to know.",
};

export function Demo() {
  const [isVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ref for the scrollable trigger area
  const scrollBoxRef = useDomRef<HTMLDivElement>(null);

  // Framer Motion scroll progress for the box
  // The box will animate as it enters and leaves the viewport
  const { scrollYProgress } = useScroll({
    target: scrollBoxRef,
    offset: ["start end", "end start"],
  });

  // Animate scale from 1 to 1.1 as you scroll
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.1]);

  return (
    <section
      className={`relative demo-video w-full h-fit flex flex-col items-center justify-center gap-8 p-8 ${rubikFont.className}`}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="head-and-description flex flex-col gap-4 items-center justify-center"
      >
        <h1 className="w-fit h-fit text-center text-transparent bg-clip-text bg-gradient-to-br from-neutral-100  to-neutral-500 sm:text-lg text-base font-bold ">
          {ImgVideoData.heading}
        </h1>
        <p className="w-fit h-fit text-center sm:text-2xl text-xl text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-yellow-200 font-semibold">
          {ImgVideoData.description}
        </p>
      </motion.div>
      <div className="relative video-image-placeholder rounded-xl w-fit h-fit before:absolute before:h-[100%] before:w-full before:bg-gradient-to-tl before:from-purple-500 before:to-purple-800 before:opacity-60 before:blur-2xl before:content-[''] before:right-5 before:-top-5 after:absolute after:h-[100%] after:w-full after:bg-gradient-br after:from-purple-500 after:to-purple-800 after:blur-2xl after:opacity-60 after:content-[''] after:left-5 after:-bottom-5 after:z-0">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          ref={scrollBoxRef}
          style={{ scale }}
          className="relative z-10 flex items-center justify-center"
        >
          {!isVideoPlayed && (
            <div className="relative placehold-image  md:w-[700px] lg:w-[800px] flex items-center justify-center">
              <Image
                className="w-full relative rounded-xl"
                src={ImgVideoData.img}
                width={800}
                height={400}
                alt="placeholder-img"
              />
              <button
                onClick={() => {
                  setIsVideoPlayed(true);
                  videoRef.current?.play();
                }}
                className="absolute z-10 p-4 w-full h-full flex items-center justify-center cursor-pointer"
              >
                <div className="relative w-fit h-fit flex justify-center items-center group bg-[#27272a] rounded-full">
                  <div className="z-0 absolute shadow-pulsing bg-transparent bg-gradient-radial w-[120%] h-[120%] blur-2xl hover:w-[150%] hover:h-[150%] "></div>
                  <IoPlayOutline className=" relative z-10 lg:text-6xl md:text-4xl sm:text-3xl text-2xl border-[2px] border-[#8b5cf6] text-white w-fit h-fit p-4 rounded-full flex items-center justify-center group-hover:scale-105 duration-300 " />
                </div>
              </button>
            </div>
          )}
          <div
            className={`actual-video w-fit h-fit ${
              isVideoPlayed ? "flex" : "hidden"
            }`}
          >
            <video
              ref={videoRef}
              preload="auto"
              controls
              className="w-[800px] h-[400px] rounded-lg"
            >
              <source src={ImgVideoData.video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
