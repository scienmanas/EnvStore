import type { Metadata } from "next";
import metaDataImg from "@/public/assets/metadata/metadata.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: `Signin - ${process.env.SITE_NAME}`,
  description:
    "Sign in to EnvStore an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
  keywords: ["signin", "login", "EnvStore", "open source tool"],
  authors: [
    {
      name: "Manas",
      url: "https://scienmanas.xyz",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: `Signin - ${process.env.SITE_NAME}`,
    description:
      "Sign in to EnvStore an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
    url: process.env.BASE_URL,

    type: "article",
    siteName: `${process.env.SITE_NAME}`,
    locale: "en_US",
    authors: ["Manas"],
    images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: `Signin - ${process.env.SITE_NAME}`,
    description:
      "Sign in to EnvStore an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
    creator: "@scienmanas",
    site: process.env.SITE_ENV,
    images: metaDataImg.src,
  },
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-fit">{children}</div>;
}
