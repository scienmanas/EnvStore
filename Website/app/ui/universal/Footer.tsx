"use client";

import Link from "next/link";
import { rubikFont } from "@/app/lib/Fonts";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { navigationLinks, donationLinks } from "@/app/lib/contants";
import Image from "next/image";
import logoImg from "@/public/assets/logo/half_and_transparent.png";

export function Footer() {
  const [isDonationOpened, setIsDonationOpened] = useState<boolean>(false);
  const donationContainerRef = useRef<HTMLDivElement>(null);

  // Close the donation dropdown when clicking outside of it
  useEffect(() => {
    if (!isDonationOpened) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        donationContainerRef.current &&
        !donationContainerRef.current.contains(event.target as Node)
      )
        setIsDonationOpened(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDonationOpened]);

  return (
    <section className="content-wrapper w-full max-w-screen-xl h-fit flex items-center justify-center">
      <footer
        className={`footer w-full h-fit text-center p-6 ${rubikFont.className} rounded-2xl flex flex-col gap-6 items-center justify-center border border-[#aaa8a8]/60 bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20`}
        style={{
          borderWidth: "1.5px",
          borderBottomWidth: "2.5px",
          borderBottomColor: "#8886c2",
          boxShadow:
            "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
        }}
      >
        {/* Add gap-x-8 (or similar) to add space between columns */}
        <div className="upper-part w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
          <div className="logo-and-description flex items-start justify-center flex-col gap-3 w-fit h-fit">
            <Image
              src={logoImg}
              alt="logo"
              width={60}
              className="pointer-events-none select-none"
            />
            <p className="text-base w-fit h-fit text-start text-yellow-300">
              Manage your .env effortlessly, fully managed by us with best
              encryption techniques :)
            </p>
          </div>
          <div className="navigation flex flex-col items-start md:items-center justify-center w-full h-fit">
            <div className="content-wrapper w-fit flex flex-col items-start gap-3">
              <h3 className="text-lg font-semibold text-gray-100">
                Navigation
              </h3>
              <ul className="navigation-links w-fit h-fit text-start">
                {navigationLinks.map((data, index) => (
                  <li
                    key={index}
                    className="text-yellow-300/80 hover:text-yellow-300 duration-300 hover:underline"
                  >
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="donate flex flex-col items-start gap-3 w-fit h-fit">
            <h3 className="text-lg font-semibold text-gray-100">Support Us</h3>
            <p className="text-yellow-300 text-sm text-start">
              Consider supporting our work through donations to help us continue
              building amazing projects.
            </p>
            <div
              ref={donationContainerRef}
              className="donate-button relative w-fit h-fit"
            >
              <Donation isDonationOpened={isDonationOpened} />
              <button
                onClick={() => setIsDonationOpened(!isDonationOpened)}
                className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200 rounded cursor-pointer"
              >
                Donate Now
              </button>
            </div>
            <button type="button"></button>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-gray-400/50 "></div>
        <div className="lower-part w-full h-fit flex flex-row items-center justify-between">
          <div className="copyright text-neutral-300 text-sm sm:text-base">
            © 2025 All rights reserved.
          </div>
          <div className="terms-and-conditions flex flex-row flex-nowrap gap-2 items-center text-sm sm:text-base">
            <Link
              className="text-neutral-300 hover:underline hover:text-neutral-200 transition-all duration-300"
              href={"/legal/terms-and-conditions"}
            >
              Terms & Conditions
            </Link>
            <span className="text-neutral-800">|</span>
            <Link
              className="text-neutral-300 hover:underline hover:text-neutral-200 transition-all duration-300"
              href={"/legal/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Donation({ isDonationOpened }: { isDonationOpened: boolean }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isDonationOpened ? 1 : 0,
        y: isDonationOpened ? 0 : -10,
      }}
      className="donation-box-links absolute w-fit px-3 py-2 bg-neutral-700 flex flex-row gap-2 rounded-2xl border border-neutral-600 top-11 -left-3"
    >
      {donationLinks.map((link, index) => (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: isDonationOpened ? 1 : 0,
            y: isDonationOpened ? 0 : -10,
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={index}
          className="w-fit h-fit"
        >
          <Link href={link.address}>
            <link.icon className="text-xl text-white" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
