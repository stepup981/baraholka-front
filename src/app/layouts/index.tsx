import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "../styles";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
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
