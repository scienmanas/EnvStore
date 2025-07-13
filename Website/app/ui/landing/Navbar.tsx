"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { tekoFont, rubikFont } from "@/app/lib/Fonts";
import Image from "next/image";
import logoImg from "@/public/assets/logo/icon.png";
import { navBarLinks } from "@/app/lib/contants";
import { Fragment } from "react";

export function Navbar() {
  // States
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <nav className="navbar max-w-screen-xl fixed top-0 z-20 w-full h-fit p-4 lg:py-4 xl:px-0 duration-200">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="content-wrapper z-20 w-full h-fit py-4 px-6 rounded-4xl flex flex-row items-center justify-between backdrop-blur-sm bg-white/60"
        >
          <div className="logo w-fit h-fi flex flex-row items-center justify-center">
            <Link
              href={"/"}
              className="flex flex-row items-center justify-center gap-2 w-fit h-fit"
            >
              <Image alt="logo" src={logoImg} width={30} />
              <span
                className={`text-2xl font-bold w-fit h-fit ${tekoFont.className}`}
              >
                EnvStore
              </span>
            </Link>
          </div>
          <div
            className={`links-content w-fit h-fit relative hidden sm:flex items-center justify-center flex-row duration-300 ${rubikFont.className}`}
          >
            <ul className="flex flex-col w-fit h-fit sm:flex-row sm:gap-4 lg:gap-8 sm:w-fit sm:h-fit items-center justify-center">
              {navBarLinks.map((data, index) => (
                <Link
                  className="text-black hover:underline duration-300"
                  key={index}
                  href={data.link}
                >
                  <li>{data.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="always-display-button flex items-center justify-center gap-2">
            <Link
              href={"/auth"}
              className="px-4 py-[6px] bg-black text-white rounded-4xl cursor-pointer"
            >
              Login
            </Link>
            <button
              onClick={() => {
                document.body.style.overflow = "hidden";
                setIsHamburgerOpen(!isHamburgerOpen);
              }}
              className="relative cursor-pointer h-fit w-fit flex sm:hidden hamburger flex-col gap-[6px] items-end"
            >
              <div
                style={{
                  transform: isHamburgerOpen
                    ? "rotate(45deg) translateY(5px)"
                    : "rotate(0deg) translateY(0px)",
                }}
                className="line relative w-6 h-[3px] bg-neutral-800 duration-200"
              ></div>
              <div
                style={{
                  transform: isHamburgerOpen
                    ? "rotate(-45deg) translateY(-5px)"
                    : "rotate(0deg) translateY(0px)",
                  width: isHamburgerOpen ? "24px" : "16px",
                }}
                className="line relative w-4 text-end h-[3px] bg-neutral-800 duration-200"
              ></div>
            </button>
          </div>
        </motion.div>
      </nav>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
          x: -200,
          y: -200,
          originX: 0,
          originY: 0,
        }}
        animate={{
          filter: "blur(0px)",
          scale: isHamburgerOpen ? 1 : 0,
          opacity: isHamburgerOpen ? 1 : 0,
          x: isHamburgerOpen ? 0 : -200,
          y: isHamburgerOpen ? 0 : -200,
          originX: 0,
          originY: 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
        className="wrapper flex sm:hidden fixed inset-0 w-dvw h-dvh p-4 backdrop-blur-sm z-30 duration-200"
      >
        <div
          className={`links-content rounded-2xl w-full h-full flex flex-col gap-6 items-center justify-center border border-[#aaa8a8]/60 bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20 duration-300 ${rubikFont.className}`}
        >
          <button
            type="button"
            onClick={() => {
              document.body.style.overflow = "auto";
              setIsHamburgerOpen(false);
            }}
            className="close-button absolute w-10 h-10 top-2 right-2 p-2 border-[#aaa8a8]/60 bg-white/40 rounded-full cursor-pointer flex flex-col gap-2 items-center justify-center"
          >
            <div className="line-1 h-[2px] w-5 bg-black rotate-45 translate-y-[4.5px]"></div>
            <div className="line-1 h-[2px] w-5 bg-black -rotate-45 -translate-y-[4.5px]"></div>
          </button>
          <ul className="flex flex-col gap-2 w-fit h-fit items-center justify-center">
            {navBarLinks.map((data, index) => (
              <Link
                className="text-yellow-300 font-bold underline duration-300"
                key={index}
                href={data.link}
              >
                <li>{data.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </Fragment>
  );
}