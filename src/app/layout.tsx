import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "~/src/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "keizer",
  description:
    "Unleashing Creativity Across Digital Platforms, From stunning websites to immersive games and motion graphics, we bring your vision to life with cutting-edge design and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
