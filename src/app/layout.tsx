
import type { Metadata } from "next";
import { Nobile } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Header/Nav/Nav";
import Footer from "@/Components/Footer/Index";
import React from "react";
const nobile = Nobile({ subsets: ["latin"], weight: "400", variable: "--font-nobile" });

export const metadata: Metadata = {
  title: "Merwas Task",
  description: "Our Website ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"  >
      <body className={nobile.className} suppressHydrationWarning={true} >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
