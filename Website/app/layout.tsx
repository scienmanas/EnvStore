import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Viewport } from "next";
import "./globals.css";
import { GradientBackground } from "@/app/ui/components/background";
import metaDataImg from "@/public/assets/metadata/metadata.png";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: `${process.env.SITE_NAME} | Home`,
  description:
    "EnStore is an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
  keywords: ["EnvStore", "open source tool"],
  authors: [
    {
      name: "Manas",
      url: "https://scienmanas.xyz",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: `${process.env.SITE_NAME} | Home`,
    description:
      "EnStore is an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
    url: process.env.BASE_URL,

    type: "article",
    siteName: `${process.env.SITE_NAME}`,
    locale: "en_US",
    authors: ["Manas"],
    images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: `${process.env.SITE_NAME} | Home`,
    description:
      "EnStore is an Open Source solution to to manage the env files for your projects. Stored encrypted, and decrypted when required.",
    creator: "@scienmanas",
    site: process.env.SITE_ENV,
    images: metaDataImg.src,
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <GradientBackground />
        <GoogleAnalytics gaId={process.env.GOOGLE_CLIENT_ID ?? ""} />
        {/* But me a coffee tag */}
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="scienmanas"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for supporting me & my open source projects :)"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </body>
    </html>
  );
}
