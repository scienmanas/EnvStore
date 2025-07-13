import Link from "next/link";
import { Metadata } from "next";
import { rubikFont } from "@/app/lib/Fonts";

// Generate metadata for the 404 error page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `404 - ${process.env.SITE_NAME}`,
    description:
      "Error, the specified URL cannot be found, please check the url and try again",
    openGraph: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again",
    },
    twitter: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again", //
    },
  };
}

// Not found component
export default function NotFound() {
  return (
    <div className={`w-dvw h-dvh flex items-center justify-center ${rubikFont.className}`}>
      <div className="content-wrapper w-fit h-fit flex flex-col items-center max-w-[448px] text-wrap gap-4 p-4">
        {/* Display the 404 error code */}
        <div className="error-text text-yellow-100 w-fit h-fit text-8xl font-extrabold animate-pulse">
          404
        </div>
        <div className="regrets-and-console-text w-fit h-fit flex flex-col items-center justify-center gap-2">
          {/* Regret message for the missing page */}
          <div className="regret-text w-fit h-fit text-center text-wrap font-bold text-neutral-100 text-2xl">
            Sorry 😔, I couldn't find this page.
          </div>
          {/* Suggestion to visit the homepage */}
          <div className="console-person w-fit h-fit text-center text-wrap text-yellow-300">
            Maybe you hit a wrong URL? Don't worry, you can go back to home page
            and we have many things to explore.
          </div>
        </div>
        {/* Button to navigate back to the homepage */}
        <Link
          href={"/"}
          className="w-fit h-fit mt-4 return-to-home px-5 py-4 rounded-[30px] text-neutral-700 border border-[#9ea5b0] bg-neutral-300 hover:bg-neutral-200 hover:border-neutral-600 hover:text-neutral-800 font-semibold duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
