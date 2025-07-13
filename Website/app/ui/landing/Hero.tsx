"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";
import { rubikFont } from "@/app/lib/Fonts";

export function Hero() {
  return (
    <section className={`hero h-fit w-full mt-32 mb-16 ${rubikFont.className}`}>
      <div className="content-wrapper max-w-screen-xl flex flex-col justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="tag w-fit h-fit group cursor-pointer flex flex-row gap-1 items-center border-2 rounded-2xl px-2 py-1 border-[#2d2b55] hover:border-[#2d2b55] hover:shadow-2xl hover:shadow-purple-200  bg-neutral-400 duration-300"
        >
          <FaMagic className="text-sm text-purple-700 group-hover:text-purple-800 duration-300" />
          <span className="text-sm text-neutral-600 hover:text-neutral-800 duration-300">
            Only for developers!
          </span>
        </motion.div>
        <div className="hero-content flex flex-col gap-4 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="heading w-fit max-w-xl lg:max-w-4xl flex flex-col gap-1 items-center justify-center relative h-fit font-extrabold sm:text-5xl text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-neutral-300 text-center selection:text-[#2d2b55] selection:bg-blue-200 mx-auto"
          >
            <span>Manage your .env Effortlessly.</span>
            <span>Use EnvStore :)</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="w-fit h-fit max-w-[512px] text-yellow-200/70 text-center text-sm sm:text-base md:text-lg selection:text-[#2d2b55] selection:bg-blue-200 mx-auto"
          >
            Most of the time while making personal projects, we have this
            trouble of handling .env, we save that on whatsapp or somewhere, but
            instead of this hassle, what we can store them encrypted on cloud?{" "}
            <span className="underline decoration-cyan-200 decoration-double">
              what if you can deplot your own EnvStore ?
            </span>{" "}
            ☺️.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.7 }}
          className="buttons-dummy-input w-fit h-fit flex flex-row items-center justify-center gap-2 bg-neutral-100 px-4 py-3 rounded-4xl mt-5"
        >
          <input
            type="text"
            className="outline-none w-fit max-w-[250px] h-fit"
            placeholder="Write Something :)"
          />
          <Link
            href={"/dashboard"}
            className="bg-neutral-900 text-neutral-100 px-3 py-2 rounded-3xl"
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
