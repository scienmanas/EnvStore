"use client";

import { useEffect, useState } from "react";
import { AuthPageLoader } from "@/app/ui/loaders";
import { Navbar } from "@/app/ui/dashboard/Navbar";

export default function DashBoard() {
  const [mounted, setMounted] = useState<boolean>(false);

  if (!mounted) return <AuthPageLoader />;
  else return <div>I am Dashboard</div>;
}
