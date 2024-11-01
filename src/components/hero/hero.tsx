"use client"

import React from 'react';
import  { useEffect, useState } from 'react';
import { ChevronDown, Phone } from "lucide-react";
import FlipWords from '../ui/flip-words';

interface BackgroundPatternProps {
  className?: string;

}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className }) => (
  <svg
    viewBox="0 0 1000 1000"
    className={`absolute inset-0 w-full h-full opacity-10 ${className || ''}`}
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);



const CodeIllustration: React.FC = () => {
  const [lineWidths, setLineWidths] = useState<number[]>([]);

  useEffect(() => {
    // Generate random widths once on the client side
    const widths = Array.from({ length: 6 }, () => 120 + Math.random() * 100);
    setLineWidths(widths);
  }, []);
  return (
    <svg
      viewBox="0 0 500 500"
      className="absolute right-0 top-1/2 -translate-y-1/2 h-[90vh] w-auto opacity-90"
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="animate-pulse" style={{ animationDuration: '4s' }}>
        <rect x="100" y="50" width="300" height="200" rx="10"
          fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
        <rect x="120" y="70" width="260" height="160" rx="5"
          fill="url(#codeGradient)" opacity="0.2" />

        {/* Code Lines */}
        {lineWidths.map((width, i) => (
          <g key={`code-line-${i}`} opacity={0.3 - i * 0.04}>
            <rect
              x="130"
              y={90 + i * 20}
              width={width}
              height="6"
              rx="3"
              fill="white"
              opacity="0.2"
            />
          </g>
        ))}
      </g>
    </svg>
  );
};

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const words = ["New", "Better", "Faster", "Smarter"];
  
  return (
    <section className={`relative min-h-[85vh] flex font-sora items-center bg-black overflow-hidden w-full ${className || ''} `}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        <BackgroundPattern />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.05),transparent)]" />
      </div>
      
      {/* Feature Illustration */}
      <div className="absolute right-0 top-0 h-full w-2/3 overflow-hidden mt-24">
        <CodeIllustration />
      </div>
      
      <div className="relative z-10 container mx-auto px-16 lg:px-24">
        <div className="max-w-xl">
          {/* Main Content */}
          <div className="space-y-10">
            {/* Headline */}
            <h1 className="animate-fade-up text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
              <span className="text-gray-100">Ship</span>
              <FlipWords
                words={words}
                className="ml-4 bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent"
              />
            </h1>
            
            {/* Description */}
            <p className="animate-fade-up animation-delay-100 text-lg text-zinc-400 leading-relaxed">
              Transforming ideas into successful digital products with expert development and strategic funding support.
            </p>
            
            {/* Buttons */}
            <div className="animate-fade-up animation-delay-200 flex flex-wrap gap-6">
              <button
                className="group relative px-8 py-4 text-sm font-medium text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                type="button"
              >
                <div className="absolute inset-0 bg-white opacity-90" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-2">
                  <span>Book a call</span>
                  <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                </div>
              </button>
              
              <button
                className="group relative px-8 py-4 text-sm font-medium border border-white/20 text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/5"
                type="button"
              >
                <div className="relative flex items-center gap-2">
                  <span>Our Services</span>
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;