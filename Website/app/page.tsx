import { Navbar } from "@/app/ui/landing/Navbar";
import { Hero } from "@/app/ui/landing/Hero";
import { Demo } from "@/app/ui/landing/Demo";
import { Features } from "@/app/ui/landing/Features";
import { FAQ } from "@/app/ui/landing/FAQ";
import { Contact } from "@/app/ui/landing/Contact";
import { Footer } from "@/app/ui/universal/Footer";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col gap-14 items-center justify-center scroll-smooth relative p-4">
      <div className="content-wrapper flex relative flex-col gap-14 items-center justify-center w-full max-w-screen-xl h-fit">
        <Navbar />
        <Hero />
        <Demo />
      </div>
      <Features />
      <div className="content-wrapper flex relative flex-col gap-14 items-center justify-center w-full max-w-screen-xl h-fit">
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
