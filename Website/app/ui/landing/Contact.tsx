import { rubikFont } from "@/app/lib/Fonts";
import Link from "next/link";

export function Contact() {
  return (
    <section
      className={`contact flex flex-col gap-4 p-6 ${rubikFont.className} rounded-2xl border items-center justify-center border-[#aaa8a8]/60 w-full bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20`}
      style={{
        borderWidth: "1.5px",
        borderBottomWidth: "2.5px",
        borderBottomColor: "#8886c2",
        boxShadow:
          "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
      }}
    >
      <h3 className="text-xl font-semibold text-white">
        Still have questions?
      </h3>
      <p className="text-yellow-300 ">
        Ask us any additional questions. I myself maintain this project, so
        might take time to respond, but I will do my best to help you out!
      </p>
      <Link
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&to=iamscientistmanas@gmail.com"
        className="bg-black w-fit text-white px-6 py-2 rounded-lg font-medium"
      >
        Contact Me
      </Link>
    </section>
  );
}
