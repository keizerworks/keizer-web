"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navLinks: string[] = ["Product", "Development", "Design", "Marketing"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-[100] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            width={40}
            height={40}
          />
          <span className="font-bold text-xl text-white tracking-tight group-hover:text-neutral-200">
            Keizer<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/95 border-neutral-800 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-300 text-2xl font-medium tracking-wide py-2"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <SheetFooter className="mt-12">
                <Button className="w-full py-6 text-lg font-semibold bg-white hover:bg-neutral-200 text-black rounded-full transition-colors duration-300">
                  Get Started
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-neutral-300 hover:text-white transition-all duration-300 text-md font-medium relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="px-6 py-2.5 ml-4 bg-white hover:bg-neutral-200 text-black rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
