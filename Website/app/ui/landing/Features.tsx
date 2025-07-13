"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import {
  rubikFont,
  cedarvilleCursiveFont,
  playwriteGBSFont,
  playwriteDEGrundFont,
} from "@/app/lib/Fonts";
import { cardData } from "@/app/lib/contants";
import { useRef, useEffect, useState } from "react";

export function Features() {
  // Refs
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Framer motion stuff for horizontal scroll
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Exact calculation
  const totalCards = cardData.length;
  const cardWidthPx = 336; // 21rem = 336px (21 * 16)
  const gapPx = 24; // 1.5rem = 24px (1.5 * 16)
  // Total width of all cards + gaps
  const totalContentWidth = totalCards * cardWidthPx + (totalCards - 1) * gapPx;
  const bufferPx = 50; // 50px buffer on both sides
  const exactMoveDistance = Math.max(
    0,
    totalContentWidth - containerWidth + bufferPx * 2
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [bufferPx, -(exactMoveDistance - bufferPx)]
  );

  return (
    <section
      ref={targetRef}
      className={`features relative w-full h-[300vh] ${rubikFont.className}`}
    >
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-start overflow-hidden"
      >
        <motion.div className="cards flex flex-row gap-6" style={{ x }}>
          {cardData.map((data, index) => (
            <Card
              key={index}
              num={data.num}
              name={data.name}
              description={data.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  num,
  name,
  description,
}: {
  num: number;
  name: string;
  description: string;
}) {
  return (
    <div
      className={`text-center flex flex-col w-[21rem] h-[21rem] gap-6 p-6 ${rubikFont.className} rounded-2xl border items-start justify-end border-[#aaa8a8]/60 bg-yellow-300/20 backdrop-blur-sm shadow-xl shadow-blue-900/20 flex-shrink-0`}
      style={{
        borderWidth: "1.5px",
        borderBottomWidth: "2.5px",
        borderBottomColor: "#8886c2",
        boxShadow:
          "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
      }}
    >
      <div
        className={`text-5xl font-bold text-yellow-200  ${cedarvilleCursiveFont.className}`}
      >
        {String(num).padStart(2, "0")}
      </div>
      <h3
        className={`text-3xl font-semibold text-gray-100 mb-2 ${playwriteGBSFont.className}`}
      >
        {name}
      </h3>
      <p
        className={`text-cyan-200 text-center text-sm leading-relaxed ${playwriteDEGrundFont.className}`}
      >
        {description}
      </p>
    </div>
  );
}
