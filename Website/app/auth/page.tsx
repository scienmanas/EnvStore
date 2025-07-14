"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AuthPageLoader } from "@/app/ui/loaders";
import Image from "next/image";
import { rubikFont } from "@/app/lib/Fonts";
import { FaCheck } from "react-icons/fa6";
import logoImg from "@/public/assets/logo/full_and_transparent.png";

export default function Auth() {
  // States and Routers
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  // Handle Google OAuth
  async function handleGoogleAuthentication() {
    const googleAuthUrl = new URL(
      "https://accounts.google.com/o/oauth2/v2/auth"
    );
    googleAuthUrl.searchParams.set(
      "client_id",
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""
    );
    googleAuthUrl.searchParams.set(
      "redirect_uri",
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!
    );
    googleAuthUrl.searchParams.set("response_type", "code");
    googleAuthUrl.searchParams.set("scope", "openid email profile");
    // Redirect for OAuth
    router.push(googleAuthUrl.toString());
  }

  // Handle Github OAuth
  async function handleGithubAuthentication() {
    const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
    githubAuthUrl.searchParams.set(
      "client_id",
      process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!
    );
    githubAuthUrl.searchParams.set(
      "redirect_uri",
      process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI!
    );
    githubAuthUrl.searchParams.set("response_type", "code");
    githubAuthUrl.searchParams.set("scope", "read:user user:email");
    // Redirect fot authentication
    router.push(githubAuthUrl.toString());
  }

  // Check whether user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 200) router.push("/dashboard");
      else setMounted(true);
    };

    checkAuth();
  }, [mounted, setMounted]);

  if (!mounted) return <AuthPageLoader />;
  else
    return (
      <section
        className={`auth w-dvw min-h-dvh flex items-center justify-center flex-col p-4 ${rubikFont.className}`}
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`auth-page w-fit max-w-[27rem] h-fit text-center py-6 px-8 ${rubikFont.className} rounded-2xl flex flex-col gap-2 items-center justify-center border border-[#aaa8a8]/60 bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20`}
          style={{
            borderWidth: "1.5px",
            borderBottomWidth: "2.5px",
            borderBottomColor: "#8886c2",
            boxShadow:
              "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
          }}
        >
          <div className="heading w-fit flex flex-col items-center justify-center">
            <Link href={"/"}>
              <Image
                alt="logo"
                src={logoImg}
                width={150}
                className="w-fit h-fit select-none pointer-events-none"
              />
            </Link>
            <h1 className="text-yellow-200 text-3xl font-bold w-fit h-fit">
              Login/Signup
            </h1>
            <p className="description w-fit h-fit mt-2 text-cyan-200 ">
              Glad to have you here — manage your .env effortlessly :)
            </p>
          </div>
          <div className="login-signin-buttons w-full h-fit flex flex-col gap-2 mt-4">
            {/* Google Sign-in Button */}
            <button
              onClick={handleGoogleAuthentication}
              className={`w-full h-fit text-center px-5 py-3 border-2 ${rubikFont.className} rounded-lg flex flex-row items-center justify-center border border-[#aaa8a8]/60 bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20 cursor-pointer`}
              style={{
                borderWidth: "1.5px",
                borderBottomWidth: "2.5px",
                borderBottomColor: "#8886c2",
                boxShadow:
                  "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              }}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-semibold text-yellow-100">
                Continue with Google
              </span>
            </button>
            {/* Github Sign-in Button */}
            <button
              onClick={handleGithubAuthentication}
              className={`w-full h-fit text-center px-5 py-3 border-2 ${rubikFont.className} rounded-lg flex flex-row items-center justify-center border border-[#aaa8a8]/60 bg-white/10 backdrop-blur-sm shadow-xl shadow-blue-900/20 cursor-pointer`}
              style={{
                borderWidth: "1.5px",
                borderBottomWidth: "2.5px",
                borderBottomColor: "#8886c2",
                boxShadow:
                  "0 4px 24px 0 rgba(30, 64, 175, 0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              }}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.776.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.125-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.654.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.63-5.48 5.922.432.372.816 1.103.816 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
              </svg>
              <span className="font-semibold text-yellow-100">
                Continue with GitHub
              </span>
            </button>
          </div>
          {/* Divider - half line left, text, half line right */}
          <div className="flex items-center w-full my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-sm bg-white/10 text-yellow-200 font-semibold rounded mx-2 z-10">
              Secure sign-in
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <ul className="features flex flex-col gap-1 items-start w-full h-fit">
            <li className="flex flex-row gap-2 w-fit h-fit items-center justify-center">
              <FaCheck className="text-orange-300 text-sm" />
              <span className="text-yellow-100">No Password Required</span>
            </li>
            <li className="flex flex-row gap-2 w-fit h-fit items-center justify-center">
              <FaCheck className="text-orange-300 text-sm" />
              <span className="text-yellow-100">Secure authentication</span>
            </li>
            <li className="flex flex-row gap-2 w-fit h-fit items-center justify-center">
              <FaCheck className="text-orange-300 text-sm" />
              <span className="text-yellow-100">Quick setup in seconds</span>
            </li>
          </ul>
        </motion.div>
        <motion.div className="agreement w-fit max-w-[27rem] p-2 text-center text-yellow-200">
          By signing up, you agree to our{" "}
          <Link
            href={"/legal/terms-and-conditions"}
            className="font-semibold underline"
          >
            Terms of Service{" "}
          </Link>
          and{" "}
          <Link
            href={"/legal/privacy-policy"}
            className="font-semibold underline"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </section>
    );
}
