import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { dM_Mono } from "../ui/font";
import ClientSection from "../clients/our-clients";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-auto overflow-x-hidden relative w-full bg-[#161619]"
    >
      <img src="/assets/decoration.svg" className="absolute left-[220px]" />
      <div className="dot-grid " />
      <div className="pt-[238px] ">
        <div className="relative">
          <img
            className="absolute z-[0] top-[68%] -right-[3%] scale-[1.05] -translate-y-1/2"
            src="/assets/decoration-text.svg"
          />
          <div className="w-fit relative">
            <Image
              src="/assets/keizer-hero-image.webp"
              height={560}
              width={875}
              alt="keizer-hero-image"
              priority
              unoptimized
            />

            <div
              className="absolute inset-0 right-[0.39%] bg-gradient-to-l from-[#161619]/70 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
          <div className="absolute top-[50%] -translate-y-1/2  right-[10px]  lg:right-[190px]">
            <h1 className="text-[98px] ml-[8px] group translate-y-1 font-[700] leading-[98px] tracking-[102%] capitalize">
              Unleashing
              <span className="block text-black relative">
                Creativity Across
                <img
                  className="absolute group-hover:rotate-[2deg] top-0 left-0 w-full transition-all z-[-1]"
                  src="/assets/hero-h1-rectangle.svg"
                />
              </span>
              Digital platforms
            </h1>
            <p
              className={`mt-[35px]  translate-y-2 ${dM_Mono.className} [word-spacing:4px] tracking-[-99%] font-[400] opacity-65 leading-[30px] lg:text-[19px] md:text-[17px] text-[15px] md:w-[500px] lg:w-[800px]`}
            >
              From stunning websites to immersive games and motion graphics, we
              bring your vision to life with cutting-edge design and
              development.
            </p>
            <Link
              href="#contact"
              className="pt-[30px] translate-y-4  text-[17.8px] inline-block group border-b-2 border-white pb-[6px]"
            >
              Let’s Build Something Great Together{" "}
              <ArrowRight
                className="inline-block transition-all group-hover:translate-x-1"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[100vh]" />
    </section>
  );
};

export default HeroSection;
