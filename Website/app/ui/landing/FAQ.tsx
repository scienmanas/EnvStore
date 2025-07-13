"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { rubikFont } from "@/app/lib/Fonts";
import { faqData } from "@/app/lib/contants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);

  // For closing the FAQ if the click is outside
  useEffect(() => {
    if (!faqContainerRef.current) return;

    function handleOutsideClick(event: MouseEvent) {
      if (
        faqContainerRef.current &&
        !faqContainerRef.current.contains(event.target as Node)
      )
        setOpenIndex(null);
    }
    // Add event listener
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setOpenIndex]);

  return (
    <section
      className={`text-center flex flex-col gap-6 p-6 ${rubikFont.className} rounded-2xl border items-center justify-center border-[#aaa8a8]/60 w-full bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20`}
      style={{
        borderWidth: "1.5px",
        borderBottomWidth: "2.5px",
        borderBottomColor: "#8886c2",
        boxShadow:
          "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
      }}
    >
      <div className="flex w-fit h-fit flex-col items-center justify-center gap-6">
        <h1 className="text-center w-fit h-fit text-lg sm:text-2xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-center w-fit h-full text-yellow-300 max-w-2xl mx-auto">
          Find answers to common questions about our products and services.
          Can't find what you're looking for? Contact our support team.
        </p>
      </div>

      <div
        ref={faqContainerRef}
        className="w-full flex flex-col gap-0 overflow-hidden"
      >
        {faqData.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-4 text-left flex items-center justify-between duration-200"
            >
              <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                {faq.question}
              </h3>
              <div
                className={`transition-transform duration-200 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown className="w-3 h-3 text-yellow-300" />
              </div>
            </button>
            <div
              className={`overflow-hidden flex items-start transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4">
                <p className="text-start text-sm sm:text-base text-yellow-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>

            {/* Divider between FAQ items */}
            {index < faqData.length - 1 && (
              <div className="px-4">
                <div className="border-t border-dashed border-yellow-300/40"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
