import { Navbar } from "@/app/ui/landing/Navbar";
import { Footer } from "@/app/ui/universal/Footer";

// Layout component that wraps the blog page contents
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center gap-6">
      <Navbar />
      <main className="w-full h-fit flex flex-col items-center justify-center p-4 mt-24">
        {children}
      </main>
      <div className="footer p-4 w-fit h-fit items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
