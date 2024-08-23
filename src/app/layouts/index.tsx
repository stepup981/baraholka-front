"use client";
import { useEffect } from "react";
import { Rubik } from "next/font/google";
import "@/app/styles";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

import { checkAuth } from "@/features/login/api";

import useUserStore from "@/entities/user/model/store";

const inter = Rubik({ subsets: ["latin"] });

export function RootLayout({ children }: { children: React.ReactNode }) {
  const { setIsLoggedIn, isLoggedIn, setUser } = useUserStore();

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    const fetchAuthStatus = async () => {
      try {
        const response = await checkAuth();
        localStorage.setItem("token", response.data.accessToken);
        setUser(response.data.user);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
        console.log(error);
      }
    };
    fetchAuthStatus();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
